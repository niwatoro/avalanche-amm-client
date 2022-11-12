import { BigNumber, ethers } from "ethers";
import { useEffect, useState } from "react";
import {
	AMM as AmmContractType,
	JOEToken as JoeContractType,
	USDCToken as UsdcContractType,
} from "../typechain-types";
import AmmArtifact from "../utils/AMM.json";
import { getEthereum } from "../utils/ethereum";
import JoeArtifact from "../utils/JOEToken.json";
import UsdcArtifact from "../utils/USDCToken.json";

export const UsdcAddress = "0x64dE95296C79E11808F4bC7cef233E815586474F";
export const JoeAddress = "0x54B7EB83b10Bd26221A8c04fabCc78De74F3B736";
export const AmmAddress = "0xD28486eF7142591b211D47C775E12A970b7b8f31";

export type TokenType = {
	symbol: string;
	contract: UsdcContractType | JoeContractType;
};

export type AmmType = {
	sharePrecision: BigNumber;
	contract: AmmContractType;
};

type ReturnUseContract = {
	usdc: TokenType | undefined;
	joe: TokenType | undefined;
	amm: AmmType | undefined;
};

export const useContract = (currentAccount: string | undefined): ReturnUseContract => {
	const [usdc, setUsdc] = useState<TokenType>();
	const [joe, setJoe] = useState<TokenType>();
	const [amm, setAmm] = useState<AmmType>();
	const ethereum = getEthereum();

	const getContract = (
		contractAddress: string,
		abi: ethers.ContractInterface,
		storeContract: (_: ethers.Contract) => void
	) => {
		if (!ethereum) {
			console.log("Ethereum object does not exist");
			return;
		}
		if (!currentAccount) {
			console.log("currentAccount does not exist");
			return;
		}
		try {
			// @ts-ignore: ethereum as ethers.providers.ExternalProvider
			const provider = new ethers.providers.Web3Provider(ethereum);
			const signer = provider.getSigner();
			const Contract = new ethers.Contract(contractAddress, abi, signer);
			storeContract(Contract);
		} catch (err) {
			console.log(err);
		}
	};

	const generateUsdc = async (contract: UsdcContractType) => {
		try {
			const symbol = await contract.symbol();
			setUsdc({ symbol: symbol, contract: contract } as TokenType);
		} catch (err) {
			console.log(err);
		}
	};

	const generateJoe = async (contract: JoeContractType) => {
		try {
			const symbol = await contract.symbol();
			setJoe({ symbol: symbol, contract: contract } as TokenType);
		} catch (err) {
			console.log(err);
		}
	};

	const generateAmm = async (contract: AmmContractType) => {
		try {
			const precision = await contract.PRECISION();
			setAmm({ sharePrecision: precision, contract: contract } as AmmType);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getContract(UsdcAddress, UsdcArtifact.abi, (Contract: ethers.Contract) => {
			generateUsdc(Contract as UsdcContractType);
		});
		getContract(JoeAddress, JoeArtifact.abi, (Contract: ethers.Contract) => {
			generateJoe(Contract as JoeContractType);
		});
		getContract(AmmAddress, AmmArtifact.abi, (Contract: ethers.Contract) => {
			generateAmm(Contract as AmmContractType);
		});
	}, [ethereum, currentAccount]);

	return { usdc, joe, amm };
};
