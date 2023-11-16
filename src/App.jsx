import React from "react";
import businessData from "./businessList";

const SearchBar = () => {
    return (
        <div className="search-bar">
            <div className="search-bar-sort">
                <button>Best Match</button>
                <button>Highest Rated</button>
                <button>Most Reviewed</button>
            </div>
            <input type="text" placeholder="Search Business" />
            <input type="text" placeholder="Where?" />
            <input type="submit" />
        </div>
    )
}

const Business = () => {
    return (
        <div className="business-card">
            <img src={businessData.imageSrc}
            alt={businessData.name} />
            <h2>{businessData.name}</h2>
            <div className="card-desc">
                <p>{businessData.address}</p>
                <p>{businessData.city}</p>
                <p>{`${businessData.state} ${businessData.zipCode}`}</p>
                <p>{businessData.category}</p>
                <p>{businessData.rating}</p>
                <p>{businessData.reviewCount}</p>
            </div>
        </div>
    )
}

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