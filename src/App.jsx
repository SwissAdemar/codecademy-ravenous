import React from "react";
import businessData from "./businessData";
import SearchBar from "./SearchBar";
import Business from "./Business";
import BusinessList from "./BusinessList";



const App = () => {
    return (
        <>
            <div className="nav-bar">
                <nav id="navbar" className="nav-title">ravenous</nav>
                <SearchBar />
            </div>
            <div className="cards-wrapper">
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
               
            </div>
        </>
    )
}

export default App;