import { useEffect, useState } from "react";
import { getEthereum } from "../utils/ethereum";

type ReturnUseWallet = {
	currentAccount: string | undefined;
	connectWallet: () => void;
};

export const useWallet = (): ReturnUseWallet => {
	const [currentAccount, setCurrentAccount] = useState<string>();
	const ethereum = getEthereum();

	const connectWallet = async () => {
		try {
			if (!ethereum) {
				alert("Get wallet");
				return;
			}
			const accounts = await ethereum.request({
				method: "eth_requestAccounts",
			});
			if (!Array.isArray(accounts)) return;
			console.log("Connected: ", accounts[0]);
			setCurrentAccount(accounts[0]);
		} catch (err) {
			console.log(err);
		}
	};

	const checkIfWalletIsConnected = async () => {
		try {
			if (!ethereum) {
				console.log("Make sure you have wallets");
				return;
			} else {
				console.log("We have the ethereum object: ", ethereum);
			}
			const accounts = await ethereum.request({ method: "eth_accounts" });
			if (!Array.isArray(accounts)) return;
			if (accounts.length !== 0) {
				const account = accounts[0];
				console.log("Found an authorized account: ", account);
				setCurrentAccount(account);
			} else {
				console.log("No authorized accounts found");
			}
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		checkIfWalletIsConnected();
	}, []);

	return {
		currentAccount,
		connectWallet,
	};
};
