import * as staking from '../proto/cosmos/staking/v1beta1/tx'
import * as multistaking from '../proto/realionetwork/multistaking/v1/tx'
import * as coin from '../proto/cosmos/base/v1beta1/coin'
import * as dist from '../proto/cosmos/distribution/v1beta1/tx'

export function createMsgDelegate(
  delegatorAddress: string,
  validatorAddress: string,
  amount: string,
  denom: string,
) {
  const value = new coin.cosmos.base.v1beta1.Coin({
    denom,
    amount,
  })

  const message = new staking.cosmos.staking.v1beta1.MsgDelegate({
    delegator_address: delegatorAddress,
    validator_address: validatorAddress,
    amount: value,
  })

  return {
    message,
    path: 'cosmos.staking.v1beta1.MsgDelegate',
  }
}

export function createMsgDelegateEVM(
  delegatorAddress: string,
  validatorAddress: string,
  amount: string,
  contractAddress: string,
) {
  const message = new multistaking.multistaking.v1.MsgDelegateEVM({
    delegator_address: delegatorAddress,
    validator_address: validatorAddress,
    contract_address: contractAddress,
    amount: amount,
  })

  return {
    message,
    path: 'multistaking.v1.MsgDelegateEVM',
  }
}

export function createMsgBeginRedelegate(
  delegatorAddress: string,
  validatorSrcAddress: string,
  validatorDstAddress: string,
  amount: string,
  denom: string,
) {
  const value = new coin.cosmos.base.v1beta1.Coin({
    denom,
    amount,
  })

  const message = new staking.cosmos.staking.v1beta1.MsgBeginRedelegate({
    delegator_address: delegatorAddress,
    validator_src_address: validatorSrcAddress,
    validator_dst_address: validatorDstAddress,
    amount: value,
  })

  return {
    message,
    path: 'cosmos.staking.v1beta1.MsgBeginRedelegate',
  }
}

export function createMsgBeginRedelegateEVM(
  delegatorAddress: string,
  validatorSrcAddress: string,
  validatorDstAddress: string,
  amount: string,
  contractAddress: string,
) {

  const message = new multistaking.multistaking.v1.MsgBeginRedelegateEVM({
    delegator_address: delegatorAddress,
    validator_src_address: validatorSrcAddress,
    validator_dst_address: validatorDstAddress,
    amount: amount,
    contract_address: contractAddress,
  })

  return {
    message,
    path: 'multistaking.v1.MsgBeginRedelegateEVM',
  }
}

export function createMsgUndelegate(
  delegatorAddress: string,
  validatorAddress: string,
  amount: string,
  denom: string,
) {
  const value = new coin.cosmos.base.v1beta1.Coin({
    denom,
    amount,
  })

  const message = new staking.cosmos.staking.v1beta1.MsgUndelegate({
    delegator_address: delegatorAddress,
    validator_address: validatorAddress,
    amount: value,
  })

  return {
    message,
    path: 'cosmos.staking.v1beta1.MsgUndelegate',
  }
}

export function createMsgUndelegateEVM(
  delegatorAddress: string,
  validatorAddress: string,
  amount: string,
  contractAddress: string,
) {

  const message = new multistaking.multistaking.v1.MsgUndelegateEVM({
    delegator_address: delegatorAddress,
    validator_address: validatorAddress,
    amount: amount,
    contract_address: contractAddress,
  })

  return {
    message,
    path: 'multistaking.v1.MsgUndelegateEVM',
  }
}

export interface MsgWithdrawDelegatorRewardProtoInterface {
  path: string
  message: dist.cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward
}

export function createMsgWithdrawDelegatorReward(
  delegatorAddress: string,
  validatorAddress: string,
) {
  const message =
    new dist.cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward({
      delegator_address: delegatorAddress,
      validator_address: validatorAddress,
    })

  return {
    message,
    path: 'cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
  }
}

export interface MsgWithdrawValidatorCommissionProtoInterface {
  path: string
  message: dist.cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission
}

export function createMsgWithdrawValidatorCommission(validatorAddress: string) {
  const message =
    new dist.cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission({
      validator_address: validatorAddress,
    })

  return {
    message,
    path: 'cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission',
  }
}

export function createMsgCancelUnbondingEVMDelegation(
  delegatorAddress: string,
  validatorAddress: string,
  contractAddress: string,
  amount: string,
  creationHeight: number,
) {
  const message = new multistaking.multistaking.v1.MsgCancelUnbondingEVMDelegation({
    delegator_address: delegatorAddress,
    validator_address: validatorAddress,
    contract_address: contractAddress,
    amount: amount,
    creation_height: creationHeight,
  })

  return {
    message,
    path: 'multistaking.v1.MsgCancelUnbondingEVMDelegation',
  }
}
