/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { AMM, AMMInterface } from "../../../contracts/amm.sol/AMM";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_tokenX",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_tokenY",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "PRECISION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_inToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountIn",
        type: "uint256",
      },
    ],
    name: "getEquivalentToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_outToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountOut",
        type: "uint256",
      },
    ],
    name: "getSwapEstimateIn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_inToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountIn",
        type: "uint256",
      },
    ],
    name: "getSwapEstimateOut",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_share",
        type: "uint256",
      },
    ],
    name: "getWithdrawEstimate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_tokenX",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountX",
        type: "uint256",
      },
      {
        internalType: "contract IERC20",
        name: "_tokenY",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountY",
        type: "uint256",
      },
    ],
    name: "provide",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "share",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_inToken",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_outToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountIn",
        type: "uint256",
      },
    ],
    name: "swap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    name: "totalAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalShare",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_share",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620026813803806200268183398181016040528101906200003791906200013e565b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505062000185565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000f282620000c5565b9050919050565b60006200010682620000e5565b9050919050565b6200011881620000f9565b81146200012457600080fd5b50565b60008151905062000138816200010d565b92915050565b60008060408385031215620001585762000157620000c0565b5b6000620001688582860162000127565b92505060206200017b8582860162000127565b9150509250929050565b6124ec80620001956000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c806387b292f91161007157806387b292f91461018d578063a37230ae146101bd578063aaf5eb68146101ed578063bfa7d42f1461020b578063d72b9da21461023b578063df791e501461026b576100a9565b8063026c4207146100ae5780631877bb5c146100cc5780632e1a7d4d146100fc5780633279081a1461012d57806349b81b101461015d575b600080fd5b6100b661029b565b6040516100c39190611b5c565b60405180910390f35b6100e660048036038101906100e19190611bda565b6102a1565b6040516100f39190611b5c565b60405180910390f35b61011660048036038101906101119190611c33565b6102b9565b604051610124929190611c60565b60405180910390f35b61014760048036038101906101429190611cc7565b6106cf565b6040516101549190611b5c565b60405180910390f35b61017760048036038101906101729190611d2e565b610cec565b6040516101849190611b5c565b60405180910390f35b6101a760048036038101906101a29190611d2e565b610f7d565b6040516101b49190611b5c565b60405180910390f35b6101d760048036038101906101d29190611d2e565b611150565b6040516101e49190611b5c565b60405180910390f35b6101f5611329565b6040516102029190611b5c565b60405180910390f35b61022560048036038101906102209190611d2e565b611330565b6040516102329190611b5c565b60405180910390f35b61025560048036038101906102509190611d6e565b611546565b6040516102629190611b5c565b60405180910390f35b61028560048036038101906102809190611d9b565b61155e565b6040516102929190611b5c565b60405180910390f35b60025481565b60036020528060005260406000206000915090505481565b600080600060025411610301576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102f890611e4b565b60405180910390fd5b60008311610344576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161033b90611eb7565b60405180910390fd5b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548311156103c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103bd90611f23565b60405180910390fd5b60006103f260008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1685610f7d565b90506000610422600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1686610f7d565b905084600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546104739190611f72565b92505081905550846002600082825461048c9190611f72565b9250508190555081600460008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546105039190611f72565b925050819055508060046000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461057b9190611f72565b9250508190555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33846040518363ffffffff1660e01b81526004016105dd929190611fb5565b6020604051808303816000875af11580156105fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106209190612016565b50600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b815260040161067e929190611fb5565b6020604051808303816000875af115801561069d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106c19190612016565b508181935093505050915091565b6000848360008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16148061077a5750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b8015610829575060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614806108285750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b5b610868576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161085f9061208f565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108cd906120fb565b60405180910390fd5b60008611610919576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161091090612167565b60405180910390fd5b6000841161095c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095390612167565b60405180910390fd5b6000806002540361097e57620f424060646109779190612187565b9050610a7e565b6000600460008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054886002546109ce9190612187565b6109d891906121f8565b90506000600460008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205487600254610a2a9190612187565b610a3491906121f8565b9050808214610a78576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a6f9061229b565b60405180910390fd5b81925050505b60008111610ac1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ab89061232d565b60405180910390fd5b8773ffffffffffffffffffffffffffffffffffffffff166323b872dd33308a6040518463ffffffff1660e01b8152600401610afe9392919061234d565b6020604051808303816000875af1158015610b1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b419190612016565b508573ffffffffffffffffffffffffffffffffffffffff166323b872dd3330886040518463ffffffff1660e01b8152600401610b7f9392919061234d565b6020604051808303816000875af1158015610b9e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc29190612016565b5086600460008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610c129190612384565b9250508190555084600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610c689190612384565b925050819055508060026000828254610c819190612384565b9250508190555080600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610cd79190612384565b92505081905550809350505050949350505050565b60008060025411610d32576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d2990611e4b565b60405180910390fd5b8260008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161480610dda5750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b610e19576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e109061208f565b60405180910390fd5b600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548310610e9a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9190612404565b60405180910390fd5b6000610ea5856119b3565b9050600084600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546103e8610ef79190612187565b610f019190612187565b9050600085600460008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f509190611f72565b6103e5610f5d9190612187565b905060008183610f6d91906121f8565b9050809550505050505092915050565b60008060025411610fc3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fba90611e4b565b60405180910390fd5b8260008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16148061106b5750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b6110aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110a19061208f565b60405180910390fd5b6002548311156110ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110e690612496565b60405180910390fd5b600254600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548461113d9190612187565b61114791906121f8565b91505092915050565b60008060025411611196576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161118d90611e4b565b60405180910390fd5b8260008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16148061123e5750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b61127d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112749061208f565b60405180910390fd5b6000611288856119b3565b9050600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205484600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546113159190612187565b61131f91906121f8565b9250505092915050565b620f424081565b60008060025411611376576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161136d90611e4b565b60405180910390fd5b8260008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16148061141e5750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b61145d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114549061208f565b60405180910390fd5b6000611468856119b3565b905060006103e58561147a9190612187565b90506000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054826114c99190612187565b90506000826103e8600460008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461151b9190612187565b6115259190612384565b90506000818361153591906121f8565b905080965050505050505092915050565b60046020528060005260406000206000915090505481565b600080600254116115a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161159b90611e4b565b60405180910390fd5b838360008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16148061164d5750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b80156116fc575060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614806116fb5750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b5b61173b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117329061208f565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036117a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117a0906120fb565b60405180910390fd5b600084116117ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117e390612167565b60405180910390fd5b60006117f88786611330565b90508673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330886040518463ffffffff1660e01b81526004016118379392919061234d565b6020604051808303816000875af1158015611856573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061187a9190612016565b5084600460008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546118ca9190612384565b9250508190555080600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546119209190611f72565b925050819055508573ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401611962929190611fb5565b6020604051808303816000875af1158015611981573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119a59190612016565b508093505050509392505050565b60008160008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161480611a5d5750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b611a9c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a939061208f565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611b1957600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169150611b3d565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691505b50919050565b6000819050919050565b611b5681611b43565b82525050565b6000602082019050611b716000830184611b4d565b92915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611ba782611b7c565b9050919050565b611bb781611b9c565b8114611bc257600080fd5b50565b600081359050611bd481611bae565b92915050565b600060208284031215611bf057611bef611b77565b5b6000611bfe84828501611bc5565b91505092915050565b611c1081611b43565b8114611c1b57600080fd5b50565b600081359050611c2d81611c07565b92915050565b600060208284031215611c4957611c48611b77565b5b6000611c5784828501611c1e565b91505092915050565b6000604082019050611c756000830185611b4d565b611c826020830184611b4d565b9392505050565b6000611c9482611b9c565b9050919050565b611ca481611c89565b8114611caf57600080fd5b50565b600081359050611cc181611c9b565b92915050565b60008060008060808587031215611ce157611ce0611b77565b5b6000611cef87828801611cb2565b9450506020611d0087828801611c1e565b9350506040611d1187828801611cb2565b9250506060611d2287828801611c1e565b91505092959194509250565b60008060408385031215611d4557611d44611b77565b5b6000611d5385828601611cb2565b9250506020611d6485828601611c1e565b9150509250929050565b600060208284031215611d8457611d83611b77565b5b6000611d9284828501611cb2565b91505092915050565b600080600060608486031215611db457611db3611b77565b5b6000611dc286828701611cb2565b9350506020611dd386828701611cb2565b9250506040611de486828701611c1e565b9150509250925092565b600082825260208201905092915050565b7f5a65726f206c6971756964697479000000000000000000000000000000000000600082015250565b6000611e35600e83611dee565b9150611e4082611dff565b602082019050919050565b60006020820190508181036000830152611e6481611e28565b9050919050565b7f73686172652063616e6e6f74206265207a65726f000000000000000000000000600082015250565b6000611ea1601483611dee565b9150611eac82611e6b565b602082019050919050565b60006020820190508181036000830152611ed081611e94565b9050919050565b7f496e73756666696369656e742073686172650000000000000000000000000000600082015250565b6000611f0d601283611dee565b9150611f1882611ed7565b602082019050919050565b60006020820190508181036000830152611f3c81611f00565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611f7d82611b43565b9150611f8883611b43565b9250828203905081811115611fa057611f9f611f43565b5b92915050565b611faf81611b9c565b82525050565b6000604082019050611fca6000830185611fa6565b611fd76020830184611b4d565b9392505050565b60008115159050919050565b611ff381611fde565b8114611ffe57600080fd5b50565b60008151905061201081611fea565b92915050565b60006020828403121561202c5761202b611b77565b5b600061203a84828501612001565b91505092915050565b7f546f6b656e206973206e6f7420696e2074686520706f6f6c0000000000000000600082015250565b6000612079601883611dee565b915061208482612043565b602082019050919050565b600060208201905081810360008301526120a88161206c565b9050919050565b7f546f6b656e732073686f756c6420626520646966666572656e74000000000000600082015250565b60006120e5601a83611dee565b91506120f0826120af565b602082019050919050565b60006020820190508181036000830152612114816120d8565b9050919050565b7f416d6f756e742063616e6e6f74206265207a65726f0000000000000000000000600082015250565b6000612151601583611dee565b915061215c8261211b565b602082019050919050565b6000602082019050818103600083015261218081612144565b9050919050565b600061219282611b43565b915061219d83611b43565b92508282026121ab81611b43565b915082820484148315176121c2576121c1611f43565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061220382611b43565b915061220e83611b43565b92508261221e5761221d6121c9565b5b828204905092915050565b7f4571756976616c656e7420746f6b656e7320617265206e6f742070726f76696460008201527f6564000000000000000000000000000000000000000000000000000000000000602082015250565b6000612285602283611dee565b915061229082612229565b604082019050919050565b600060208201905081810360008301526122b481612278565b9050919050565b7f41737365742076616c7565206c657373207468616e207468726573686f6c642060008201527f666f7220636f6e747269627574696f6e73000000000000000000000000000000602082015250565b6000612317603183611dee565b9150612322826122bb565b604082019050919050565b600060208201905081810360008301526123468161230a565b9050919050565b60006060820190506123626000830186611fa6565b61236f6020830185611fa6565b61237c6040830184611b4d565b949350505050565b600061238f82611b43565b915061239a83611b43565b92508282019050808211156123b2576123b1611f43565b5b92915050565b7f496e73756666696369656e7420706f6f6c2062616c616e636500000000000000600082015250565b60006123ee601983611dee565b91506123f9826123b8565b602082019050919050565b6000602082019050818103600083015261241d816123e1565b9050919050565b7f53686172652073686f756c64206265206c657373207468616e20746f74616c5360008201527f6861726500000000000000000000000000000000000000000000000000000000602082015250565b6000612480602483611dee565b915061248b82612424565b604082019050919050565b600060208201905081810360008301526124af81612473565b905091905056fea2646970667358221220ddb5218995da5334bc58a8ab9f8a503d8a9b0296e963a26ed42b0152321c70a864736f6c63430008110033";

type AMMConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AMMConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AMM__factory extends ContractFactory {
  constructor(...args: AMMConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _tokenX: PromiseOrValue<string>,
    _tokenY: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AMM> {
    return super.deploy(_tokenX, _tokenY, overrides || {}) as Promise<AMM>;
  }
  override getDeployTransaction(
    _tokenX: PromiseOrValue<string>,
    _tokenY: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_tokenX, _tokenY, overrides || {});
  }
  override attach(address: string): AMM {
    return super.attach(address) as AMM;
  }
  override connect(signer: Signer): AMM__factory {
    return super.connect(signer) as AMM__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AMMInterface {
    return new utils.Interface(_abi) as AMMInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): AMM {
    return new Contract(address, _abi, signerOrProvider) as AMM;
  }
}