import React from "react";
import Business from "./Business";

const BusinessList = ({businessesData}) => {

    return businessesData.map(data => <Business key={data.id} data={data} />)
}

export default BusinessList;