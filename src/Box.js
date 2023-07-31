import React from "react";

const Box = ({id, backgroundColor, width=5, height=5, handleRemove}) => {

    return (
        <div
            className="box"
            id={id}
            style={{
                backgroundColor,
                width:`${width}em`,
                height:`${height}em`,
                border:"1px solid black", margin:"5px"
            }}
        >
            <button onClick={handleRemove}>X</button>
        </div>
    )
}

export default Box;