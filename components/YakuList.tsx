import React from "react";
import styled from "styled-components";
import HandTile from "./HandTile";
import { yakuData } from "./data/yaku_data";

interface YakuListProps {
  index: number;
}

const YakuList: React.FC<YakuListProps> = ({ index }) => {
  const yakuList = yakuData[index] || [];

  return (
      <div style={{
        backgroundColor: '#a6caff',
        padding: 20,
        borderRadius: 10,
      }}>
        {yakuList.map((yaku) => (
            <div style={{
              marginBottom: 20,
            }}>
              <

              div>{yaku.title}</div>
              <div>{yaku.description}</div>
              <div style={{
                display: "flex",
                justifyContent: "flex-start",
                marginBottom: 10,
              }}>
                {yaku.tiles.map((tile) => (
                    <HandTile key={tile} tile={tile}/>
                ))}
              </div>
            </div>
        ))}
      </div>
  );
};

export default YakuList;
