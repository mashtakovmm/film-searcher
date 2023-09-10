import React from "react";
import "../css/Search.css";
import {useState, useEffect} from 'react';
import fetchWithTitle from "../utils/FetchWrapper";

function Search() {

    const [title, setTitle] = useState('');
    const [year, setYear] = useState(null);
    const [data, setData] = useState('');

    function handleTitle(e) {
        let value = e.target.value
        setTitle(value.split(' ').join('+').replace(/\++/g, '+'))
    }

    function hadleYear(e) {
        setYear(e.target.value.replace(/ /g, ''))
    }
    
    async function handleClick() {
        const r = await fetchWithTitle(title, year)
        setData(await r.json())
    }

    useEffect(() => {
        if(data != ''){
            console.log(data);
        }
    }, [data])

    return (
        <div className="search-container">
            <div className="child-search-container">
                <span>Please, enter movie title and year (optional)</span>
                <div className="inputs-container">
                    <div className="input-conteiner">
                        <label for="title">Title:</label>
                        <input type="text" id="title" name="title" className="input" placeholder="e.g. Scream 2" onChange={handleTitle}/>
                    </div>
                    <div className="input-conteiner">   
                        <label for="year">Year:</label>
                        <input type="text" id="year" name="year" className="input" placeholder="e.g. 2011" onChange={hadleYear}/>
                    </div>
                </div>
                <button className="button" onClick={handleClick}>Find It!</button>
            </div>
        </div>
    )
}

export default Search