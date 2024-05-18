import React from "react";
import styled from "styled-components";

interface HandTileProps {
  tile: string;
}

const HandTile: React.FC<HandTileProps> = ({ tile }) => {
  return (
    <TileContainer>
      <Sp>{tile}</Sp>
    </TileContainer>
  );
};

export default HandTile;
const TileContainer = styled.div`
  width: 40px;
  height: 60px;
  background-color: white;
  border: 1px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  font-size: 18px;
  color: black;
`;

const Sp = styled.p`
  font-size: 20px;
`;
