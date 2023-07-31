import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Box from './Box'
import AddBoxForm from "./AddBoxForm";

const BoxList = () => {
    const INITIAL_STATE = [
        { id:uuid(), backgroundColor:'red', width:35, height:35 },
        { id:uuid(), backgroundColor:'green', width:35, height:100 },
        { id:uuid(), backgroundColor:'blue', width:100, height:35 }
    ]
    const [boxes, setBoxes] = useState(INITIAL_STATE)

    const addBox = (newBox) =>{
        setBoxes(boxes => [...boxes, {id: uuid(), ...newBox}])
    }

    const handleRemove = (e) => {
        setBoxes(boxes.filter(box => box.id !== e.target.parentNode.id))
    }

    return (
        <>
            <AddBoxForm addBox={addBox}/>
            {boxes.map(({id, backgroundColor, width, height}) =>
                <Box
                    id={id}
                    key={id}
                    backgroundColor={backgroundColor}
                    width={width}
                    height={height}
                    handleRemove={handleRemove}
                /> )}
        </>
    )
}

export default BoxList;