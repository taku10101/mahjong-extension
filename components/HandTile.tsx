import React from "react";

interface HandTileProps {
    tile: string;
}

const HandTile: React.FC<HandTileProps> = ({ tile }) => {
    return (
        <div
            style={{
                width: 40,
                height: 60,
                backgroundColor: 'white',
                border: '1px solid #ddd',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 5,
                fontSize: 18,
                color: 'black',
            }}
        >
            <p style={{fontSize: '20px'}}>{tile}</p>
        </div>
    );
};

export default HandTile;