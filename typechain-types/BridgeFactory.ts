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
    "changeMigrator(address)": FunctionFragment;
    "copy(address,uint256,string)": FunctionFragment;
    "deployToken(uint256,string,string,string,uint8)": FunctionFragment;
    "formerFactory()": FunctionFragment;
    "getCreationBytecode(uint256,string,string,string,uint8)": FunctionFragment;
    "getToken(uint256,string)": FunctionFragment;
    "migrate(address)": FunctionFragment;
    "migrator()": FunctionFragment;
    "setFactory(address)": FunctionFragment;
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
    functionFragment: "changeMigrator",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "copy",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "deployToken",
    values: [BigNumberish, string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "formerFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCreationBytecode",
    values: [BigNumberish, string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getToken",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "migrate", values: [string]): string;
  encodeFunctionData(functionFragment: "migrator", values?: undefined): string;
  encodeFunctionData(functionFragment: "setFactory", values: [string]): string;

  decodeFunctionResult(functionFragment: "allTokens", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "allTokensLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeMigrator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "copy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deployToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "formerFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCreationBytecode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "migrate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "migrator", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setFactory", data: BytesLike): Result;

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

    changeMigrator(
      _migrator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    copy(
      _addr: string,
      _chainId: BigNumberish,
      _originAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deployToken(
      _chainId: BigNumberish,
      _originAddress: string,
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    formerFactory(overrides?: CallOverrides): Promise<[string]>;

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

    migrate(
      _toAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    migrator(overrides?: CallOverrides): Promise<[string]>;

    setFactory(
      _formerFactory: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  allTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  allTokensLength(overrides?: CallOverrides): Promise<BigNumber>;

  changeMigrator(
    _migrator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  copy(
    _addr: string,
    _chainId: BigNumberish,
    _originAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deployToken(
    _chainId: BigNumberish,
    _originAddress: string,
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  formerFactory(overrides?: CallOverrides): Promise<string>;

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

  migrate(
    _toAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  migrator(overrides?: CallOverrides): Promise<string>;

  setFactory(
    _formerFactory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    allTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    allTokensLength(overrides?: CallOverrides): Promise<BigNumber>;

    changeMigrator(_migrator: string, overrides?: CallOverrides): Promise<void>;

    copy(
      _addr: string,
      _chainId: BigNumberish,
      _originAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    deployToken(
      _chainId: BigNumberish,
      _originAddress: string,
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    formerFactory(overrides?: CallOverrides): Promise<string>;

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

    migrate(_toAddr: string, overrides?: CallOverrides): Promise<void>;

    migrator(overrides?: CallOverrides): Promise<string>;

    setFactory(
      _formerFactory: string,
      overrides?: CallOverrides
    ): Promise<void>;
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

    changeMigrator(
      _migrator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    copy(
      _addr: string,
      _chainId: BigNumberish,
      _originAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deployToken(
      _chainId: BigNumberish,
      _originAddress: string,
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    formerFactory(overrides?: CallOverrides): Promise<BigNumber>;

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

    migrate(
      _toAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    migrator(overrides?: CallOverrides): Promise<BigNumber>;

    setFactory(
      _formerFactory: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allTokens(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allTokensLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    changeMigrator(
      _migrator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    copy(
      _addr: string,
      _chainId: BigNumberish,
      _originAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deployToken(
      _chainId: BigNumberish,
      _originAddress: string,
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    formerFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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

    migrate(
      _toAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    migrator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setFactory(
      _formerFactory: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
