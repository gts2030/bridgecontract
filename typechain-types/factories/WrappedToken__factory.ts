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
import type { WrappedToken, WrappedTokenInterface } from "../WrappedToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_chainId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_originAddress",
        type: "string",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
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
  "0x60806040527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6005553480156200003557600080fd5b5060405162001bec38038062001bec83398181016040528101906200005b919062000596565b8282816003908051906020019062000075929190620002d0565b5080600490805190602001906200008e929190620002d0565b50505033600860016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550846006819055508360079080519060200190620000f1929190620002d0565b5080600860006101000a81548160ff021916908360ff16021790555062000143600860019054906101000a900473ffffffffffffffffffffffffffffffffffffffff166005546200014e60201b60201c565b50505050506200081c565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620001c0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001b790620006dc565b60405180910390fd5b620001d460008383620002c660201b60201c565b8060026000828254620001e891906200072d565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546200023f91906200072d565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620002a691906200079b565b60405180910390a3620002c260008383620002cb60201b60201c565b5050565b505050565b505050565b828054620002de90620007e7565b90600052602060002090601f0160209004810192826200030257600085556200034e565b82601f106200031d57805160ff19168380011785556200034e565b828001600101855582156200034e579182015b828111156200034d57825182559160200191906001019062000330565b5b5090506200035d919062000361565b5090565b5b808211156200037c57600081600090555060010162000362565b5090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b620003a98162000394565b8114620003b557600080fd5b50565b600081519050620003c9816200039e565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200042482620003d9565b810181811067ffffffffffffffff82111715620004465762000445620003ea565b5b80604052505050565b60006200045b62000380565b905062000469828262000419565b919050565b600067ffffffffffffffff8211156200048c576200048b620003ea565b5b6200049782620003d9565b9050602081019050919050565b60005b83811015620004c4578082015181840152602081019050620004a7565b83811115620004d4576000848401525b50505050565b6000620004f1620004eb846200046e565b6200044f565b90508281526020810184848401111562000510576200050f620003d4565b5b6200051d848285620004a4565b509392505050565b600082601f8301126200053d576200053c620003cf565b5b81516200054f848260208601620004da565b91505092915050565b600060ff82169050919050565b620005708162000558565b81146200057c57600080fd5b50565b600081519050620005908162000565565b92915050565b600080600080600060a08688031215620005b557620005b46200038a565b5b6000620005c588828901620003b8565b955050602086015167ffffffffffffffff811115620005e957620005e86200038f565b5b620005f78882890162000525565b945050604086015167ffffffffffffffff8111156200061b576200061a6200038f565b5b620006298882890162000525565b935050606086015167ffffffffffffffff8111156200064d576200064c6200038f565b5b6200065b8882890162000525565b92505060806200066e888289016200057f565b9150509295509295909350565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000620006c4601f836200067b565b9150620006d1826200068c565b602082019050919050565b60006020820190508181036000830152620006f781620006b5565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006200073a8262000394565b9150620007478362000394565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156200077f576200077e620006fe565b5b828201905092915050565b620007958162000394565b82525050565b6000602082019050620007b260008301846200078a565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200080057607f821691505b602082108103620008165762000815620007b8565b5b50919050565b6113c0806200082c6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461016857806370a082311461019857806395d89b41146101c8578063a457c2d7146101e6578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610276565b6040516100c39190610c47565b60405180910390f35b6100e660048036038101906100e19190610d02565b610308565b6040516100f39190610d5d565b60405180910390f35b61010461032b565b6040516101119190610d87565b60405180910390f35b610134600480360381019061012f9190610da2565b61036a565b6040516101419190610d5d565b60405180910390f35b610152610399565b60405161015f9190610e11565b60405180910390f35b610182600480360381019061017d9190610d02565b6103b0565b60405161018f9190610d5d565b60405180910390f35b6101b260048036038101906101ad9190610e2c565b61045a565b6040516101bf9190610d87565b60405180910390f35b6101d06104a2565b6040516101dd9190610c47565b60405180910390f35b61020060048036038101906101fb9190610d02565b610534565b60405161020d9190610d5d565b60405180910390f35b610230600480360381019061022b9190610d02565b61061e565b60405161023d9190610d5d565b60405180910390f35b610260600480360381019061025b9190610e59565b610641565b60405161026d9190610d87565b60405180910390f35b60606003805461028590610ec8565b80601f01602080910402602001604051908101604052809291908181526020018280546102b190610ec8565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b5050505050905090565b6000806103136106c8565b90506103208185856106d0565b600191505092915050565b6000610358600860019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1661045a565b6005546103659190610f28565b905090565b6000806103756106c8565b9050610382858285610899565b61038d858585610925565b60019150509392505050565b6000600860009054906101000a900460ff16905090565b6000806103bb6106c8565b905061044f818585600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461044a9190610f5c565b6106d0565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600480546104b190610ec8565b80601f01602080910402602001604051908101604052809291908181526020018280546104dd90610ec8565b801561052a5780601f106104ff5761010080835404028352916020019161052a565b820191906000526020600020905b81548152906001019060200180831161050d57829003601f168201915b5050505050905090565b60008061053f6106c8565b90506000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905083811015610605576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105fc90611024565b60405180910390fd5b61061282868684036106d0565b60019250505092915050565b6000806106296106c8565b9050610636818585610925565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361073f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610736906110b6565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036107ae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a590611148565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161088c9190610d87565b60405180910390a3505050565b60006108a58484610641565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461091f5781811015610911576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610908906111b4565b60405180910390fd5b61091e84848484036106d0565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610994576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098b90611246565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a03576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109fa906112d8565b60405180910390fd5b610a0e838383610ba4565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610a94576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a8b9061136a565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b279190610f5c565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610b8b9190610d87565b60405180910390a3610b9e848484610ba9565b50505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610be8578082015181840152602081019050610bcd565b83811115610bf7576000848401525b50505050565b6000601f19601f8301169050919050565b6000610c1982610bae565b610c238185610bb9565b9350610c33818560208601610bca565b610c3c81610bfd565b840191505092915050565b60006020820190508181036000830152610c618184610c0e565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610c9982610c6e565b9050919050565b610ca981610c8e565b8114610cb457600080fd5b50565b600081359050610cc681610ca0565b92915050565b6000819050919050565b610cdf81610ccc565b8114610cea57600080fd5b50565b600081359050610cfc81610cd6565b92915050565b60008060408385031215610d1957610d18610c69565b5b6000610d2785828601610cb7565b9250506020610d3885828601610ced565b9150509250929050565b60008115159050919050565b610d5781610d42565b82525050565b6000602082019050610d726000830184610d4e565b92915050565b610d8181610ccc565b82525050565b6000602082019050610d9c6000830184610d78565b92915050565b600080600060608486031215610dbb57610dba610c69565b5b6000610dc986828701610cb7565b9350506020610dda86828701610cb7565b9250506040610deb86828701610ced565b9150509250925092565b600060ff82169050919050565b610e0b81610df5565b82525050565b6000602082019050610e266000830184610e02565b92915050565b600060208284031215610e4257610e41610c69565b5b6000610e5084828501610cb7565b91505092915050565b60008060408385031215610e7057610e6f610c69565b5b6000610e7e85828601610cb7565b9250506020610e8f85828601610cb7565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610ee057607f821691505b602082108103610ef357610ef2610e99565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610f3382610ccc565b9150610f3e83610ccc565b925082821015610f5157610f50610ef9565b5b828203905092915050565b6000610f6782610ccc565b9150610f7283610ccc565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610fa757610fa6610ef9565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b600061100e602583610bb9565b915061101982610fb2565b604082019050919050565b6000602082019050818103600083015261103d81611001565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006110a0602483610bb9565b91506110ab82611044565b604082019050919050565b600060208201905081810360008301526110cf81611093565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611132602283610bb9565b915061113d826110d6565b604082019050919050565b6000602082019050818103600083015261116181611125565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b600061119e601d83610bb9565b91506111a982611168565b602082019050919050565b600060208201905081810360008301526111cd81611191565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611230602583610bb9565b915061123b826111d4565b604082019050919050565b6000602082019050818103600083015261125f81611223565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006112c2602383610bb9565b91506112cd82611266565b604082019050919050565b600060208201905081810360008301526112f1816112b5565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611354602683610bb9565b915061135f826112f8565b604082019050919050565b6000602082019050818103600083015261138381611347565b905091905056fea2646970667358221220d684bcbc161e6540dcbfb3eb30d621ce8b4f8231a8b557aa1fc0b0c5c31a4b5264736f6c634300080d0033";

type WrappedTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WrappedTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WrappedToken__factory extends ContractFactory {
  constructor(...args: WrappedTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "WrappedToken";
  }

  deploy(
    _chainId: BigNumberish,
    _originAddress: string,
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<WrappedToken> {
    return super.deploy(
      _chainId,
      _originAddress,
      _name,
      _symbol,
      _decimals,
      overrides || {}
    ) as Promise<WrappedToken>;
  }
  getDeployTransaction(
    _chainId: BigNumberish,
    _originAddress: string,
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _chainId,
      _originAddress,
      _name,
      _symbol,
      _decimals,
      overrides || {}
    );
  }
  attach(address: string): WrappedToken {
    return super.attach(address) as WrappedToken;
  }
  connect(signer: Signer): WrappedToken__factory {
    return super.connect(signer) as WrappedToken__factory;
  }
  static readonly contractName: "WrappedToken";
  public readonly contractName: "WrappedToken";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WrappedTokenInterface {
    return new utils.Interface(_abi) as WrappedTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WrappedToken {
    return new Contract(address, _abi, signerOrProvider) as WrappedToken;
  }
}