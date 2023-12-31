import React, { useEffect, useState } from "react";


const SearchBar = ({searchBusiness}) => {

    const [search, setSearch] = useState('');
    const [location, setLocation] = useState('');
    const [selected, setSelected] = useState('best_match');

    const handleSelect = (e) => {
        setSelected(e.target.id);
    }

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }
    
    const handleLocation = (e) => {
        setLocation(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        searchBusiness(search, location, selected);
    }

    
    return (
        <div className="search-bar">
            <div className="search-bar-sort">
                <button 
                    className={`sort-btn ${selected === 'best_match' && 'active'}`}
                    onClick={handleSelect} 
                    id="best_match">Best<br />Match
                </button>
                <button 
                    className={`sort-btn ${selected === 'rating' && 'active'}`} 
                    onClick={handleSelect} 
                    id="rating">Highest<br />Rated
                </button>
                <button 
                    className={`sort-btn ${selected === 'review_count' && 'active'}`} 
                    onClick={handleSelect} 
                    id="review_count">Most<br />Reviewed
                </button>
            </div>
            <form className="form-content" onSubmit={handleSubmit}>
                <div className="form-inputs">
                    <input type="text" placeholder="Search Business" className="form-input" value={search} onChange={handleSearch} required/>
                    <input type="text" placeholder="Where?" className="form-input" value={location} onChange={handleLocation} required/>
                </div>
                <input type="submit" className="submit-btn" value="Let's Go"/>
            </form>
        </div>
    )
}

export default SearchBar;