
import CourseCard from "../CourseCard";
import TopStudents from "../TopStudentCard";
import Review from "../Review";
import Footer from "../Footer";

import "./index.css"

import { Component } from "react";

const studentReviews = [
    {
      studentName: "Alice",
      review: "This course was amazing! I learned so much about React.js and now feel confident in building my own projects."
    },
    {
      studentName: "Bob",
      review: "The instructor explained complex concepts in a simple and understandable manner."
    },
    {
      studentName: "Charlie",
      review: "I've taken multiple React.js courses before, but this one stands out for its depth and clarity. Great job!"
    },
    {
      studentName: "Diana",
      review: "As a beginner, I found this course to be incredibly helpful. The hands-on projects really solidified my understanding of React.js."
    }
  ];
  

class MainContent extends Component{
    render(){
        return(
            <div>
                <CourseCard/>
                <h2 className="topStuHeading">Top Students</h2>
                <div className="topStuCompContainer">
                {studentReviews.map(eachStudent => (
                    <TopStudents eachStudentDetails = {eachStudent}/>
                ))}
                </div>
                <h2 className="reviewsHeading">Reviews</h2>
                <div className="reviewCompContainer">
                    {studentReviews.map(eachStudent => (
                        <Review eachStudentDetails = {eachStudent}/>
                    ))
                        }
                </div>
                <Footer/>
            </div>
        )
    }
}

export default MainContent