import React from "react";
import { Link } from "react-router-dom";
import Switch from "./Switch";
import "../css/Home.css";
import "../css/Links.css";
import "../css/Header.css";

function Header() {
    return (
        <header className="header">
            <div className="header-left">
                <Link to={{pathname:"/"}} className="link logo">FilmFinder</Link>
                <Link to={{pathname:"/"}} className="link" >Find Film</Link>
                <Link to={{pathname:"/about/"}} className="link" >About</Link>
                <Link to={{pathname:"/attribution/"}} className="link" >Attribution</Link>
            </div>
            <div>
                {/*TO DO: add theme switcher. Current switch is a placeholder */}
                <Switch></Switch>
            </div>
        </header>
    )
}

export default Header;