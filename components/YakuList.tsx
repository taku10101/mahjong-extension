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
      {yakuList.map((yaku) => (
        <div key={yaku.title} style={{ marginBottom: 20 }}>
          <Sh2>{yaku.title}</Sh2>
          <Sh3>{yaku.description}</Sh3>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginBottom: 10
            }}>
            {yaku.tiles !== null && yaku.tiles !== undefined ? (
              yaku.tiles.map((tile) => (
                <HandTile key={`${yaku.title}-${tile}`} tile={tile} />
              ))
            ) : (
              <div
                style={{
                  width: 20,
                  height: 20
                }}></div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default YakuList

const Sh2 = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  color: #414141;
  font-weight: bold;
`

const Sh3 = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #414141;
`
