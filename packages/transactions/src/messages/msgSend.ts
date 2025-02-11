import {
  createMsgSend as protoMsgSend,
  createTransaction,
  createBodyWithMultipleMessages,
  createTransactionWithBody,
  createFee,
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

/**
 * Created a msg send body and fee that can be passed into a transaction builder.
 * The returned body is of type tx.cosmos.tx.v1beta1.TxBody
 * The returned fee is of type tx.cosmos.tx.v1beta1.Fee
 * @param senderAddress the sender's address
 * @param memo the memo
 * @param params MessageSendParams
 * @param fee Fee
 */
export function createMsgSendBody(
  senderAddress: string,
  memo: string,
  params: MessageSendParams,
  fee: Fee,
) {
  // Cosmos
  const msgSend = protoMsgSend(
    senderAddress,
    params.destinationAddress,
    params.amount,
    params.denom,
  )
  const body = createBodyWithMultipleMessages([msgSend], memo)
  const feeMessage = createFee(fee.amount, fee.denom, parseInt(fee.gas, 10))
  return { body, feeMessage }
}

/**
 * Creates a send transaction using a prebuilt body and fee proto msg
 * The returned object contains signDirect and legacyAmino objects
 * @param body expected to be tx.cosmos.tx.v1beta1.TxBody, temporarily set to any
 * @param chain Chain
 * @param sender Sender
 * @param fee expected to be tx.cosmos.tx.v1beta1.Fee, temporarily set to any
 */
export function createSendTx(
  body: any,
  chain: Chain,
  sender: Sender,
  fee: any,
) {
  // Cosmos
  const tx = createTransactionWithBody(
    body,
    fee,
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
