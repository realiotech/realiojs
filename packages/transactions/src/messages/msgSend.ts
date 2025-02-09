import {
  createMsgSend as protoMsgSend,
  createTransaction,
  createBodyWithMultipleMessages,
  createTransactionWithBody,
} from '@realiotech/proto'

import { Chain, Fee, Sender } from './common'

export interface MessageSendParams {
  destinationAddress: string
  amount: string
  denom: string
}

export function createTxMessageSend(
  chain: Chain,
  sender: Sender,
  fee: Fee,
  memo: string,
  params: MessageSendParams,
) {
  // Cosmos
  const msgSend = protoMsgSend(
    sender.accountAddress,
    params.destinationAddress,
    params.amount,
    params.denom,
  )
  const tx = createTransaction(
    msgSend,
    memo,
    fee.amount,
    fee.denom,
    parseInt(fee.gas, 10),
    sender.pubkey,
    sender.sequence,
    sender.accountNumber,
    chain.cosmosChainId,
  )

  return {
    signDirect: tx.signDirect,
    legacyAmino: tx.legacyAmino,
  }
}

export function createMsgSendBody(
  sender: Sender,
  memo: string,
  params: MessageSendParams,
) {
  // Cosmos
  const msgSend = protoMsgSend(
    sender.accountAddress,
    params.destinationAddress,
    params.amount,
    params.denom,
  )
  const body = createBodyWithMultipleMessages([msgSend], memo)

  return { body }
}

export function createSendTx(
  body: any,
  chain: Chain,
  sender: Sender,
  fee: Fee,
) {
  // Cosmos
  const tx = createTransactionWithBody(
    body,
    fee.amount,
    fee.denom,
    parseInt(fee.gas, 10),
    sender.pubkey,
    sender.sequence,
    sender.accountNumber,
    chain.cosmosChainId,
  )

  return {
    signDirect: tx.signDirect,
    legacyAmino: tx.legacyAmino,
  }
}
