// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class BetPlaced extends ethereum.Event {
  get params(): BetPlaced__Params {
    return new BetPlaced__Params(this);
  }
}

export class BetPlaced__Params {
  _event: BetPlaced;

  constructor(event: BetPlaced) {
    this._event = event;
  }

  get betId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get player(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get bnbAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get bet(): i32 {
    return this._event.parameters[3].value.toI32();
  }
}

export class BetResolved extends ethereum.Event {
  get params(): BetResolved__Params {
    return new BetResolved__Params(this);
  }
}

export class BetResolved__Params {
  _event: BetResolved;

  constructor(event: BetResolved) {
    this._event = event;
  }

  get betId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get result(): i32 {
    return this._event.parameters[1].value.toI32();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class RewardDistribuited extends ethereum.Event {
  get params(): RewardDistribuited__Params {
    return new RewardDistribuited__Params(this);
  }
}

export class RewardDistribuited__Params {
  _event: RewardDistribuited;

  constructor(event: RewardDistribuited) {
    this._event = event;
  }

  get player(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get reward(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class SquidGame__betsResult {
  value0: Address;
  value1: i32;
  value2: BigInt;
  value3: boolean;
  value4: i32;

  constructor(
    value0: Address,
    value1: i32,
    value2: BigInt,
    value3: boolean,
    value4: i32
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set(
      "value1",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value1))
    );
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromBoolean(this.value3));
    map.set(
      "value4",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value4))
    );
    return map;
  }
}

export class SquidGame__winnersResult {
  value0: Address;
  value1: BigInt;
  value2: BigInt;
  value3: boolean;

  constructor(
    value0: Address,
    value1: BigInt,
    value2: BigInt,
    value3: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromBoolean(this.value3));
    return map;
  }
}

export class SquidGame extends ethereum.SmartContract {
  static bind(address: Address): SquidGame {
    return new SquidGame("SquidGame", address);
  }

  BOTTOM_WINNERS_REWARD_SHARE(): BigInt {
    let result = super.call(
      "BOTTOM_WINNERS_REWARD_SHARE",
      "BOTTOM_WINNERS_REWARD_SHARE():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_BOTTOM_WINNERS_REWARD_SHARE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "BOTTOM_WINNERS_REWARD_SHARE",
      "BOTTOM_WINNERS_REWARD_SHARE():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  CHAINLINK_FEE(): BigInt {
    let result = super.call("CHAINLINK_FEE", "CHAINLINK_FEE():(uint256)", []);

    return result[0].toBigInt();
  }

  try_CHAINLINK_FEE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "CHAINLINK_FEE",
      "CHAINLINK_FEE():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  CHAINLINK_KEY_HASH(): Bytes {
    let result = super.call(
      "CHAINLINK_KEY_HASH",
      "CHAINLINK_KEY_HASH():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_CHAINLINK_KEY_HASH(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "CHAINLINK_KEY_HASH",
      "CHAINLINK_KEY_HASH():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  DEVS_REWARD_SHARE(): BigInt {
    let result = super.call(
      "DEVS_REWARD_SHARE",
      "DEVS_REWARD_SHARE():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_DEVS_REWARD_SHARE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "DEVS_REWARD_SHARE",
      "DEVS_REWARD_SHARE():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  LINK_TOKEN(): Address {
    let result = super.call("LINK_TOKEN", "LINK_TOKEN():(address)", []);

    return result[0].toAddress();
  }

  try_LINK_TOKEN(): ethereum.CallResult<Address> {
    let result = super.tryCall("LINK_TOKEN", "LINK_TOKEN():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  NONE_PROBABILITY(): BigInt {
    let result = super.call(
      "NONE_PROBABILITY",
      "NONE_PROBABILITY():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_NONE_PROBABILITY(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "NONE_PROBABILITY",
      "NONE_PROBABILITY():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  ORACLE_PERIOD(): BigInt {
    let result = super.call("ORACLE_PERIOD", "ORACLE_PERIOD():(uint256)", []);

    return result[0].toBigInt();
  }

  try_ORACLE_PERIOD(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "ORACLE_PERIOD",
      "ORACLE_PERIOD():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  TOP_WINNERS_PERCENT(): BigInt {
    let result = super.call(
      "TOP_WINNERS_PERCENT",
      "TOP_WINNERS_PERCENT():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_TOP_WINNERS_PERCENT(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "TOP_WINNERS_PERCENT",
      "TOP_WINNERS_PERCENT():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  TOP_WINNERS_REWARD_SHARE(): BigInt {
    let result = super.call(
      "TOP_WINNERS_REWARD_SHARE",
      "TOP_WINNERS_REWARD_SHARE():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_TOP_WINNERS_REWARD_SHARE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "TOP_WINNERS_REWARD_SHARE",
      "TOP_WINNERS_REWARD_SHARE():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  VFR_COORDINATOR(): Address {
    let result = super.call(
      "VFR_COORDINATOR",
      "VFR_COORDINATOR():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_VFR_COORDINATOR(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "VFR_COORDINATOR",
      "VFR_COORDINATOR():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  WINNER_TAX(): BigInt {
    let result = super.call("WINNER_TAX", "WINNER_TAX():(uint256)", []);

    return result[0].toBigInt();
  }

  try_WINNER_TAX(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("WINNER_TAX", "WINNER_TAX():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  bets(param0: Bytes): SquidGame__betsResult {
    let result = super.call(
      "bets",
      "bets(bytes32):(address,uint8,uint256,bool,uint8)",
      [ethereum.Value.fromFixedBytes(param0)]
    );

    return new SquidGame__betsResult(
      result[0].toAddress(),
      result[1].toI32(),
      result[2].toBigInt(),
      result[3].toBoolean(),
      result[4].toI32()
    );
  }

  try_bets(param0: Bytes): ethereum.CallResult<SquidGame__betsResult> {
    let result = super.tryCall(
      "bets",
      "bets(bytes32):(address,uint8,uint256,bool,uint8)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new SquidGame__betsResult(
        value[0].toAddress(),
        value[1].toI32(),
        value[2].toBigInt(),
        value[3].toBoolean(),
        value[4].toI32()
      )
    );
  }

  devsWallet(): Address {
    let result = super.call("devsWallet", "devsWallet():(address)", []);

    return result[0].toAddress();
  }

  try_devsWallet(): ethereum.CallResult<Address> {
    let result = super.tryCall("devsWallet", "devsWallet():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  distributed(): boolean {
    let result = super.call("distributed", "distributed():(bool)", []);

    return result[0].toBoolean();
  }

  try_distributed(): ethereum.CallResult<boolean> {
    let result = super.tryCall("distributed", "distributed():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  end(): BigInt {
    let result = super.call("end", "end():(uint256)", []);

    return result[0].toBigInt();
  }

  try_end(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("end", "end():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  oracle(): Address {
    let result = super.call("oracle", "oracle():(address)", []);

    return result[0].toAddress();
  }

  try_oracle(): ethereum.CallResult<Address> {
    let result = super.tryCall("oracle", "oracle():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  prizeBoost(): BigInt {
    let result = super.call("prizeBoost", "prizeBoost():(uint256)", []);

    return result[0].toBigInt();
  }

  try_prizeBoost(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("prizeBoost", "prizeBoost():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  router(): Address {
    let result = super.call("router", "router():(address)", []);

    return result[0].toAddress();
  }

  try_router(): ethereum.CallResult<Address> {
    let result = super.tryCall("router", "router():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  squid(): Address {
    let result = super.call("squid", "squid():(address)", []);

    return result[0].toAddress();
  }

  try_squid(): ethereum.CallResult<Address> {
    let result = super.tryCall("squid", "squid():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  start(): BigInt {
    let result = super.call("start", "start():(uint256)", []);

    return result[0].toBigInt();
  }

  try_start(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("start", "start():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  swapSlippage(): BigInt {
    let result = super.call("swapSlippage", "swapSlippage():(uint256)", []);

    return result[0].toBigInt();
  }

  try_swapSlippage(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("swapSlippage", "swapSlippage():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  usdt(): Address {
    let result = super.call("usdt", "usdt():(address)", []);

    return result[0].toAddress();
  }

  try_usdt(): ethereum.CallResult<Address> {
    let result = super.tryCall("usdt", "usdt():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  winnerId(param0: Address): BigInt {
    let result = super.call("winnerId", "winnerId(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_winnerId(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("winnerId", "winnerId(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  winners(param0: BigInt): SquidGame__winnersResult {
    let result = super.call(
      "winners",
      "winners(uint256):(address,uint256,uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new SquidGame__winnersResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBoolean()
    );
  }

  try_winners(param0: BigInt): ethereum.CallResult<SquidGame__winnersResult> {
    let result = super.tryCall(
      "winners",
      "winners(uint256):(address,uint256,uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new SquidGame__winnersResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBoolean()
      )
    );
  }
}

export class ClaimCall extends ethereum.Call {
  get inputs(): ClaimCall__Inputs {
    return new ClaimCall__Inputs(this);
  }

  get outputs(): ClaimCall__Outputs {
    return new ClaimCall__Outputs(this);
  }
}

export class ClaimCall__Inputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }
}

export class ClaimCall__Outputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }
}

export class DistributeCall extends ethereum.Call {
  get inputs(): DistributeCall__Inputs {
    return new DistributeCall__Inputs(this);
  }

  get outputs(): DistributeCall__Outputs {
    return new DistributeCall__Outputs(this);
  }
}

export class DistributeCall__Inputs {
  _call: DistributeCall;

  constructor(call: DistributeCall) {
    this._call = call;
  }
}

export class DistributeCall__Outputs {
  _call: DistributeCall;

  constructor(call: DistributeCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _oracle(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _devsWallet(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _start(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _end(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class PlaceBetCall extends ethereum.Call {
  get inputs(): PlaceBetCall__Inputs {
    return new PlaceBetCall__Inputs(this);
  }

  get outputs(): PlaceBetCall__Outputs {
    return new PlaceBetCall__Outputs(this);
  }
}

export class PlaceBetCall__Inputs {
  _call: PlaceBetCall;

  constructor(call: PlaceBetCall) {
    this._call = call;
  }

  get _bet(): i32 {
    return this._call.inputValues[0].value.toI32();
  }
}

export class PlaceBetCall__Outputs {
  _call: PlaceBetCall;

  constructor(call: PlaceBetCall) {
    this._call = call;
  }
}

export class RawFulfillRandomnessCall extends ethereum.Call {
  get inputs(): RawFulfillRandomnessCall__Inputs {
    return new RawFulfillRandomnessCall__Inputs(this);
  }

  get outputs(): RawFulfillRandomnessCall__Outputs {
    return new RawFulfillRandomnessCall__Outputs(this);
  }
}

export class RawFulfillRandomnessCall__Inputs {
  _call: RawFulfillRandomnessCall;

  constructor(call: RawFulfillRandomnessCall) {
    this._call = call;
  }

  get requestId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get randomness(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RawFulfillRandomnessCall__Outputs {
  _call: RawFulfillRandomnessCall;

  constructor(call: RawFulfillRandomnessCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpdateEndCall extends ethereum.Call {
  get inputs(): UpdateEndCall__Inputs {
    return new UpdateEndCall__Inputs(this);
  }

  get outputs(): UpdateEndCall__Outputs {
    return new UpdateEndCall__Outputs(this);
  }
}

export class UpdateEndCall__Inputs {
  _call: UpdateEndCall;

  constructor(call: UpdateEndCall) {
    this._call = call;
  }

  get _newEnd(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdateEndCall__Outputs {
  _call: UpdateEndCall;

  constructor(call: UpdateEndCall) {
    this._call = call;
  }
}

export class UpdatePrizeBoostCall extends ethereum.Call {
  get inputs(): UpdatePrizeBoostCall__Inputs {
    return new UpdatePrizeBoostCall__Inputs(this);
  }

  get outputs(): UpdatePrizeBoostCall__Outputs {
    return new UpdatePrizeBoostCall__Outputs(this);
  }
}

export class UpdatePrizeBoostCall__Inputs {
  _call: UpdatePrizeBoostCall;

  constructor(call: UpdatePrizeBoostCall) {
    this._call = call;
  }

  get _newPrizeBoost(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdatePrizeBoostCall__Outputs {
  _call: UpdatePrizeBoostCall;

  constructor(call: UpdatePrizeBoostCall) {
    this._call = call;
  }
}

export class UpdateSwapSlippageCall extends ethereum.Call {
  get inputs(): UpdateSwapSlippageCall__Inputs {
    return new UpdateSwapSlippageCall__Inputs(this);
  }

  get outputs(): UpdateSwapSlippageCall__Outputs {
    return new UpdateSwapSlippageCall__Outputs(this);
  }
}

export class UpdateSwapSlippageCall__Inputs {
  _call: UpdateSwapSlippageCall;

  constructor(call: UpdateSwapSlippageCall) {
    this._call = call;
  }

  get _newSlippage(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdateSwapSlippageCall__Outputs {
  _call: UpdateSwapSlippageCall;

  constructor(call: UpdateSwapSlippageCall) {
    this._call = call;
  }
}
