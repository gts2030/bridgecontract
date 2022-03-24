/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface BridgeFactoryInterface extends utils.Interface {
  contractName: "BridgeFactory";
  functions: {
    "allTokens(uint256)": FunctionFragment;
    "allTokensLength()": FunctionFragment;
    "deployToken(uint256,string,string,string,uint8)": FunctionFragment;
    "getCreationBytecode(uint256,string,string,string,uint8)": FunctionFragment;
    "getToken(uint256,string)": FunctionFragment;
    "owner()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "allTokens",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allTokensLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deployToken",
    values: [BigNumberish, string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCreationBytecode",
    values: [BigNumberish, string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getToken",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;

  decodeFunctionResult(functionFragment: "allTokens", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "allTokensLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deployToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCreationBytecode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;

  events: {
    "ERC20DeployedEvent(address,uint256,string,string,string,uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ERC20DeployedEvent"): EventFragment;
}

export type ERC20DeployedEventEvent = TypedEvent<
  [string, BigNumber, string, string, string, number],
  {
    _tokenContract: string;
    _chainId: BigNumber;
    _originAddress: string;
    _name: string;
    _symbol: string;
    _decimals: number;
  }
>;

export type ERC20DeployedEventEventFilter =
  TypedEventFilter<ERC20DeployedEventEvent>;

export interface BridgeFactory extends BaseContract {
  contractName: "BridgeFactory";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BridgeFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    allTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    allTokensLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    deployToken(
      _chainId: BigNumberish,
      _originAddress: string,
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getCreationBytecode(
      _chainId: BigNumberish,
      _originAddress: string,
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getToken(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;
  };

  allTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  allTokensLength(overrides?: CallOverrides): Promise<BigNumber>;

  deployToken(
    _chainId: BigNumberish,
    _originAddress: string,
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getCreationBytecode(
    _chainId: BigNumberish,
    _originAddress: string,
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getToken(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    allTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    allTokensLength(overrides?: CallOverrides): Promise<BigNumber>;

    deployToken(
      _chainId: BigNumberish,
      _originAddress: string,
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getCreationBytecode(
      _chainId: BigNumberish,
      _originAddress: string,
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getToken(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "ERC20DeployedEvent(address,uint256,string,string,string,uint8)"(
      _tokenContract?: string | null,
      _chainId?: null,
      _originAddress?: null,
      _name?: null,
      _symbol?: null,
      _decimals?: null
    ): ERC20DeployedEventEventFilter;
    ERC20DeployedEvent(
      _tokenContract?: string | null,
      _chainId?: null,
      _originAddress?: null,
      _name?: null,
      _symbol?: null,
      _decimals?: null
    ): ERC20DeployedEventEventFilter;
  };

  estimateGas: {
    allTokens(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allTokensLength(overrides?: CallOverrides): Promise<BigNumber>;

    deployToken(
      _chainId: BigNumberish,
      _originAddress: string,
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getCreationBytecode(
      _chainId: BigNumberish,
      _originAddress: string,
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getToken(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    allTokens(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allTokensLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deployToken(
      _chainId: BigNumberish,
      _originAddress: string,
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getCreationBytecode(
      _chainId: BigNumberish,
      _originAddress: string,
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getToken(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
