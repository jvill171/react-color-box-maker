import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Box from './Box'
import AddBoxForm from "./AddBoxForm";

const BoxList = () => {
    const INITIAL_STATE = []
    const [boxes, setBoxes] = useState(INITIAL_STATE)

    const addBox = (newBox) =>{
        setBoxes(boxes => [...boxes, {id: uuid(), ...newBox}])
    }

    const handleRemove = (e) => {
        setBoxes(boxes.filter(box => box.id !== e.target.parentNode.id))
    }

    const boxComponents = boxes.map(({id, backgroundColor, width, height}) =>
        <Box
            id={id}
            key={id}
            backgroundColor={backgroundColor}
            width={width}
            height={height}
            handleRemove={handleRemove}
        /> )

    return (
        <>
            <AddBoxForm addBox={addBox}/>
            {boxComponents}
        </>
    )
}

export default BoxList;