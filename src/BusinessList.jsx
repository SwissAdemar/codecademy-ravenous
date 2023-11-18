import React from "react";
import businessData from "./businessData";
import Business from "./Business";

const BusinessList = () => {
    
    return businessData.map(data => <Business data={data} />)
}

export default BusinessList;