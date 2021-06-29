/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from 'ethers'
import { Provider } from '@ethersproject/providers'

import type { ISequencerInbox } from '../ISequencerInbox'

export class ISequencerInbox__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISequencerInbox {
    return new Contract(address, _abi, signerOrProvider) as ISequencerInbox
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'firstMessageNum',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'beforeAcc',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newMessageCount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'totalDelayedMessagesRead',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes32[2]',
        name: 'afterAccAndDelayed',
        type: 'bytes32[2]',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'seqBatchIndex',
        type: 'uint256',
      },
    ],
    name: 'DelayedInboxForced',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'newAddress',
        type: 'address',
      },
    ],
    name: 'SequencerAddressUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'firstMessageNum',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'beforeAcc',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newMessageCount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'afterAcc',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'transactions',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'lengths',
        type: 'uint256[]',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'sectionsMetadata',
        type: 'uint256[]',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'seqBatchIndex',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'sequencer',
        type: 'address',
      },
    ],
    name: 'SequencerBatchDelivered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'firstMessageNum',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'beforeAcc',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newMessageCount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'afterAcc',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'seqBatchIndex',
        type: 'uint256',
      },
    ],
    name: 'SequencerBatchDeliveredFromOrigin',
    type: 'event',
  },
  {
    inputs: [],
    name: 'getInboxAccsLength',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'inboxAccs',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'maxDelayBlocks',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'maxDelaySeconds',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'messageCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'proof',
        type: 'bytes',
      },
      {
        internalType: 'uint256',
        name: 'inboxCount',
        type: 'uint256',
      },
    ],
    name: 'proveBatchContainsSequenceNumber',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newSequencer',
        type: 'address',
      },
    ],
    name: 'setSequencer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]