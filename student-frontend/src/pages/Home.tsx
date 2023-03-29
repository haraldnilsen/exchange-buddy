import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

/*
    Simple home page for the webapp
    When selecting Room og User search a search bar will appear
    when hitting search, the page redirects to the Search page
*/

const Home : React.FC = () => {

    return (
        <>
            <Navbar />
            <HeroSection/>
            <Footer />
        </>
    );
}

export default Home;
