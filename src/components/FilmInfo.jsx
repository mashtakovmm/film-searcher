import React from "react";
import '../css/FilmInfo.css';
import "../css/Button.css";

function FilmInfo (data, {handleResetCallback}) {
    const rating = data.data.imdbRating
    let ratingColor = rating >= 7 ? "#57e32c" : rating > 4 ? "#ffe234" : "#ff4545"

    function handleClick () {
        handleResetCallback()
    }

    return (
        <div className="info-containter">
            <div className="info-with-poster">
                <img src={data.data.Poster != "N/A" ? data.data.Poster : "posterplaceholder.png"} className="film-poster"/>
                <div className="info-columns">
                    <div className="title-row"> 
                        <span className="title">{data.data.Title} ({data.data.Year})</span>
                        <span className="rating" style={{color: ratingColor}}>{rating}</span>
                    </div>
                    <hr className="line"></hr>
                    <div className="info-row"> 
                        <span className="row-name">Director</span>
                        <span className="row-info">{data.data.Director}</span>
                    </div>
                    <div className="info-row"> 
                        <span className="row-name">Writer</span>
                        <span className="row-info">{data.data.Writer}</span>
                    </div>
                    <div className="info-row"> 
                        <span className="row-name">Actors</span>
                        <span className="row-info">{data.data.Actors}</span>
                    </div>
                    <div className="info-row"> 
                        <span className="row-name">Genre</span>
                        <span className="row-info">{data.data.Genre}</span>
                    </div>
                    <div className="info-row"> 
                        <span className="row-name">Box Office</span>
                        <span className="row-info">{data.data.BoxOffice}</span>
                    </div>
                </div>
            </div>
            <span className="synopsis">
                {data.data.Plot}
            </span>
            <button className="button info-button" onClick={handleClick}>Find Another</button>
        </div>
        
    )
}

export default FilmInfo