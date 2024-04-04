import React, {useState} from "react";
import NewBoxForm from "./NewBoxForm";


/*
This component should display a div with a
background color, width, and height based on
the props passed to it.
*/
function Box({ backgroundColor, width, height }) {

    // render box
    return (
        <div style={{
            height,
            width,
            backgroundColor}}></div>
    )
    // return (
    //     <div style={{
    //         height: height,
    //         width: width,
    //         backgroundColor: backgroundColor}}></div>
    // )
}