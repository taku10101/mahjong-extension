import { paiData } from "./pai";
export interface Yaku {
  title: string;
  description: string;
  tiles: string[];
}

export const yakuData: { [key: string]: Yaku[] } = {
  1: [
    {
      title: "立直 (リーチ)",
      description: "門前清の状態で聴牌していると立直をかけることができ...",
      tiles: [paiData.Manzu_one, "二萬", "三萬", "四筒", "五筒", "六筒"],
    },
  ],
  2: [
    {
      title: "断么九 (タンヤオ)",
      description: "么九牌（1, 9 字牌）を使わずに和了した場合に成立する...",
      tiles: [
        "二萬",
        "三萬",
        "四萬",
        "五萬",
        "六萬",
        "七萬",
        "二筒",
        "三筒",
        "四筒",
        "五筒",
        "六筒",
        "七筒",
        "二索",
      ],
    },
  ],
  5: [
    {
      title: "国士無双",
      description: "国士無双は、13種類の待ちがある特殊な形の和了です...",
      tiles: [
        "東",
        "南",
        "南",
        "西",
        "北",
        "白",
        "發",
        "中",
        "一萬",
        "九萬",
        "一筒",
        "九筒",
        "一索",
        "九索",
      ],
    },
    {
      title: "緑一色",
      description: "緑一色は、緑色の牌のみで和了することができる役です...",
      tiles: ["二索", "三索", "四索", "六索", "八索", "發", "發", "發"],
    },
  ],
};
