import React from "react";
import "../css/Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Search from "../components/Search";

function Home() {

    return (
        <>
            <Header />
            <main className="main">
                <Search />
            </main>
            <Footer />
        </>
    )
}


export default Home