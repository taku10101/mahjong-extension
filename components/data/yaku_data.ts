import { pai_str_data } from "./pai"

type tileType<N extends number, T> = T[] & { length: N }

export type Yaku = {
  title: string
  description: string
  tiles: tileType<14, string> // 14個で固定したい
}
export const yakuData: { [key: string]: Yaku[] } = {
  0: [
    {
      title: "立直 (リーチ)",
      description: "門前清の状態で聴牌していると立直をかけることができる",
      tiles: [
        pai_str_data.manzu[2],
        pai_str_data.manzu[3],
        pai_str_data.manzu[4],
        pai_str_data.manzu[5],
        pai_str_data.manzu[6],
        pai_str_data.manzu[7],
        pai_str_data.pinzu[2],
        pai_str_data.pinzu[3],
        pai_str_data.pinzu[4],
        pai_str_data.honor[0],
        pai_str_data.honor[0],
        pai_str_data.honor[1],
        pai_str_data.honor[1],
        pai_str_data.honor[1]
      ]
    },
    {
      title: "断么(タンヤオ)",
      description: "一九牌字牌を使わずに和了すること",
      tiles: [
        pai_str_data.manzu[2],
        pai_str_data.manzu[3],
        pai_str_data.manzu[4],
        pai_str_data.manzu[5],
        pai_str_data.manzu[6],
        pai_str_data.manzu[7],
        pai_str_data.pinzu[2],
        pai_str_data.pinzu[3],
        pai_str_data.pinzu[4],
        pai_str_data.pinzu[5],
        pai_str_data.pinzu[6],
        pai_str_data.pinzu[7],
        pai_str_data.souzu[2],
        pai_str_data.souzu[3]
      ]
    },
    {
      title: "門前清自摸和(ツモ)",
      description: "自分でツモ和了すること",
      tiles: [
        pai_str_data.manzu[2],
        pai_str_data.manzu[3],
        pai_str_data.manzu[4],
        pai_str_data.manzu[5],
        pai_str_data.manzu[6],
        pai_str_data.manzu[7],
        pai_str_data.pinzu[2],
        pai_str_data.pinzu[3],
        pai_str_data.pinzu[4],
        pai_str_data.honor[0],
        pai_str_data.honor[0],
        pai_str_data.honor[1],
        pai_str_data.honor[1],
        pai_str_data.honor[1]
      ]
    },
    {
      title: "役牌：自風牌",
      description: "自分位置と同じ風牌で和了すること",
      tiles: [
        pai_str_data.manzu[2],
        pai_str_data.manzu[3],
        pai_str_data.manzu[4],
        pai_str_data.manzu[5],
        pai_str_data.manzu[6],
        pai_str_data.manzu[7],
        pai_str_data.honor[0],
        pai_str_data.honor[0],
        pai_str_data.honor[0],
        pai_str_data.honor[1],
        pai_str_data.honor[1],
        pai_str_data.honor[1],
        pai_str_data.honor[2],
        pai_str_data.honor[2]
      ]
    },
    {
      title: "役牌：場風牌",
      description: "場風牌で和了すること",
      tiles: [
        pai_str_data.manzu[2],
        pai_str_data.manzu[3],
        pai_str_data.manzu[4],
        pai_str_data.manzu[5],
        pai_str_data.manzu[6],
        pai_str_data.manzu[7],
        pai_str_data.honor[0],
        pai_str_data.honor[0],
        pai_str_data.honor[0],
        pai_str_data.honor[1],
        pai_str_data.honor[1],
        pai_str_data.honor[1],
        pai_str_data.honor[2],
        pai_str_data.honor[2]
      ]
    },
    {
      title: "役牌：三元牌",
      description: "白、發、中いずれかの刻子もしくは槓子で和了すること",
      tiles: [
        pai_str_data.manzu[2],
        pai_str_data.manzu[3],
        pai_str_data.manzu[4],
        pai_str_data.manzu[5],
        pai_str_data.manzu[6],
        pai_str_data.manzu[7],
        pai_str_data.honor[0],
        pai_str_data.honor[0],
        pai_str_data.honor[0],
        pai_str_data.honor[1],
        pai_str_data.honor[1],
        pai_str_data.honor[1],
        pai_str_data.honor[2],
        pai_str_data.honor[2]
      ]
    },
    {
      title: "平和",
      description:
        "順子を四つ作り、雀頭は役牌以外で和了し、最後の順子が両面待ちで和了すること",
      tiles: [
        pai_str_data.manzu[2],
        pai_str_data.manzu[3],
        pai_str_data.manzu[4],
        pai_str_data.manzu[5],
        pai_str_data.manzu[6],
        pai_str_data.manzu[7],
        pai_str_data.pinzu[2],
        pai_str_data.pinzu[3],
        pai_str_data.pinzu[4],
        pai_str_data.honor[0],
        pai_str_data.honor[0],
        pai_str_data.honor[1],
        pai_str_data.honor[1],
        pai_str_data.honor[1]
      ]
    },

    {
      title: "一盃口(イーペーコウ)",
      description: "同種同数の順子が二組あること",
      tiles: [
        pai_str_data.manzu[2],
        pai_str_data.manzu[3],
        pai_str_data.manzu[4],
        pai_str_data.manzu[5],
        pai_str_data.manzu[6],
        pai_str_data.manzu[7],
        pai_str_data.pinzu[2],
        pai_str_data.pinzu[3],
        pai_str_data.pinzu[4],
        pai_str_data.honor[0],
        pai_str_data.honor[0],
        pai_str_data.honor[1],
        pai_str_data.honor[1],
        pai_str_data.honor[1]
      ]
    },
    {
      title: "嶺上開花(リンシャンカイホウ)",
      description: "山から引いた牌で和了すること",
      tiles: [
        pai_str_data.manzu[2],
        pai_str_data.manzu[3],
        pai_str_data.manzu[4],
        pai_str_data.manzu[5],
        pai_str_data.manzu[6],
        pai_str_data.manzu[7],
        pai_str_data.pinzu[2],
        pai_str_data.pinzu[3],
        pai_str_data.pinzu[4],
        pai_str_data.honor[0],
        pai_str_data.honor[0],
        pai_str_data.honor[1],
        pai_str_data.honor[1],
        pai_str_data.honor[1]
      ]
    },
    {
      title: "海底摸月(ハイテイモツイ)",
      description: "最後の牌をツモ和了すること",
      tiles: [
        pai_str_data.manzu[2],
        pai_str_data.manzu[3],
        pai_str_data.manzu[4],
        pai_str_data.manzu[5],
        pai_str_data.manzu[6],
        pai_str_data.manzu[7],
        pai_str_data.pinzu[2],
        pai_str_data.pinzu[3],
        pai_str_data.pinzu[4],
        pai_str_data.honor[0],
        pai_str_data.honor[0],
        pai_str_data.honor[1],
        pai_str_data.honor[1],
        pai_str_data.honor[1]
      ]
    },
    {
      title: "河底撈魚(ホウテイ)",
      description: "最後の牌をロン和了すること",
      tiles: [
        pai_str_data.manzu[2],
        pai_str_data.manzu[3],
        pai_str_data.manzu[4],
        pai_str_data.manzu[5],
        pai_str_data.manzu[6],
        pai_str_data.manzu[7],
        pai_str_data.pinzu[2],
        pai_str_data.pinzu[3],
        pai_str_data.pinzu[4],
        pai_str_data.honor[0],
        pai_str_data.honor[0],
        pai_str_data.honor[1],
        pai_str_data.honor[1],
        pai_str_data.honor[1]
      ]
    },
    {
      title: "一発",
      description: "立直をかけた後、誰の鳴きもなく一巡目で和了すること",
      tiles: [
        pai_str_data.manzu[2],
        pai_str_data.manzu[3],
        pai_str_data.manzu[4],
        pai_str_data.manzu[5],
        pai_str_data.manzu[6],
        pai_str_data.manzu[7],
        pai_str_data.pinzu[2],
        pai_str_data.pinzu[3],
        pai_str_data.pinzu[4],
        pai_str_data.honor[0],
        pai_str_data.honor[0],
        pai_str_data.honor[1],
        pai_str_data.honor[1],
        pai_str_data.honor[1]
      ]
    },
    {
      title: "ローカル役：槓振り(カンブリ)",
      description: "槓をした直後の打牌で和了すること",
      tiles: [
        pai_str_data.manzu[2],
        pai_str_data.manzu[3],
        pai_str_data.manzu[4],
        pai_str_data.manzu[5],
        pai_str_data.manzu[6],
        pai_str_data.manzu[7],
        pai_str_data.pinzu[2],
        pai_str_data.pinzu[3],
        pai_str_data.pinzu[4],
        pai_str_data.honor[0],
        pai_str_data.honor[0],
        pai_str_data.honor[1],
        pai_str_data.honor[1],
        pai_str_data.honor[1]
      ]
    },
    {
      title: "ローカル役：十二落抬(シーアルロウタイ)",
      description: "槓をした直後の打牌で和了すること",
      tiles: [
        pai_str_data.manzu[2],
        pai_str_data.manzu[3],
        pai_str_data.manzu[4],
        pai_str_data.manzu[5],
        pai_str_data.manzu[6],
        pai_str_data.manzu[7],
        pai_str_data.pinzu[2],
        pai_str_data.pinzu[3],
        pai_str_data.pinzu[4],
        pai_str_data.honor[0],
        pai_str_data.honor[0],
        pai_str_data.honor[1],
        pai_str_data.honor[1],
        pai_str_data.honor[1]
      ]
    }
  ]
}
