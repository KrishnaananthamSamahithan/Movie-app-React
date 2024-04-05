import react from "react";

const Card=()=>{
    return (
        <>
            <div className='movie'>
                <img src="images/poster.jpg" className="poster"></img>
                <div className="movie-details">
                    <h4 className="title">Movie Title</h4>
                    <p className="rating">9.7</p>
                </div>
                <div className="overview">
                    <h1>Overview</h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam in ex ultrices lacinia
                </div>
            </div>
        </>
        
    )
}
export default Card;