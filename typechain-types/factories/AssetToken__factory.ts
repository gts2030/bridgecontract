/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AssetToken, AssetTokenInterface } from "../AssetToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "totalSupply_",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001a2638038062001a26833981810160405281019062000037919062000492565b81818160039080519060200190620000519291906200020a565b5080600490805190602001906200006a9291906200020a565b5050506200007f33846200008860201b60201c565b505050620006cd565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620000fa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000f1906200058d565b60405180910390fd5b6200010e600083836200020060201b60201c565b8060026000828254620001229190620005de565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620001799190620005de565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620001e091906200064c565b60405180910390a3620001fc600083836200020560201b60201c565b5050565b505050565b505050565b828054620002189062000698565b90600052602060002090601f0160209004810192826200023c576000855562000288565b82601f106200025757805160ff191683800117855562000288565b8280016001018555821562000288579182015b82811115620002875782518255916020019190600101906200026a565b5b5090506200029791906200029b565b5090565b5b80821115620002b65760008160009055506001016200029c565b5090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b620002e381620002ce565b8114620002ef57600080fd5b50565b6000815190506200030381620002d8565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200035e8262000313565b810181811067ffffffffffffffff8211171562000380576200037f62000324565b5b80604052505050565b600062000395620002ba565b9050620003a3828262000353565b919050565b600067ffffffffffffffff821115620003c657620003c562000324565b5b620003d18262000313565b9050602081019050919050565b60005b83811015620003fe578082015181840152602081019050620003e1565b838111156200040e576000848401525b50505050565b60006200042b6200042584620003a8565b62000389565b9050828152602081018484840111156200044a57620004496200030e565b5b62000457848285620003de565b509392505050565b600082601f83011262000477576200047662000309565b5b81516200048984826020860162000414565b91505092915050565b600080600060608486031215620004ae57620004ad620002c4565b5b6000620004be86828701620002f2565b935050602084015167ffffffffffffffff811115620004e257620004e1620002c9565b5b620004f0868287016200045f565b925050604084015167ffffffffffffffff811115620005145762000513620002c9565b5b62000522868287016200045f565b9150509250925092565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b600062000575601f836200052c565b915062000582826200053d565b602082019050919050565b60006020820190508181036000830152620005a88162000566565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620005eb82620002ce565b9150620005f883620002ce565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111562000630576200062f620005af565b5b828201905092915050565b6200064681620002ce565b82525050565b60006020820190506200066360008301846200063b565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620006b157607f821691505b602082108103620006c757620006c662000669565b5b50919050565b61134980620006dd6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461016857806370a082311461019857806395d89b41146101c8578063a457c2d7146101e6578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610276565b6040516100c39190610c04565b60405180910390f35b6100e660048036038101906100e19190610cbf565b610308565b6040516100f39190610d1a565b60405180910390f35b61010461032b565b6040516101119190610d44565b60405180910390f35b610134600480360381019061012f9190610d5f565b610335565b6040516101419190610d1a565b60405180910390f35b610152610364565b60405161015f9190610dce565b60405180910390f35b610182600480360381019061017d9190610cbf565b61036d565b60405161018f9190610d1a565b60405180910390f35b6101b260048036038101906101ad9190610de9565b610417565b6040516101bf9190610d44565b60405180910390f35b6101d061045f565b6040516101dd9190610c04565b60405180910390f35b61020060048036038101906101fb9190610cbf565b6104f1565b60405161020d9190610d1a565b60405180910390f35b610230600480360381019061022b9190610cbf565b6105db565b60405161023d9190610d1a565b60405180910390f35b610260600480360381019061025b9190610e16565b6105fe565b60405161026d9190610d44565b60405180910390f35b60606003805461028590610e85565b80601f01602080910402602001604051908101604052809291908181526020018280546102b190610e85565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b5050505050905090565b600080610313610685565b905061032081858561068d565b600191505092915050565b6000600254905090565b600080610340610685565b905061034d858285610856565b6103588585856108e2565b60019150509392505050565b60006012905090565b600080610378610685565b905061040c818585600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104079190610ee5565b61068d565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461046e90610e85565b80601f016020809104026020016040519081016040528092919081815260200182805461049a90610e85565b80156104e75780601f106104bc576101008083540402835291602001916104e7565b820191906000526020600020905b8154815290600101906020018083116104ca57829003601f168201915b5050505050905090565b6000806104fc610685565b90506000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050838110156105c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b990610fad565b60405180910390fd5b6105cf828686840361068d565b60019250505092915050565b6000806105e6610685565b90506105f38185856108e2565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036106fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f39061103f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361076b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610762906110d1565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516108499190610d44565b60405180910390a3505050565b600061086284846105fe565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146108dc57818110156108ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c59061113d565b60405180910390fd5b6108db848484840361068d565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610951576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610948906111cf565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036109c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109b790611261565b60405180910390fd5b6109cb838383610b61565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610a51576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a48906112f3565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ae49190610ee5565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610b489190610d44565b60405180910390a3610b5b848484610b66565b50505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610ba5578082015181840152602081019050610b8a565b83811115610bb4576000848401525b50505050565b6000601f19601f8301169050919050565b6000610bd682610b6b565b610be08185610b76565b9350610bf0818560208601610b87565b610bf981610bba565b840191505092915050565b60006020820190508181036000830152610c1e8184610bcb565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610c5682610c2b565b9050919050565b610c6681610c4b565b8114610c7157600080fd5b50565b600081359050610c8381610c5d565b92915050565b6000819050919050565b610c9c81610c89565b8114610ca757600080fd5b50565b600081359050610cb981610c93565b92915050565b60008060408385031215610cd657610cd5610c26565b5b6000610ce485828601610c74565b9250506020610cf585828601610caa565b9150509250929050565b60008115159050919050565b610d1481610cff565b82525050565b6000602082019050610d2f6000830184610d0b565b92915050565b610d3e81610c89565b82525050565b6000602082019050610d596000830184610d35565b92915050565b600080600060608486031215610d7857610d77610c26565b5b6000610d8686828701610c74565b9350506020610d9786828701610c74565b9250506040610da886828701610caa565b9150509250925092565b600060ff82169050919050565b610dc881610db2565b82525050565b6000602082019050610de36000830184610dbf565b92915050565b600060208284031215610dff57610dfe610c26565b5b6000610e0d84828501610c74565b91505092915050565b60008060408385031215610e2d57610e2c610c26565b5b6000610e3b85828601610c74565b9250506020610e4c85828601610c74565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610e9d57607f821691505b602082108103610eb057610eaf610e56565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610ef082610c89565b9150610efb83610c89565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610f3057610f2f610eb6565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000610f97602583610b76565b9150610fa282610f3b565b604082019050919050565b60006020820190508181036000830152610fc681610f8a565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611029602483610b76565b915061103482610fcd565b604082019050919050565b600060208201905081810360008301526110588161101c565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b60006110bb602283610b76565b91506110c68261105f565b604082019050919050565b600060208201905081810360008301526110ea816110ae565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611127601d83610b76565b9150611132826110f1565b602082019050919050565b600060208201905081810360008301526111568161111a565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006111b9602583610b76565b91506111c48261115d565b604082019050919050565b600060208201905081810360008301526111e8816111ac565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b600061124b602383610b76565b9150611256826111ef565b604082019050919050565b6000602082019050818103600083015261127a8161123e565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006112dd602683610b76565b91506112e882611281565b604082019050919050565b6000602082019050818103600083015261130c816112d0565b905091905056fea26469706673582212208a45da89ed096a161cf565d2fb5d8c6b0e022f5b63d82fe2e68b479eaf5f2f5164736f6c634300080d0033";

type AssetTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AssetTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AssetToken__factory extends ContractFactory {
  constructor(...args: AssetTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "AssetToken";
  }

  deploy(
    totalSupply_: BigNumberish,
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AssetToken> {
    return super.deploy(
      totalSupply_,
      name_,
      symbol_,
      overrides || {}
    ) as Promise<AssetToken>;
  }
  getDeployTransaction(
    totalSupply_: BigNumberish,
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      totalSupply_,
      name_,
      symbol_,
      overrides || {}
    );
  }
  attach(address: string): AssetToken {
    return super.attach(address) as AssetToken;
  }
  connect(signer: Signer): AssetToken__factory {
    return super.connect(signer) as AssetToken__factory;
  }
  static readonly contractName: "AssetToken";
  public readonly contractName: "AssetToken";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AssetTokenInterface {
    return new utils.Interface(_abi) as AssetTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AssetToken {
    return new Contract(address, _abi, signerOrProvider) as AssetToken;
  }
}
