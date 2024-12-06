import star from "../assets/Star 1.png"

function Card(props){
    let badgeText
    if (props.items.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }else
        badgeText = "AVAILABLE"
    
    

    return(
        <>
            <div className="card1">
                {badgeText && <div className="card-badge">{badgeText}</div>}
                <img src={props.items.coverImg} className="card1-image"></img>
                <div className="card1-text">
                    <img src={star} alt="" className="card1-star" />
                    <p className="card1-rating">{props.items.stats.rating}</p>
                    <p className="card1-rating state">({props.items.stats.reviewCount}){props.items.location}</p>    
                </div>
                <h2 className="card-info">{props.items.title}</h2>
                <div className="card-para">
                    <p className="card-para price">From ${props.items.price}/ </p>
                    <p className="card-para">person</p>
                </div>    
            </div>
        </>
    )
}

export default Card;