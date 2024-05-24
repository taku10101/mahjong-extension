import React from "react"

interface HandTileProps {
  tile: string
}

const HandTile: React.FC<HandTileProps> = ({ tile }) => {
  return (
    <div
      style={{
        width: 60,
        height: 60,
        backgroundColor: "white",
        border: "1px solid #ddd",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingRight: 5,
        paddingBottom: 8,
        marginLeft: 5,
        paddingLeft: 5
      }}>
      <p style={{ fontSize: "38px", color: "#414141" }}>{tile}</p>
    </div>
  )
}

export default HandTile
