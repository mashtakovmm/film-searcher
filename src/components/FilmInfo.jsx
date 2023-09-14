import React from "react";
import '../css/FilmInfo.css';
import "../css/Button.css";

function FilmInfo (props) {
    const {data, resetCallback} = props
    const rating = data.imdbRating
    let ratingColor = rating >= 7 ? "#57e32c" : rating > 4 ? "#ffe234" : "#ff4545"

    return (
        <div className="info-containter">
            <div className="info-with-poster">
                <img src={data.Poster !== "N/A" ? data.Poster : "posterplaceholder.png"} className="film-poster"/>
                <div className="info-columns">
                    <div className="title-row"> 
                        <span className="title">{data.Title} ({data.Year})</span>
                        <span className="rating" style={{color: ratingColor}}>{rating}</span>
                    </div>
                    <hr className="line"></hr>
                    <div className="info-row"> 
                        <span className="row-name">Director</span>
                        <span className="row-info">{data.Director}</span>
                    </div>
                    <div className="info-row"> 
                        <span className="row-name">Writer</span>
                        <span className="row-info">{data.Writer}</span>
                    </div>
                    <div className="info-row"> 
                        <span className="row-name">Actors</span>
                        <span className="row-info">{data.Actors}</span>
                    </div>
                    <div className="info-row"> 
                        <span className="row-name">Genre</span>
                        <span className="row-info">{data.Genre}</span>
                    </div>
                    <div className="info-row"> 
                        <span className="row-name">Box Office</span>
                        <span className="row-info">{data.BoxOffice}</span>
                    </div>
                </div>
            </div>
            <span className="synopsis">
                {data.Plot}
            </span>
            <button className="button info-button" onClick={resetCallback}>Let's Find Another!</button>
        </div>
        
    )
}

export default FilmInfo