import { BetPlaced, BetResolved, RewardDistribuited } from "../generated/SquidGame/SquidGame";
import { Bet, Player } from "../generated/schema";

export function handleBetPlaced(event: BetPlaced): void {
  let player = Player.load(event.params.player.toHex());

  if (!player) {
    player = new Player(event.params.player.toHex());
  }

  player.address = event.params.player;
  player.save();

  let bet = new Bet(event.params.betId.toHex());
  bet.betId = event.params.betId;
  bet.player = player.id;
  bet.bet = "PENDING";
  bet.amount = event.params.bnbAmount;
  bet.save();
}

export function handleBetResolved(event: BetResolved): void {
  let bet = Bet.load(event.params.betId.toHex())!;

  if (event.params.result == 1) {
    bet.bet = "NONE";
  } else if (event.params.result == 2) {
    bet.bet = "EVEN";
  } else if (event.params.result == 3) {
    bet.bet = "ODD";
  }

  bet.save();
}

export function handleRewardDistribuited(event: RewardDistribuited): void {
  let player = Player.load(event.params.player.toHex())!;
  player.rewardClaimed = event.params.reward;
  player.save();
}
