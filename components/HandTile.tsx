import React from "react"

interface HandTileProps {
  tile: string
}

const HandTile: React.FC<HandTileProps> = ({ tile }) => {
  return (
    <div
      style={{
        width: 40,
        height: 60,
        backgroundColor: "white",
        border: "1px solid #ddd",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 5,
        marginLeft: 5,
        paddingLeft: 5
      }}>
      <p style={{ fontSize: "20px", color: "#414141" }}>{tile}</p>
    </div>
  )
}

export default HandTile
