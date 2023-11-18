import React from "react"
import businessData from "./businessData";

const Business = ({data}) => {
    return (
        <div className="business-card">
            <img src={data.imageSrc}
            alt={data.name} />
            <div class="card-content">
                <h2 id="card-title">{data.name}</h2>
                <div className="card-desc">
                    <p>{data.address}</p>
                    <p className="align-right highlight upper">{data.category}</p>
                    <p>{data.city}</p>
                    <p className="align-right highlight">{data.rating} stars</p>
                    <p>{`${data.state} ${data.zipCode}`}</p>
                    <p className="align-right ">{data.reviewCount} reviews</p>
                </div>
            </div>
        </div>
    )
}

export default Business;