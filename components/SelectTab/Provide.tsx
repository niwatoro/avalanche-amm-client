import { BigNumber, ethers } from "ethers";
import { useCallback, useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import { AmmType, TokenType } from "../../hooks/useContract";
import { validAmount } from "../../utils/validAmount";
import InputNumberBox from "../InputBox/InputNumberBox";
import styles from "./SelectTab.module.css";

type Props = {
	token0: TokenType | undefined;
	token1: TokenType | undefined;
	amm: AmmType | undefined;
	currentAccount: string | undefined;
	updateDetails: () => void;
};

export default function Provide({ token0, token1, amm, currentAccount, updateDetails }: Props) {
	const [amountOfToken0, setAmountOfToken0] = useState("");
	const [amountOfToken1, setAmountOfToken1] = useState("");
	const [activePool, setActivePool] = useState(true);

	const checkLiquidity = useCallback(async () => {
		if (!amm) return;
		try {
			const totalShare = await amm.contract.totalShare();
			if (totalShare.eq(BigNumber.from(0))) {
				setActivePool(false);
			} else {
				setActivePool(true);
			}
		} catch (err) {
			alert(err);
		}
	}, [amm]);

	useEffect(() => {
		checkLiquidity();
	}, [checkLiquidity]);

	const getProvideEstimate = async (
		token: TokenType,
		amount: string,
		setPairTokenAmount: (amount: string) => void
	) => {
		if (!amm || !token0 || !token1) return;
		if (!activePool) return;
		if (!validAmount(amount)) return;
		try {
			const amountInWei = ethers.utils.parseEther(amount);
			const pairAmountInWei = await amm.contract.getEquivalentToken(
				token.contract.address,
				amountInWei
			);
			const pairAmountInEther = ethers.utils.formatEther(pairAmountInWei);
			setPairTokenAmount(pairAmountInEther);
		} catch (err) {
			alert(err);
		}
	};

	const onChangeAmount = (
		amount: string,
		token: TokenType | undefined,
		setAmount: (amount: string) => void,
		setPairTokenAmount: (amount: string) => void
	) => {
		if (!token) return;
		setAmount(amount);
		getProvideEstimate(token, amount, setPairTokenAmount);
	};

	const onClickProvide = async () => {
		if (!currentAccount) {
			alert("Connect wallet");
			return;
		}
		if (!amm || !token0 || !token1) return;
		if (!validAmount(amountOfToken0) || !validAmount(amountOfToken1)) {
			alert("Amount should be a valid number");
			return;
		}
		try {
			const amountOfToken0InWei = ethers.utils.parseEther(amountOfToken0);
			const amountOfToken1InWei = ethers.utils.parseEther(amountOfToken1);

			const txn0 = await token0.contract.approve(amm.contract.address, amountOfToken0InWei);
			const txn1 = await token1.contract.approve(amm.contract.address, amountOfToken1InWei);

			await txn0.wait();
			await txn1.wait();

			const txn = await amm.contract.provide(
				token0.contract.address,
				amountOfToken0InWei,
				token1.contract.address,
				amountOfToken1InWei
			);
			await txn.wait();
			setAmountOfToken0("");
			setAmountOfToken1("");
			checkLiquidity();
			updateDetails();
			alert("Success");
		} catch (err) {
			alert(err);
		}
	};

	return (
		<div className={styles.tabBody}>
			<InputNumberBox
				leftHeader={"Amount of " + (token0 ? token0.symbol : "some token")}
				right={token0 ? token0.symbol : ""}
				value={amountOfToken0}
				onChange={(e) =>
					onChangeAmount(e.target.value, token0, setAmountOfToken0, setAmountOfToken1)
				}
			/>
			<div className={styles.swapIcon}>
				<MdAdd />
			</div>
			<InputNumberBox
				leftHeader={"Amount of " + (token1 ? token1.symbol : "some token")}
				right={token1 ? token1.symbol : ""}
				value={amountOfToken1}
				onChange={(e) =>
					onChangeAmount(e.target.value, token1, setAmountOfToken1, setAmountOfToken0)
				}
			/>
			{!activePool && (
				<div className={styles.error}>Message: Empty pool. Set the initial conversion rate.</div>
			)}
			<div className={styles.bottomDiv}>
				<div className={styles.btn} onClick={() => onClickProvide()}>
					Provide
				</div>
			</div>
		</div>
	);
}
