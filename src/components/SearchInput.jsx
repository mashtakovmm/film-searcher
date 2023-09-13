import React from "react";
import "../css/Search.css";
import "../css/Button.css";
import {useState} from 'react';
import fetchWithTitle from "../utils/FetchWrapper";

function SearchInput ({handleFetchCallback}) {

    const [title, setTitle] = useState('');
    const [year, setYear] = useState(null);

    function handleTitle(e) {
        setTitle(e.target.value.split(' ').join('+').replace(/\++/g, '+'))
    }

    function hadleYear(e) {
        setYear(e.target.value.replace(/ /g, ''))
    }
    
    async function handleClick() {
        const r = await fetchWithTitle(title, year)
        handleFetchCallback(await r.json())
    }
    return (
        <div className="input-padding">
            <div className="inputs-container">
                <span>Please, enter movie title and year (optional)</span>
                <div className="input-conteiner">
                    <label for="title">Title:</label>
                    <input type="text" id="title" name="title" className="input" placeholder="e.g. Scream 2" onChange={handleTitle}/>
                </div>
                <div className="input-conteiner">   
                    <label for="year">Year:</label>
                    <input type="text" id="year" name="year" className="input" placeholder="e.g. 2011" onChange={hadleYear}/>
                </div>
                <button className="button" onClick={handleClick}>Find It!</button>
            </div>
        </div>
    )
}

export default SearchInput

