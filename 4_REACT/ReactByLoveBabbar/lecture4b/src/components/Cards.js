import React from 'react'
import Card from './Card'
const Cards = ({courses}) => {

    const getCourses = () => {

        let allCourses = [];

        //returns you a list of all courses recieved from the api response
        Object.values(courses).forEach((courseCategory) =>{
            courseCategory.forEach((course) => {
                allCourses.push(course);
            })
        })

        return allCourses;
    }

    return (
        <div>{
                getCourses().map((course) => {
                   return <Card  course={course} />
                })
            }
        </div>
    )
}

export default Cards