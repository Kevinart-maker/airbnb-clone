import star1 from '/Star 1-1.png'
import './Card.css'

const Card = (props) => {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="card-container">
            {badgeText && <div className="card-badge">
                {badgeText}
            </div>}
            <img src={props.coverImg} alt="" />
            <div className="reviews">
                <img className='star' src={star1} alt="" />
                <span className="rating">{props.rating}</span>
                <span className="reviewCount">{props.reviewCount} . </span>
                <span className="country">{props.location}</span>
            </div>
            <h3>{props.title}</h3>
            <p className='price'><strong>from ${props.price}</strong> /person</p>
        </div>
    );
}
 
export default Card;