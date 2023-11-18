import React, { useEffect, useState } from "react";

const SearchBar = () => {

    const [search, setSearch] = useState('');
    const [location, setLocation] = useState('');
    const [selected, setSelected] = useState(null);

    const handleSelect = (e) => {
        setSelected(e.target.value);
    }

    

    
    return (
        <div className="search-bar">
            <div className="search-bar-sort">
                <button 
                    className={`sort-btn ${selected === 'best_match' && 'active'}`}
                    onClick={handleSelect} 
                    value="best_match">Best Match
                </button>
                <button 
                    className={`sort-btn ${selected === 'rating' && 'active'}`} 
                    onClick={handleSelect} 
                    value="rating">Highest Rated
                </button>
                <button 
                    className={`sort-btn ${selected === 'review-count' && 'active'}`} 
                    onClick={handleSelect} 
                    value="review-count">Most Reviewed
                </button>
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