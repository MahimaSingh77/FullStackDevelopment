import React from 'react'

const Card = ({course}) => {
    return (
        <div>
           <div>
           <img src={course.image.url}></img>

            </div> 
            <p>{course.title}</p>
            <p>{courses.description}</p>

        </div>
    )
}




export default Card;