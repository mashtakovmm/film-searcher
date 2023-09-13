import React from "react";
import "../css/Search.css";
import {useState, useEffect} from 'react';
import SearchInput from "./SearchInput";
import FilmInfo from "./FilmInfo";

function Search() {
    const [data, setData] = useState('');
    const [showFilm, setShowFilm] = useState(false);

    useEffect(() => {
        if(data !== ''){
            setShowFilm(true);
        }
    }, [data])

    function handleFetchCallback(fetchData) {
        setData(fetchData);
    }

    function handleResetCallback() {
        setShowFilm(false);
    }

    return (
        <div className="search-container">
            <div className="container child-search-container">
                {!showFilm ? <SearchInput handleFetchCallback={handleFetchCallback}/> : <FilmInfo data={data} handleFetchCallback={handleResetCallback}/>}
            </div>
        </div>
    )
}

export default Search