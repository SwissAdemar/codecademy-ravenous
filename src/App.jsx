import React, {useState} from "react";
import SearchBar from "./SearchBar";
import BusinessList from "./BusinessList";
import searchBusiness from "./utils/yelp";

const App = () => {

    const [businessesData, setBusinessesData] = useState([]);

    
    const searchYelp = async (term, location, sortBy) => {
        const apiKey = import.meta.env.VITE_API_KEY;
        const businesses = await searchBusiness(term, location, sortBy, apiKey);
        if(businesses){
            setBusinessesData(businesses)
        } else {
            setBusinessesData('No items match the description.')
        }
    };

    return (
        <>
            <div className="nav-bar">
                <nav id="navbar" className="nav-title">ravenous</nav>
                <SearchBar searchBusiness={searchYelp} />
            </div>
            <div className="cards-wrapper">
                <BusinessList businessesData={businessesData}/>
            </div>
        </>
    )
}

export default App;