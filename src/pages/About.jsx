import React from "react";
import "../css/Home.css";
import "../css/About.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
    
function About() {

    return (
        <>
            <Header />
            <main className="main">
                <div className="info-container">
                    <span>Welcome to FilmFinder, your ultimate destination for discovering and exploring the world of cinema</span> <br/>
                    <span>At FilmFinder, we believe that movies have the power to inspire, entertain, and connect people across the globe. Our mission is to provide you with
                         a seamless and enriching experience in your quest for the perfect film.</span> <br/>
                </div>
            </main>
            <Footer />
        </>
    )
}


export default About