import { pai_ask_data } from "./pai"

type tileType<N extends number, T> = T[] & { length: N }

export type Yaku = {
  title: string
  description: string
  tiles?: tileType<14, string> // 14個で固定したい
}
export const yakuData: { [key: string]: Yaku[] } = {
  0: [
    {
      title: "立直 (リーチ)",
      description: "門前清の状態で聴牌していると立直をかけることができる",
      tiles: [
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[4],
        pai_ask_data.manzu[5],
        pai_ask_data.manzu[6],
        pai_ask_data.manzu[7],
        pai_ask_data.pinzu[2],
        pai_ask_data.pinzu[3],
        pai_ask_data.pinzu[4],
        pai_ask_data.honor[0],
        pai_ask_data.honor[0],
        pai_ask_data.honor[1],
        pai_ask_data.honor[1],
        pai_ask_data.honor[1]
      ]
    },
    {
      title: "断么(タンヤオ)",
      description: "一九牌字牌を使わずに和了すること",
      tiles: [
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[4],
        pai_ask_data.manzu[5],
        pai_ask_data.manzu[6],
        pai_ask_data.manzu[7],
        pai_ask_data.pinzu[2],
        pai_ask_data.pinzu[3],
        pai_ask_data.pinzu[4],
        pai_ask_data.pinzu[5],
        pai_ask_data.pinzu[6],
        pai_ask_data.pinzu[7],
        pai_ask_data.souzu[2],
        pai_ask_data.souzu[3]
      ]
    },
    {
      title: "門前清自摸和(ツモ)",
      description: "自分でツモ和了すること",
      tiles: [
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[4],
        pai_ask_data.manzu[5],
        pai_ask_data.manzu[6],
        pai_ask_data.manzu[7],
        pai_ask_data.pinzu[2],
        pai_ask_data.pinzu[3],
        pai_ask_data.pinzu[4],
        pai_ask_data.honor[0],
        pai_ask_data.honor[0],
        pai_ask_data.honor[1],
        pai_ask_data.honor[1],
        pai_ask_data.honor[1]
      ]
    },
    {
      title: "役牌：自風牌",
      description: "自分位置と同じ風牌で槓子もしくは刻子で和了すること",
      tiles: [
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[4],
        pai_ask_data.manzu[5],
        pai_ask_data.manzu[6],
        pai_ask_data.manzu[7],
        pai_ask_data.honor[0],
        pai_ask_data.honor[0],
        pai_ask_data.honor[0],
        pai_ask_data.honor[1],
        pai_ask_data.honor[1],
        pai_ask_data.honor[1],
        pai_ask_data.honor[2],
        pai_ask_data.honor[2]
      ]
    },
    {
      title: "役牌：場風牌",
      description: "場風牌で和了すること",
      tiles: [
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[4],
        pai_ask_data.manzu[4],
        pai_ask_data.manzu[4],
        pai_ask_data.manzu[5],
        pai_ask_data.manzu[6],
        pai_ask_data.manzu[7],
        pai_ask_data.souzu[2],
        pai_ask_data.souzu[3],
        pai_ask_data.souzu[4],
        pai_ask_data.honor[0],
        pai_ask_data.honor[0],
        pai_ask_data.honor[0]
      ]
    },
    {
      title: "役牌：三元牌",
      description: "白、發、中いずれかの刻子もしくは槓子で和了すること",
      tiles: [
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[4],
        pai_ask_data.manzu[5],
        pai_ask_data.manzu[6],
        pai_ask_data.manzu[7],
        pai_ask_data.honor[0],
        pai_ask_data.honor[0],
        pai_ask_data.honor[0],
        pai_ask_data.honor[4],
        pai_ask_data.honor[4],
        pai_ask_data.honor[4],
        pai_ask_data.honor[2],
        pai_ask_data.honor[2]
      ]
    },
    {
      title: "平和",
      description:
        "順子を四つ作り、雀頭は役牌以外で和了し、最後の順子が両面待ちで和了すること",
      tiles: [
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[4],
        pai_ask_data.manzu[5],
        pai_ask_data.manzu[6],
        pai_ask_data.manzu[7],
        pai_ask_data.pinzu[2],
        pai_ask_data.pinzu[3],
        pai_ask_data.honor[0],
        pai_ask_data.honor[0],
        pai_ask_data.honor[1],
        pai_ask_data.manzu[8],
        pai_ask_data.manzu[8],
        pai_ask_data.pinzu[4]
      ]
    },

    {
      title: "一盃口(イーペーコウ)",
      description: "同種同数の順子が二組あること",
      tiles: [
        pai_ask_data.souzu[2],
        pai_ask_data.souzu[2],
        pai_ask_data.souzu[3],
        pai_ask_data.souzu[3],
        pai_ask_data.souzu[4],
        pai_ask_data.souzu[4],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[4],
        pai_ask_data.manzu[5],
        pai_ask_data.honor[4],
        pai_ask_data.honor[4]
      ]
    },
    {
      title: "嶺上開花(リンシャンカイホウ)",
      description: "山から引いた牌で和了すること",
      tiles: [
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[4],
        pai_ask_data.manzu[5],
        pai_ask_data.manzu[6],
        pai_ask_data.manzu[7],
        pai_ask_data.pinzu[2],
        pai_ask_data.pinzu[3],
        pai_ask_data.pinzu[4],
        pai_ask_data.honor[0],
        pai_ask_data.honor[0],
        pai_ask_data.honor[1],
        pai_ask_data.honor[1],
        pai_ask_data.honor[1]
      ]
    },
    {
      title: "海底摸月(ハイテイモツイ)",
      description: "最後の牌をツモ和了すること",
      tiles: [
        pai_ask_data.souzu[2],
        pai_ask_data.souzu[3],
        pai_ask_data.souzu[4],
        pai_ask_data.souzu[5],
        pai_ask_data.souzu[6],
        pai_ask_data.souzu[7],
        pai_ask_data.pinzu[2],
        pai_ask_data.pinzu[3],
        pai_ask_data.pinzu[4],
        pai_ask_data.honor[3],
        pai_ask_data.honor[3],
        pai_ask_data.honor[5],
        pai_ask_data.honor[5],
        pai_ask_data.honor[5]
      ]
    },
    {
      title: "河底撈魚(ホウテイ)",
      description: "最後の牌をロン和了すること",
      tiles: [
        pai_ask_data.manzu[4],
        pai_ask_data.manzu[5],
        pai_ask_data.manzu[6],
        pai_ask_data.manzu[8],
        pai_ask_data.manzu[8],
        pai_ask_data.manzu[8],
        pai_ask_data.pinzu[1],
        pai_ask_data.pinzu[1],
        pai_ask_data.pinzu[1],
        pai_ask_data.honor[2],
        pai_ask_data.honor[2],
        pai_ask_data.honor[2],
        pai_ask_data.honor[3],
        pai_ask_data.honor[3]
      ]
    },
    {
      title: "一発",
      description: "立直をかけた後、誰の鳴きもなく一巡目で和了すること",
      tiles: [
        pai_ask_data.souzu[2],
        pai_ask_data.souzu[3],
        pai_ask_data.souzu[4],
        pai_ask_data.souzu[5],
        pai_ask_data.souzu[6],
        pai_ask_data.souzu[7],
        pai_ask_data.pinzu[2],
        pai_ask_data.pinzu[2],
        pai_ask_data.pinzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[4],
        pai_ask_data.manzu[5],
        pai_ask_data.manzu[7],
        pai_ask_data.manzu[7]
      ]
    },
    {
      title: "ローカル役：槓振り(カンブリ)",
      description: "槓をした直後の打牌で和了すること",
      tiles: [
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[4],
        pai_ask_data.manzu[5],
        pai_ask_data.manzu[6],
        pai_ask_data.manzu[7],
        pai_ask_data.pinzu[2],
        pai_ask_data.pinzu[3],
        pai_ask_data.pinzu[4],
        pai_ask_data.honor[0],
        pai_ask_data.honor[0],
        pai_ask_data.honor[1],
        pai_ask_data.honor[1],
        pai_ask_data.honor[1]
      ]
    },
    {
      title: "ローカル役：十二落抬(シーアルロウタイ)",
      description: "槓をした直後の打牌で和了すること",
      tiles: [
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[4],
        pai_ask_data.manzu[5],
        pai_ask_data.manzu[6],
        pai_ask_data.manzu[7],
        pai_ask_data.pinzu[2],
        pai_ask_data.pinzu[3],
        pai_ask_data.pinzu[4],
        pai_ask_data.honor[0],
        pai_ask_data.honor[0],
        pai_ask_data.honor[1],
        pai_ask_data.honor[1],
        pai_ask_data.honor[1]
      ]
    }
  ],
  1: [
    {
      title: "ダブル立直(ダブルリーチ)",
      description:
        "立直をかけた後、誰の鳴きもなく自分の一打で立直した状態で和了すること",
      tiles: [
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[4],
        pai_ask_data.manzu[5],
        pai_ask_data.manzu[6],
        pai_ask_data.manzu[7],
        pai_ask_data.pinzu[2],
        pai_ask_data.pinzu[3],
        pai_ask_data.pinzu[4],
        pai_ask_data.honor[0],
        pai_ask_data.honor[0],
        pai_ask_data.honor[1],
        pai_ask_data.honor[1],
        pai_ask_data.honor[1]
      ]
    },
    {
      title: "三色同順(サンショクドウコウ)",
      description: "萬子、筒子、索子それぞれで同じ数の順子を作ること",
      tiles: [
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[4],
        pai_ask_data.manzu[5],
        pai_ask_data.manzu[6],
        pai_ask_data.manzu[7],
        pai_ask_data.pinzu[2],
        pai_ask_data.pinzu[3],
        pai_ask_data.pinzu[4],
        pai_ask_data.souzu[2],
        pai_ask_data.souzu[3],
        pai_ask_data.souzu[4],
        pai_ask_data.honor[0],
        pai_ask_data.honor[0]
      ]
    },
    {
      title: "三槓子(サンカンツ)",
      description: "槓子を三つ作ること",
      tiles: [
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[3],
        pai_ask_data.pinzu[2],
        pai_ask_data.pinzu[3],
        pai_ask_data.pinzu[4],
        pai_ask_data.souzu[2],
        pai_ask_data.souzu[2],
        pai_ask_data.souzu[2],
        pai_ask_data.honor[0],
        pai_ask_data.honor[0]
      ]
    },
    {
      title: "対々和(トイトイ)",
      description: "刻子(槓子)のみで和了すること",
      tiles: [
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[4],
        pai_ask_data.manzu[4],
        pai_ask_data.pinzu[2],
        pai_ask_data.pinzu[2],
        pai_ask_data.pinzu[5],
        pai_ask_data.pinzu[5],
        pai_ask_data.souzu[2],
        pai_ask_data.souzu[2],
        pai_ask_data.honor[5],
        pai_ask_data.honor[5]
      ]
    },
    {
      title: "小三元(ショウサンゲン)",
      description:
        "白、發、中のいずれかを雀頭にし、残り二つを刻子もしくは槓子で和了すること",
      tiles: [
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[3],
        pai_ask_data.honor[4],
        pai_ask_data.honor[4],
        pai_ask_data.honor[4],
        pai_ask_data.honor[5],
        pai_ask_data.honor[5],
        pai_ask_data.honor[6],
        pai_ask_data.honor[6],
        pai_ask_data.honor[6]
      ]
    },
    {
      title: "混老頭(ホンロウトウ)",
      description: "一九牌のみで和了すること",
      tiles: [
        pai_ask_data.manzu[0],
        pai_ask_data.manzu[0],
        pai_ask_data.manzu[0],
        pai_ask_data.manzu[8],
        pai_ask_data.manzu[8],
        pai_ask_data.manzu[8],
        pai_ask_data.pinzu[0],
        pai_ask_data.pinzu[0],
        pai_ask_data.pinzu[0],
        pai_ask_data.souzu[0],
        pai_ask_data.souzu[0],
        pai_ask_data.souzu[0],
        pai_ask_data.honor[2],
        pai_ask_data.honor[2]
      ]
    },
    {
      title: "七対子(チートイツ)",
      description: "違う対子を七つ作ること",
      tiles: [
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[4],
        pai_ask_data.manzu[4],
        pai_ask_data.pinzu[2],
        pai_ask_data.pinzu[2],
        pai_ask_data.pinzu[3],
        pai_ask_data.pinzu[3],
        pai_ask_data.souzu[2],
        pai_ask_data.souzu[2],
        pai_ask_data.honor[2],
        pai_ask_data.honor[2]
      ]
    },
    {
      title: "混全帯么九(ホンチャンタイヤオ)",
      description: "4面子1雀頭が全て么九牌で構成されていること",
      tiles: [
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[4],
        pai_ask_data.manzu[5],
        pai_ask_data.manzu[6],
        pai_ask_data.pinzu[1],
        pai_ask_data.pinzu[2],
        pai_ask_data.pinzu[3],
        pai_ask_data.souzu[1],
        pai_ask_data.souzu[2],
        pai_ask_data.souzu[3],
        pai_ask_data.souzu[4],
        pai_ask_data.souzu[4]
      ]
    },
    {
      title: "一気通貫(イッツーチュークン)",
      description: "同じ種類の順子で123、456、789を作ること",
      tiles: [
        pai_ask_data.manzu[0],
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[4],
        pai_ask_data.manzu[5],
        pai_ask_data.manzu[6],
        pai_ask_data.manzu[7],
        pai_ask_data.manzu[8],
        pai_ask_data.pinzu[2],
        pai_ask_data.pinzu[3],
        pai_ask_data.pinzu[4],
        pai_ask_data.pinzu[5],
        pai_ask_data.pinzu[5]
      ]
    },
    {
      title: "三色同刻(サンショクドウコウ)",
      description: "萬子、筒子、索子それぞれで同じ数の刻子を作ること",
      tiles: [
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[3],
        pai_ask_data.pinzu[2],
        pai_ask_data.pinzu[2],
        pai_ask_data.pinzu[2],
        pai_ask_data.souzu[2],
        pai_ask_data.souzu[2],
        pai_ask_data.souzu[2],
        pai_ask_data.honor[2],
        pai_ask_data.honor[2]
      ]
    },
    {
      title: "ローカル役：三連刻(サンレンコウ)",
      description: "連続する刻子を三つ作ること",
      tiles: [
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[4],
        pai_ask_data.manzu[4],
        pai_ask_data.manzu[4],
        pai_ask_data.pinzu[2],
        pai_ask_data.pinzu[2],
        pai_ask_data.pinzu[2],
        pai_ask_data.honor[5],
        pai_ask_data.honor[5]
      ]
    }
  ],
  2: [
    {
      title: "二盃口(リャンペーコウ)",
      description: "同種同数の順子が二組あること",
      tiles: [
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[4],
        pai_ask_data.manzu[4],
        pai_ask_data.pinzu[2],
        pai_ask_data.pinzu[2],
        pai_ask_data.pinzu[3],
        pai_ask_data.pinzu[3],
        pai_ask_data.souzu[2],
        pai_ask_data.souzu[2],
        pai_ask_data.honor[0],
        pai_ask_data.honor[0]
      ]
    },
    {
      title: "純全帯么九(ジュンチャンタイヤオ)",
      description: "4面子1雀頭が全て么九牌で構成されていること",
      tiles: [
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[4],
        pai_ask_data.manzu[5],
        pai_ask_data.manzu[6],
        pai_ask_data.pinzu[1],
        pai_ask_data.pinzu[2],
        pai_ask_data.pinzu[3],
        pai_ask_data.pinzu[4],
        pai_ask_data.souzu[1],
        pai_ask_data.souzu[2],
        pai_ask_data.honor[0],
        pai_ask_data.honor[0]
      ]
    },
    {
      title: "混一色(ホンイーソー)",
      description: "萬子、筒子、索子のどれかと字牌のみで和了すること",
      tiles: [
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[4],
        pai_ask_data.manzu[5],
        pai_ask_data.manzu[6],
        pai_ask_data.pinzu[1],
        pai_ask_data.pinzu[2],
        pai_ask_data.pinzu[3],
        pai_ask_data.pinzu[4],
        pai_ask_data.honor[0],
        pai_ask_data.honor[0],
        pai_ask_data.honor[1],
        pai_ask_data.honor[1]
      ]
    },
    {
      title: "ローカル役：一色三同順(イーソーサンション)",
      description: "同じ種類の順子を三つ作ること",
      tiles: [
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.pinzu[1],
        pai_ask_data.pinzu[2],
        pai_ask_data.pinzu[3],
        pai_ask_data.honor[0],
        pai_ask_data.honor[0]
      ]
    }
  ],
  3: [
    {
      title: "清一色(チンイーソー)",
      description: "萬子、筒子、索子のどれか一種類のみで和了すること",
      tiles: [
        pai_ask_data.manzu[0],
        pai_ask_data.manzu[0],
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[4],
        pai_ask_data.manzu[5],
        pai_ask_data.manzu[6],
        pai_ask_data.manzu[7],
        pai_ask_data.manzu[8],
        pai_ask_data.manzu[8],
        pai_ask_data.manzu[8],
        pai_ask_data.manzu[8]
      ]
    }
  ],
  4: [
    {
      title: "流し満貫(ナガシマンカン)",
      description:
        "自分が捨てた牌が全て断么牌で他に一枚もポン、チー、カンされていない状態で和了すること"
    },
    {
      title: "ローカル役:一筒模月(イーピンモツイ)",
      description: "海底で引いたツモが一筒で和了すること",
      tiles: [
        pai_ask_data.manzu[0],
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[4],
        pai_ask_data.manzu[5],
        pai_ask_data.manzu[7],
        pai_ask_data.manzu[7],
        pai_ask_data.manzu[7],
        pai_ask_data.manzu[8],
        pai_ask_data.manzu[8],
        pai_ask_data.manzu[8],
        pai_ask_data.souzu[0],
        pai_ask_data.souzu[0]
      ]
    },
    {
      title: "ローカル役:九筒撈魚(チュウピンラオユイ)",
      description: "河底で打牌された九筒でロン和了すること",
      tiles: [
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[4],
        pai_ask_data.manzu[5],
        pai_ask_data.manzu[6],
        pai_ask_data.manzu[7],
        pai_ask_data.manzu[8],
        pai_ask_data.manzu[8],
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[2],
        pai_ask_data.pinzu[3],
        pai_ask_data.pinzu[4],
        pai_ask_data.pinzu[5],
        pai_ask_data.souzu[8],
        pai_ask_data.souzu[8]
      ]
    }
  ],
  5: [
    {
      title: "天和(テンホウ)",
      description: "親の最初の配牌時点で和了すること",
      tiles: [
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[4],
        pai_ask_data.manzu[5],
        pai_ask_data.manzu[6],
        pai_ask_data.manzu[7],
        pai_ask_data.manzu[8],
        pai_ask_data.manzu[8],
        pai_ask_data.manzu[8],
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[1]
      ]
    },
    {
      title: "地和(チーホウ)",
      description: "子が配牌時点で聴牌し、誰も鳴きに入らないで和了すること",
      tiles: [
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[4],
        pai_ask_data.manzu[5],
        pai_ask_data.manzu[6],
        pai_ask_data.manzu[7],
        pai_ask_data.manzu[8],
        pai_ask_data.manzu[8],
        pai_ask_data.manzu[8],
        pai_ask_data.manzu[8]
      ]
    },
    {
      title: "大三元(ダイサンゲン)",
      description: "白、發、中の刻子(槓子)を作り和了すること",
      tiles: [
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[3],
        pai_ask_data.pinzu[1],
        pai_ask_data.pinzu[1],
        pai_ask_data.pinzu[1],
        pai_ask_data.honor[0],
        pai_ask_data.honor[0]
      ]
    },
    {
      title: "四暗刻(スーアンコウ)",
      description: "暗刻(槓子)を四つ作ること",
      tiles: [
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[3],
        pai_ask_data.pinzu[1],
        pai_ask_data.pinzu[1],
        pai_ask_data.pinzu[1],
        pai_ask_data.honor[0],
        pai_ask_data.honor[0]
      ]
    },
    {
      title: "字一色(ツーイーソー)",
      description: "字牌のみで和了すること",
      tiles: [
        pai_ask_data.honor[0],
        pai_ask_data.honor[0],
        pai_ask_data.honor[0],
        pai_ask_data.honor[1],
        pai_ask_data.honor[1],
        pai_ask_data.honor[1],
        pai_ask_data.honor[2],
        pai_ask_data.honor[2],
        pai_ask_data.honor[2],
        pai_ask_data.honor[3],
        pai_ask_data.honor[3],
        pai_ask_data.honor[3],
        pai_ask_data.honor[4],
        pai_ask_data.honor[4]
      ]
    },
    {
      title: "緑一色(リューイーソー)",
      description: "二、三、四、六、八索のみで和了すること",
      tiles: [
        pai_ask_data.souzu[2],
        pai_ask_data.souzu[2],
        pai_ask_data.souzu[2],
        pai_ask_data.souzu[3],
        pai_ask_data.souzu[3],
        pai_ask_data.souzu[3],
        pai_ask_data.souzu[4],
        pai_ask_data.souzu[4],
        pai_ask_data.souzu[4],
        pai_ask_data.souzu[6],
        pai_ask_data.souzu[6],
        pai_ask_data.souzu[6],
        pai_ask_data.souzu[8],
        pai_ask_data.souzu[8]
      ]
    },
    {
      title: "清老頭(チンロウトウ)",
      description: "一九牌のみで和了すること",
      tiles: [
        pai_ask_data.manzu[0],
        pai_ask_data.manzu[0],
        pai_ask_data.manzu[0],
        pai_ask_data.manzu[8],
        pai_ask_data.manzu[8],
        pai_ask_data.manzu[8],
        pai_ask_data.pinzu[0],
        pai_ask_data.pinzu[0],
        pai_ask_data.pinzu[0],
        pai_ask_data.souzu[0],
        pai_ask_data.souzu[0],
        pai_ask_data.souzu[0],
        pai_ask_data.honor[0],
        pai_ask_data.honor[0]
      ]
    },
    {
      title: "国士無双(コクシムソー)",
      description: "断么牌と一九牌のみで和了すること",
      tiles: [
        pai_ask_data.manzu[0],
        pai_ask_data.manzu[0],
        pai_ask_data.manzu[0],
        pai_ask_data.manzu[8],
        pai_ask_data.manzu[8],
        pai_ask_data.manzu[8],
        pai_ask_data.pinzu[0],
        pai_ask_data.pinzu[0],
        pai_ask_data.pinzu[0],
        pai_ask_data.souzu[0],
        pai_ask_data.souzu[0],
        pai_ask_data.souzu[0],
        pai_ask_data.honor[0],
        pai_ask_data.honor[0]
      ]
    },
    {
      title: "小四喜(ショーシー)",
      description: "東西南北の刻子(槓子)を作りうち一種を雀頭にして和了すること",
      tiles: [
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[3],
        pai_ask_data.pinzu[1],
        pai_ask_data.pinzu[1],
        pai_ask_data.pinzu[1],
        pai_ask_data.honor[0],
        pai_ask_data.honor[0]
      ]
    },
    {
      title: "四槓子(スーカンツ)",
      description: "槓子を四つ作ること",
      tiles: [
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[3],
        pai_ask_data.pinzu[1],
        pai_ask_data.pinzu[1],
        pai_ask_data.pinzu[1],
        pai_ask_data.honor[0],
        pai_ask_data.honor[0]
      ]
    },

    {
      title: "九蓮宝燈(チューレンポウトウ)",
      description: "一種の牌で1112345678999を作り和了すること",
      tiles: [
        pai_ask_data.manzu[0],
        pai_ask_data.manzu[0],
        pai_ask_data.manzu[0],
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[4],
        pai_ask_data.manzu[5],
        pai_ask_data.manzu[6],
        pai_ask_data.manzu[7],
        pai_ask_data.manzu[8],
        pai_ask_data.manzu[8],
        pai_ask_data.manzu[8],
        pai_ask_data.manzu[8]
      ]
    },
    {
      title: "ローカル役;人和(レンホウ)",
      description: "子が自身の第一ツモ以前にロン完了すること",
      tiles: [
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[3],
        pai_ask_data.pinzu[1],
        pai_ask_data.pinzu[1],
        pai_ask_data.pinzu[1],
        pai_ask_data.honor[0],
        pai_ask_data.honor[0]
      ]
    },
    {
      title: "ローカル役:大車輪(ダイシャリン)",
      description: "門前で2〜8の筒子のみで対子を7組作り和了すること",
      tiles: [
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[4],
        pai_ask_data.manzu[5],
        pai_ask_data.manzu[6],
        pai_ask_data.manzu[7],
        pai_ask_data.manzu[8],
        pai_ask_data.manzu[8],
        pai_ask_data.pinzu[1],
        pai_ask_data.pinzu[2],
        pai_ask_data.pinzu[3],
        pai_ask_data.pinzu[4],
        pai_ask_data.pinzu[5]
      ]
    },
    {
      title: "ローカル役:大竹林(ダイチクリン)",
      description: "門前で2〜8の索子のみで対子を7組作り和了すること",
      tiles: [
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[4],
        pai_ask_data.manzu[5],
        pai_ask_data.manzu[6],
        pai_ask_data.manzu[7],
        pai_ask_data.manzu[8],
        pai_ask_data.manzu[8],
        pai_ask_data.souzu[1],
        pai_ask_data.souzu[2],
        pai_ask_data.souzu[3],
        pai_ask_data.souzu[4],
        pai_ask_data.souzu[5]
      ]
    },
    {
      title: "ローカル役:大数隣(ダイスーリン)",
      description: "門前で2〜8の萬子のみで対子を7組作り和了すること",
      tiles: [
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[4],
        pai_ask_data.manzu[5],
        pai_ask_data.manzu[6],
        pai_ask_data.manzu[7],
        pai_ask_data.manzu[8],
        pai_ask_data.manzu[8],
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[4],
        pai_ask_data.manzu[5]
      ]
    },
    {
      title: "ローカル役:石の上にも三年(イシノウエニモサンネン)",
      description:
        "ダブルリーチした状態かつ、海底模月または河底撈魚を複合して和了すること",
      tiles: [
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[4],
        pai_ask_data.manzu[5],
        pai_ask_data.manzu[6],
        pai_ask_data.manzu[7],
        pai_ask_data.pinzu[2],
        pai_ask_data.pinzu[3],
        pai_ask_data.pinzu[4],
        pai_ask_data.honor[0],
        pai_ask_data.honor[0],
        pai_ask_data.honor[1],
        pai_ask_data.honor[1],
        pai_ask_data.honor[1]
      ]
    }
  ],
  6: [
    {
      title: "四暗刻単騎(スーアンコウタンキ)",
      description: "四暗刻を単騎待ちで和了すること",
      tiles: [
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[3],
        pai_ask_data.pinzu[1],
        pai_ask_data.pinzu[1],
        pai_ask_data.pinzu[1],
        pai_ask_data.honor[0],
        pai_ask_data.honor[0]
      ]
    },
    {
      title: "国士無双十三面(コクシムソージュウサンメン)",
      description: "国士無双の13面待ちで和了すること",
      tiles: [
        pai_ask_data.manzu[0],
        pai_ask_data.manzu[0],
        pai_ask_data.manzu[0],
        pai_ask_data.manzu[8],
        pai_ask_data.manzu[8],
        pai_ask_data.manzu[8],
        pai_ask_data.pinzu[0],
        pai_ask_data.pinzu[0],
        pai_ask_data.pinzu[0],
        pai_ask_data.souzu[0],
        pai_ask_data.souzu[0],
        pai_ask_data.souzu[0],
        pai_ask_data.honor[0],
        pai_ask_data.honor[0]
      ]
    },
    {
      title: "純正九蓮宝燈(ジュンショウチューレンポウトウ)",
      description: "九蓮宝燈の13面待ちで和了すること",
      tiles: [
        pai_ask_data.manzu[0],
        pai_ask_data.manzu[0],
        pai_ask_data.manzu[0],
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[4],
        pai_ask_data.manzu[5],
        pai_ask_data.manzu[6],
        pai_ask_data.manzu[7],
        pai_ask_data.manzu[8],
        pai_ask_data.manzu[8],
        pai_ask_data.manzu[8],
        pai_ask_data.manzu[8]
      ]
    },
    {
      title: "大四喜(ダイシー)",
      description: "東西南北の刻子(槓子)を作り和了すること",
      tiles: [
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[3],
        pai_ask_data.manzu[3],
        pai_ask_data.pinzu[1],
        pai_ask_data.pinzu[1],
        pai_ask_data.pinzu[1],
        pai_ask_data.honor[0],
        pai_ask_data.honor[0]
      ]
    },
    {
      title: "ローカル役:大七星(ダイシチセイ)",
      description: "字牌七種全てで刻子(槓子)を作り和了すること",
      tiles: [
        pai_ask_data.honor[0],
        pai_ask_data.honor[0],
        pai_ask_data.honor[0],
        pai_ask_data.honor[1],
        pai_ask_data.honor[1],
        pai_ask_data.honor[1],
        pai_ask_data.honor[2],
        pai_ask_data.honor[2],
        pai_ask_data.honor[2],
        pai_ask_data.honor[3],
        pai_ask_data.honor[3],
        pai_ask_data.honor[3],
        pai_ask_data.honor[4],
        pai_ask_data.honor[4]
      ]
    }
  ],
  7: [
    {
      title: "九種九牌(チューシュクチューハイ)",
      description:
        "誰かの鳴きがない状態で親の配牌または子の最初のツモ時点で手牌の中に九種九牌がある場合",
      tiles: [
        pai_ask_data.manzu[0],
        pai_ask_data.manzu[0],
        pai_ask_data.manzu[0],
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[1],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[2],
        pai_ask_data.manzu[2],
        pai_ask_data.pinzu[0],
        pai_ask_data.pinzu[0],
        pai_ask_data.pinzu[0],
        pai_ask_data.honor[0],
        pai_ask_data.honor[0]
      ]
    },
    {
      title: "四風連打(スーフーレンダ)",
      description:
        "誰の鳴きも入らずに全てのプレイヤーが最初の打牌で同じ風牌を捨てた場合"
    },
    {
      title: "四槓散了(スーカンナガレ)",
      description: "複数のプレイヤーにより合計四回以上の槓子が行われた場合"
    },

    {
      title: "四家立直(スーカーリーチ)",
      description: "全てのプレイヤーが立直を行った場合"
    }
  ]
}

//todo
//満貫　役満　ダブル役満
