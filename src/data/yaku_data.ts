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
      ],
    },
  ],
};
