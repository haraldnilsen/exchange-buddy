import React from "react";
import Navbar from "../components/Navbar";
/*
    Search page for the different search options
    Switches between two different search components
        - SearchRoom
        - SearchUser
*/

const Search : React.FC = () => {
    return(
        <>
            <Navbar />
            <h1>Search page</h1>
        </>
    );
}

export default Search;