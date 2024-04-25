import React from 'react'
import {FaQuouteLeft, FaQuoteRight, } from 'react-icons/fa'
const Card = (props) => {
    let review = props.review;
    
    return (
        <div>
            <div>
                <img src={review.image}/>
            </div>

            <div>
                <p>{review.name}</p>
            </div>

            <div>
                <p>{review.job}</p>
            </div>

            <div>
                <FaQuouteLeft/>
            </div>

            <div>
                {review.text}
            </div>

            <div>
                <FaQuoteRight/>
            </div>

            <div>

                <button>
                    +
                </button>

                <button>
                    Surprise Me
                </button>

            </div>

        </div>
    )
}


export default Card;