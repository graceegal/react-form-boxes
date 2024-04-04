import React, { useState } from "react";

/** Form for adding box.
 *
 * Props:
 * - createBox: fn to call in parent
 *
 * State:
 * formData: { height, width, backgroundColor }
 *
 * BoxList -> NewBoxForm
 */
function NewBoxForm({ addBox }) {
    const initialState = { height: "", width: "", backgroundColor: "" };
    const [formData, setFormData] = useState(initialState);

    // handle submit
    function handleSubmit(evt) {
        evt.preventDefault();
        addBox(formData);
        setFormData(initialState);
    }

    // handle change
    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value,
        }));
    }

    // render form
    return (
        <form className="new-box-form" onSubmit={handleSubmit}>
            <label htmlFor="width">Width</label>
            <input
                type="number"
                id="width"
                name="width"
                value={formData.width}
                onChange={handleChange}
            />

            <label htmlFor="height">Height</label>
            <input
                type="number"
                id="height"
                name="height"
                value={formData.height}
                onChange={handleChange}
            />

            <label htmlFor="background-color">Background Color</label>
            <input
                type="text"
                id="background-color"
                name="backgroundColor"
                value={formData.backgroundColor}
                onChange={handleChange}
            />

            <button>Add Box</button>
        </form>
    );
}

export default NewBoxForm;