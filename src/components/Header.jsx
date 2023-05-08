import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";
import "../css/Links.css";
import "../css/Header.css";

function Header() {
    return (
        <header className="header">
            <Link className="link logo">FilmFinder</Link>
            <Link className="link" >Find Film</Link>
            <Link className="link" >About</Link>
            <Link className="link" >Attribution</Link>
        </header>
    )
}

export default Header;