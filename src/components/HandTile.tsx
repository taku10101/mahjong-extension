import React from "react";
import styled from "styled-components";

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

interface HandTileProps {
  tile: string;
}

const HandTile: React.FC<HandTileProps> = ({ tile }) => {
  return <TileContainer>{tile}</TileContainer>;
};

export default HandTile;
