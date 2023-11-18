import React from "react"

const Business = () => {
    return (
        <div className="business-card">
            <img src={businessData.imageSrc}
            alt={businessData.name} />
            <div class="card-content">
                <h2 id="card-title">{businessData.name}</h2>
                <div className="card-desc">
                    <p>{businessData.address}</p>
                    <p className="align-right highlight upper">{businessData.category}</p>
                    <p>{businessData.city}</p>
                    <p className="align-right highlight">{businessData.rating} stars</p>
                    <p>{`${businessData.state} ${businessData.zipCode}`}</p>
                    <p className="align-right ">{businessData.reviewCount} reviews</p>
                </div>
            </div>
        </div>
    )
}

export default Business;