import React from "react"


const Business = ({data, onFailure}) => {
    if(!data){
        return <div className="failed-match">{onFailure}</div>
    }
    return (
        <div className="business-card">
            <div className="img-container">
                <img src={data.imageSrc}
                alt={data.name}
                className="card-img" />
            </div>
            <div className="card-content">
                <h2 id="card-title">{data.name}</h2>
                <div className="card-desc">
                    <div className="desc-wrapper">
                        <p>{data.address}</p>
                        <p className="highlight upper">{data.category}</p>
                    </div>
                    <div className="desc-wrapper">
                        <p>{data.city}</p>
                        <p className="highlight">{data.rating} stars</p>
                    </div>
                    <div className="desc-wrapper">
                        <p>{`${data.state} ${data.zipCode}`}</p>
                        <p className="">{data.reviewCount} reviews</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Business;