import React from "react";
import SearchBar from "./SearchBar";
import BusinessList from "./BusinessList";
import businessData from "./businessData";



const App = () => {
    return (
        <>
            <div className="nav-bar">
                <nav id="navbar" className="nav-title">ravenous</nav>
                <SearchBar />
            </div>
            <div className="cards-wrapper">
                <BusinessList businessData={businessData}/>
            </div>
        </>
    )
}

export default App;