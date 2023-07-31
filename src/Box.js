import React from "react";

const Box = ({id, backgroundColor, width, height, handleRemove}) => {

    return (
        <div
        id={id}
        style={{backgroundColor, width, height, border:"1px solid black", margin:"5px"}}>
            <button onClick={handleRemove}>X</button>
        </div>
    )
}

export default Box;