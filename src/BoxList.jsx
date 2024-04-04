import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from 'uuid';

/**Place your state that contains all of the boxes here.
 * This component should render all of the Box components
 * along with the NewBoxForm component. */

function BoxList() {
    const [boxes, setBoxes] = useState([]);

    /** Add new Box object to boxes list. */
    function add(box) {
        let newBox = { ...box, id: uuid() };
        setBoxes(boxes => [...boxes, newBox]);
    }
    // end

    /** remove box matching that id. */
    function remove (id) {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    }

    function renderBoxes() {
        return (
            <div>
                {boxes.map(({ id, width, height, backgroundColor }) => (
                    <Box
                        key={id}
                        id={id}
                        remove={remove}
                        width={width}
                        height={height}
                        backgroundColor={backgroundColor}
                    />
                ))}
            </div>
        );
    }

    return (
        <div className="BoxList">
            <NewBoxForm addBox={add} />
            {renderBoxes()}
        </div>
    );
}

export default BoxList;