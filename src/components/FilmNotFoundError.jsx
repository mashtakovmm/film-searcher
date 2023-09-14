import React from "react";
import "../css/Button.css"


function FilmNotFoundError ({errorText = "Unexpected error, try again", resetCallback}) {
    return (
        <>
            <span>{errorText}</span>
            <button className="button info-button" onClick={resetCallback}>Let's Try Again!</button>
        </>
    )
}

export default FilmNotFoundError