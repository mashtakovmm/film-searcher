import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";
import "../css/Links.css";
import "../css/Header.css";

function Footer() {
    return (
        <footer className="header">
            <Link className="link logo">FilmFinder</Link>
        </footer>
    )
}

export default Footer;