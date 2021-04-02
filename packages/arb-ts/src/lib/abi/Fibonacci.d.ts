/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from 'ethers'
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface FibonacciInterface extends ethers.utils.Interface {
  functions: {
    'doFib(uint256)': FunctionFragment
    'generateFib(uint256)': FunctionFragment
    'getFib(uint256)': FunctionFragment
    'isTopLevel()': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'doFib', values: [BigNumberish]): string
  encodeFunctionData(
    functionFragment: 'generateFib',
    values: [BigNumberish]
  ): string
  encodeFunctionData(functionFragment: 'getFib', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'isTopLevel', values?: undefined): string

  decodeFunctionResult(functionFragment: 'doFib', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'generateFib', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getFib', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'isTopLevel', data: BytesLike): Result

  events: {
    'TestEvent(uint256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'TestEvent'): EventFragment
}

export class Fibonacci extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: FibonacciInterface

  functions: {
    doFib(n: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

    'doFib(uint256)'(
      n: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    generateFib(
      n: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    'generateFib(uint256)'(
      n: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    getFib(n: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>

    'getFib(uint256)'(
      n: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    isTopLevel(overrides?: Overrides): Promise<ContractTransaction>

    'isTopLevel()'(overrides?: Overrides): Promise<ContractTransaction>
  }

  doFib(n: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

  'doFib(uint256)'(
    n: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  generateFib(
    n: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  'generateFib(uint256)'(
    n: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  getFib(n: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

  'getFib(uint256)'(
    n: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  isTopLevel(overrides?: Overrides): Promise<ContractTransaction>

  'isTopLevel()'(overrides?: Overrides): Promise<ContractTransaction>

  callStatic: {
    doFib(n: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    'doFib(uint256)'(
      n: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    generateFib(n: BigNumberish, overrides?: CallOverrides): Promise<void>

    'generateFib(uint256)'(
      n: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    getFib(n: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    'getFib(uint256)'(
      n: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    isTopLevel(overrides?: CallOverrides): Promise<boolean>

    'isTopLevel()'(overrides?: CallOverrides): Promise<boolean>
  }

  filters: {
    TestEvent(number: null): EventFilter
  }

  estimateGas: {
    doFib(n: BigNumberish, overrides?: Overrides): Promise<BigNumber>

    'doFib(uint256)'(n: BigNumberish, overrides?: Overrides): Promise<BigNumber>

    generateFib(
      n: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    'generateFib(uint256)'(
      n: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    getFib(n: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    'getFib(uint256)'(
      n: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    isTopLevel(overrides?: Overrides): Promise<BigNumber>

    'isTopLevel()'(overrides?: Overrides): Promise<BigNumber>
  }

  populateTransaction: {
    doFib(n: BigNumberish, overrides?: Overrides): Promise<PopulatedTransaction>

    'doFib(uint256)'(
      n: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    generateFib(
      n: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    'generateFib(uint256)'(
      n: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    getFib(
      n: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'getFib(uint256)'(
      n: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    isTopLevel(overrides?: Overrides): Promise<PopulatedTransaction>

    'isTopLevel()'(overrides?: Overrides): Promise<PopulatedTransaction>
  }
}