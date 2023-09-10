import React from "react";
import "../css/Home.css";
import "../css/About.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
    
function Attribution() {

    return (
        <>
            <Header />
            <main className="main">
                <div className="info-container">
                <span>API by Brian Fritz.</span><br/>
                <span>All content licensed under <a className="a" href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a>.</span><br/>
                <span>You can donate to API author <a className="a" href="https://www.omdbapi.com/donate.htm">here</a>.</span><br/>
                </div>
            </main>
            <Footer />
        </>
    )
}


export default Attribution