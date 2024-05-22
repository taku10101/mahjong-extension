import { pai_str_data } from "./pai"

type tileType<N extends number, T> = T[] & { length: N }

export type Yaku = {
  title: string
  description: string
  tiles: tileType<14, string> // 14個で固定したい
}
export const yakuData: { [key: string]: Yaku[] } = {
  1: [
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
  ],
  2: [
    {
      title: "ダブル立直(ダブルリーチ)",
      description:
        "立直をかけた後、誰の鳴きもなく自分の一打で立直した状態で和了すること",
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
      title: "三色同順(サンショクドウコウ)",
      description: "萬子、筒子、索子それぞれで同じ数の順子を作ること",
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
        pai_str_data.souzu[2],
        pai_str_data.souzu[3],
        pai_str_data.souzu[4],
        pai_str_data.honor[0],
        pai_str_data.honor[0]
      ]
    },
    {
      title: "三槓子(サンカンツ)",
      description: "槓子を三つ作ること",
      tiles: [
        pai_str_data.manzu[2],
        pai_str_data.manzu[2],
        pai_str_data.manzu[2],
        pai_str_data.manzu[3],
        pai_str_data.manzu[3],
        pai_str_data.manzu[3],
        pai_str_data.pinzu[2],
        pai_str_data.pinzu[3],
        pai_str_data.pinzu[4],
        pai_str_data.souzu[2],
        pai_str_data.souzu[2],
        pai_str_data.souzu[2],
        pai_str_data.honor[0],
        pai_str_data.honor[0]
      ]
    },
    {
      title: "対々和(トイトイ)",
      description: "刻子(槓子)のみで和了すること",
      tiles: [
        pai_str_data.manzu[2],
        pai_str_data.manzu[2],
        pai_str_data.manzu[2],
        pai_str_data.manzu[3],
        pai_str_data.manzu[3],
        pai_str_data.manzu[3],
        pai_str_data.pinzu[2],
        pai_str_data.pinzu[3],
        pai_str_data.pinzu[4],
        pai_str_data.souzu[2],
        pai_str_data.souzu[2],
        pai_str_data.souzu[2],
        pai_str_data.honor[0],
        pai_str_data.honor[0]
      ]
    },
    {
      title: "小三元(ショウサンゲン)",
      description:
        "白、發、中のいずれかを雀頭にし、残りを刻子(槓子)で和了すること",
      tiles: [
        pai_str_data.manzu[2],
        pai_str_data.manzu[2],
        pai_str_data.manzu[2],
        pai_str_data.manzu[3],
        pai_str_data.manzu[3],
        pai_str_data.manzu[3],
        pai_str_data.pinzu[2],
        pai_str_data.pinzu[3],
        pai_str_data.pinzu[4],
        pai_str_data.souzu[2],
        pai_str_data.souzu[2],
        pai_str_data.souzu[2],
        pai_str_data.honor[0],
        pai_str_data.honor[0]
      ]
    },
    {
      title: "混老頭(ホンロウトウ)",
      description: "一九牌のみで和了すること",
      tiles: [
        pai_str_data.manzu[0],
        pai_str_data.manzu[0],
        pai_str_data.manzu[0],
        pai_str_data.manzu[8],
        pai_str_data.manzu[8],
        pai_str_data.manzu[8],
        pai_str_data.pinzu[0],
        pai_str_data.pinzu[0],
        pai_str_data.pinzu[0],
        pai_str_data.souzu[0],
        pai_str_data.souzu[0],
        pai_str_data.souzu[0],
        pai_str_data.honor[0],
        pai_str_data.honor[0]
      ]
    },
    {
      title: "七対子(チートイツ)",
      description: "違う対子を七つ作ること",
      tiles: [
        pai_str_data.manzu[2],
        pai_str_data.manzu[2],
        pai_str_data.manzu[3],
        pai_str_data.manzu[3],
        pai_str_data.manzu[4],
        pai_str_data.manzu[4],
        pai_str_data.pinzu[2],
        pai_str_data.pinzu[2],
        pai_str_data.pinzu[3],
        pai_str_data.pinzu[3],
        pai_str_data.souzu[2],
        pai_str_data.souzu[2],
        pai_str_data.honor[0],
        pai_str_data.honor[0]
      ]
    },
    {
      title: "混全帯么九(ホンチャンタイヤオ)",
      description: "4面子1雀頭が全て么九牌で構成されていること",
      tiles: [
        pai_str_data.manzu[1],
        pai_str_data.manzu[2],
        pai_str_data.manzu[3],
        pai_str_data.manzu[4],
        pai_str_data.manzu[5],
        pai_str_data.manzu[6],
        pai_str_data.pinzu[1],
        pai_str_data.pinzu[2],
        pai_str_data.pinzu[3],
        pai_str_data.pinzu[4],
        pai_str_data.souzu[1],
        pai_str_data.souzu[2],
        pai_str_data.honor[0],
        pai_str_data.honor[0]
      ]
    },
    {
      title: "一気通貫(イッツーチュークン)",
      description: "同じ種類の順子で123、456、789を作ること",
      tiles: [
        pai_str_data.manzu[0],
        pai_str_data.manzu[1],
        pai_str_data.manzu[2],
        pai_str_data.manzu[3],
        pai_str_data.manzu[4],
        pai_str_data.manzu[5],
        pai_str_data.manzu[6],
        pai_str_data.manzu[7],
        pai_str_data.manzu[8],
        pai_str_data.pinzu[2],
        pai_str_data.pinzu[3],
        pai_str_data.pinzu[4],
        pai_str_data.pinzu[5],
        pai_str_data.pinzu[5]
      ]
    },
    {
      title: "三色同刻(サンショクドウコウ)",
      description: "萬子、筒子、索子それぞれで同じ数の刻子を作ること",
      tiles: [
        pai_str_data.manzu[2],
        pai_str_data.manzu[2],
        pai_str_data.manzu[2],
        pai_str_data.manzu[3],
        pai_str_data.manzu[3],
        pai_str_data.manzu[3],
        pai_str_data.pinzu[2],
        pai_str_data.pinzu[2],
        pai_str_data.pinzu[2],
        pai_str_data.souzu[2],
        pai_str_data.souzu[2],
        pai_str_data.souzu[2],
        pai_str_data.honor[0],
        pai_str_data.honor[0]
      ]
    },
    {
      title: "ローカル役：三連刻(サンレンコウ)",
      description: "連続する刻子を三つ作ること",
      tiles: [
        pai_str_data.manzu[2],
        pai_str_data.manzu[2],
        pai_str_data.manzu[2],
        pai_str_data.manzu[3],
        pai_str_data.manzu[3],
        pai_str_data.manzu[3],
        pai_str_data.manzu[4],
        pai_str_data.manzu[4],
        pai_str_data.manzu[4],
        pai_str_data.pinzu[2],
        pai_str_data.pinzu[2],
        pai_str_data.pinzu[2],
        pai_str_data.honor[0],
        pai_str_data.honor[0]
      ]
    }
  ],
  3: [
    {
      title: "二盃口(リャンペーコウ)",
      description: "同種同数の順子が二組あること",
      tiles: [
        pai_str_data.manzu[2],
        pai_str_data.manzu[2],
        pai_str_data.manzu[3],
        pai_str_data.manzu[3],
        pai_str_data.manzu[4],
        pai_str_data.manzu[4],
        pai_str_data.pinzu[2],
        pai_str_data.pinzu[2],
        pai_str_data.pinzu[3],
        pai_str_data.pinzu[3],
        pai_str_data.souzu[2],
        pai_str_data.souzu[2],
        pai_str_data.honor[0],
        pai_str_data.honor[0]
      ]
    },
    {
      title: "純全帯么九(ジュンチャンタイヤオ)",
      description: "4面子1雀頭が全て么九牌で構成されていること",
      tiles: [
        pai_str_data.manzu[1],
        pai_str_data.manzu[2],
        pai_str_data.manzu[3],
        pai_str_data.manzu[4],
        pai_str_data.manzu[5],
        pai_str_data.manzu[6],
        pai_str_data.pinzu[1],
        pai_str_data.pinzu[2],
        pai_str_data.pinzu[3],
        pai_str_data.pinzu[4],
        pai_str_data.souzu[1],
        pai_str_data.souzu[2],
        pai_str_data.honor[0],
        pai_str_data.honor[0]
      ]
    },
    {
      title: "混一色(ホンイーソー)",
      description: "萬子、筒子、索子のどれかと字牌のみで和了すること",
      tiles: [
        pai_str_data.manzu[1],
        pai_str_data.manzu[2],
        pai_str_data.manzu[3],
        pai_str_data.manzu[4],
        pai_str_data.manzu[5],
        pai_str_data.manzu[6],
        pai_str_data.pinzu[1],
        pai_str_data.pinzu[2],
        pai_str_data.pinzu[3],
        pai_str_data.pinzu[4],
        pai_str_data.honor[0],
        pai_str_data.honor[0],
        pai_str_data.honor[1],
        pai_str_data.honor[1]
      ]
    },
    {
      title: "ローカル役：一色三同順(イーソーサンション)",
      description: "同じ種類の順子を三つ作ること",
      tiles: [
        pai_str_data.manzu[1],
        pai_str_data.manzu[2],
        pai_str_data.manzu[3],
        pai_str_data.manzu[1],
        pai_str_data.manzu[2],
        pai_str_data.manzu[3],
        pai_str_data.manzu[1],
        pai_str_data.manzu[2],
        pai_str_data.manzu[3],
        pai_str_data.pinzu[1],
        pai_str_data.pinzu[2],
        pai_str_data.pinzu[3],
        pai_str_data.honor[0],
        pai_str_data.honor[0]
      ]
    }
  ],
  6: [
    {
      title: "清一色(チンイーソー)",
      description: "萬子、筒子、索子のどれか一種類のみで和了すること",
      tiles: [
        pai_str_data.manzu[1],
        pai_str_data.manzu[2],
        pai_str_data.manzu[3],
        pai_str_data.manzu[4],
        pai_str_data.manzu[5],
        pai_str_data.manzu[6],
        pai_str_data.manzu[7],
        pai_str_data.manzu[8],
        pai_str_data.manzu[9],
        pai_str_data.manzu[1],
        pai_str_data.manzu[2],
        pai_str_data.manzu[3],
        pai_str_data.manzu[4],
        pai_str_data.manzu[5]
      ]
    }
  ],
  8: [],
  10: [],
  20: [],
  0: []
}
