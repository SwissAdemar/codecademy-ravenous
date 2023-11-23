import React from "react";
import Business from "./Business";

const BusinessList = ({businessesData}) => {
    console.log(businessesData);
    if(typeof businessesData === 'string'){
        return <Business onFailure={businessesData} />
    }
    return businessesData.map(data => <Business key={data.id} data={data} />)
    
}

export default BusinessList;