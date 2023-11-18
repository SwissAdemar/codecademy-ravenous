import React from "react";
import SearchBar from "./SearchBar";
import BusinessList from "./BusinessList";



const App = () => {
    return (
        <>
            <div className="nav-bar">
                <nav id="navbar" className="nav-title">ravenous</nav>
                <SearchBar />
            </div>
            <div className="cards-wrapper">
                <BusinessList />
            </div>
        </>
    )
}

export default App;