import React, { useState } from "react";

const AddBoxForm = ({addBox}) => {
    const MIN_LENGTH = "35"
    const INITIAL_STATE = {
        "backgroundColor":"#FFFFFF",
        "width": MIN_LENGTH,
        "height": MIN_LENGTH,
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) =>{
        const {name, value} = e.target
        setFormData(data => ({ ...data, [name]: value }))
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        // Ensure numeric
        formData.width = parseInt(formData.width)
        formData.height = parseInt(formData.height)
        addBox({...formData})
        setFormData(INITIAL_STATE)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="backgroundColor">Color</label>
            <input
                id="backgroundColor"
                name="backgroundColor"
                type="color"
                value={formData["backgroundColor"]}
                onChange={handleChange}
            />
            <br/>

            <label htmlFor="width">Width</label>
            <input
                id="width"
                name="width"
                type="number"
                min={MIN_LENGTH}
                step="5"
                value={formData.width}
                onChange={handleChange}
            />
            <br/>

            <label htmlFor="height">Height</label>
            <input
                id="height"
                name="height"
                type="number"
                min={MIN_LENGTH}
                step="5"
                value={formData.height}
                onChange={handleChange}
            />
            <br/>
            <br/>

            <input type="submit"/>
        </form>
    )
}

export default AddBoxForm;