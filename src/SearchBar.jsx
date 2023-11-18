import React from "react";

const SearchBar = () => {
    return (
        <div className="search-bar">
            <div className="search-bar-sort">
                <button className="sort-btn">Best Match</button>
                <button className="sort-btn">Highest Rated</button>
                <button className="sort-btn">Most Reviewed</button>
            </div>
            <form className="form-content">
                <div className="form-inputs">
                    <input type="text" placeholder="Search Business" className="form-input" />
                    <input type="text" placeholder="Where?" className="form-input" />
                </div>
                <input type="submit" className="submit-btn" value="Let's Go"/>
            </form>
        </div>
    )
}

export default SearchBar;