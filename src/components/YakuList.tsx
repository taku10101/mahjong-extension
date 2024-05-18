import React from "react";
import styled from "styled-components";
import HandTile from "./HandTile";
import { yakuData } from "../data/yaku_data";

const YakuContainer = styled.div`
  background-color: #a6caff;
  padding: 20px;
  border-radius: 10px;
`;

const YakuItem = styled.div`
  margin-bottom: 20px;
`;

const YakuTitle = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;

const YakuDescription = styled.div`
  margin-bottom: 10px;
`;

const TileRow = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
`;

interface YakuListProps {
  category: number;
}

const YakuList: React.FC<YakuListProps> = ({ category }) => {
  const yakuList = yakuData[category] || [];

  return (
    <YakuContainer>
      {yakuList.map((yaku) => (
        <YakuItem key={yaku.title}>
          <YakuTitle>{yaku.title}</YakuTitle>
          <YakuDescription>{yaku.description}</YakuDescription>
          <TileRow>
            {yaku.tiles.map((tile) => (
              <HandTile key={tile} tile={tile} />
            ))}
          </TileRow>
        </YakuItem>
      ))}
    </YakuContainer>
  );
};

export default YakuList;
