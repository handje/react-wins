import {
  FilterGameBatterType,
  FilterGamePitcherType,
  FilterScoreboardType,
  GameBattersType,
  GamePitchersType,
  ScoreboardType,
} from "@customTypes/game/boxScore";

export function filterScoreboardData(data: ScoreboardType): FilterScoreboardType {
  return {
    bhomeName: data.bhomeName,
    score1: data.score1,
    score2: data.score2,
    score3: data.score3,
    score4: data.score4,
    score5: data.score5,
    score6: data.score6,
    score7: data.score7,
    score8: data.score8,
    score9: data.score9,
    score10: data.score10,
    score11: data.score11,
    score12: data.score12,
    run: data.run,
    hit: data.hit,
    error: data.error,
    ballfour: data.ballfour,
  };
}

export function filterGameBatterData(data: GameBattersType): FilterGameBatterType {
  const battingAverage = data.accmAb > 0 ? (data.accmHit / data.accmAb).toFixed(3) : "0.000";

  return {
    oneturn: data.oneturn,
    position: data.position,
    name: data.name,
    inn1: data.inn1,
    inn2: data.inn2,
    inn3: data.inn3,
    inn4: data.inn4,
    inn5: data.inn5,
    inn6: data.inn6,
    inn7: data.inn7,
    inn8: data.inn8,
    inn9: data.inn9,
    inn10: data.inn10,
    inn11: data.inn11,
    inn12: data.inn12,
    ab: data.ab,
    run: data.run,
    hit: data.hit,
    rbi: data.rbi,
    ba: battingAverage,
  };
}

export function filterGamePitcherData(data: GamePitchersType): FilterGamePitcherType {
  const era = data.accmEr > 0 ? ((data.accmEr / data.accmInn2) * 27).toFixed(2) : "0.00";

  return {
    name: data.name,
    changeinn: data.changeinn,
    wls: data.wls,
    w: data.w,
    l: data.l,
    s: data.s,
    inn: data.inn,
    pa: data.pa,
    bf: data.bf,
    ab: data.ab,
    hit: data.hit,
    hr: data.hr,
    bbhp: data.bbhp,
    kk: data.kk,
    r: data.r,
    er: data.er,
    era: era,
  };
}
