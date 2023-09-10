import React from "react";
import "../css/Switch.css";
import DarkModeIcon from "./icons/DarkModeIcon";
import LightModeIcon from "./icons/LightModeIcon";

function Switch () {
    return (
        <>
        <DarkModeIcon/>
            <label className="switch-toggle">
                <input  type="checkbox" />
                <span className="switch"/>
            </label>
        <LightModeIcon/>
        </>

    )
}

export default Switch;