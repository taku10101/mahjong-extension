import React from "react"
import styled from "styled-components"

import { yakuData } from "./data/yaku_data"
import HandTile from "./HandTile"

interface YakuListProps {
  index: number
}

const YakuList: React.FC<YakuListProps> = ({ index }) => {
  const yakuList = yakuData[index] || []

  return (
    <div
      style={{
        backgroundColor: "#a6caff",
        padding: 20,
        borderRadius: 10
      }}>
      {yakuList.map((yaku, yakuIndex) => (
        <div key={yaku.title} style={{ marginBottom: 20 }}>
          <div>{yaku.title}</div>
          <div>{yaku.description}</div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginBottom: 10
            }}>
            {yaku.tiles.map((tile, tileIndex) => (
              <HandTile key={`${yaku.title}-${tile}`} tile={tile} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default YakuList
