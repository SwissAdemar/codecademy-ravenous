import React from "react";
import Business from "./Business";

const BusinessList = ({businessData}) => {
    
    return businessData.map(data => <Business data={data} />)
}

export default BusinessList;