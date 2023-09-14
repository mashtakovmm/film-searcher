import React from "react";
import "../css/Search.css";
import {useState, useEffect} from 'react';
import SearchInput from "./SearchInput";
import FilmInfo from "./FilmInfo";
import FilmNotFoundError from "./FilmNotFoundError";


function Search() {
    const [data, setData] = useState('');
    const [showFilm, setShowFilm] = useState(false);
    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState("Unexpected error, try again");

    useEffect(() => {
        if(data !== '' && !error){
            setShowFilm(true);
        }
    }, [data])

    function handleFetchCallback(fetchData) {
        if(fetchData.Response === "True") {
            setData(fetchData);
        } else {
            setError(true)
            setErrorText(fetchData.Error)
        }
    }

    function resetCallback() {
        setError(false)
        setShowFilm(false);
    }

    return (
        <div className="search-container">
            <div className="container child-search-container">
                {error ? <FilmNotFoundError errorText={errorText} resetCallback={resetCallback}/> : !showFilm ? <SearchInput handleFetchCallback={handleFetchCallback}/>
                 : <FilmInfo data={data} resetCallback={resetCallback}/>}
            </div>
        </div>
    )
}

export default Search