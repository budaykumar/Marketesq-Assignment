
import CourseCard from "../CourseCard";
import TopStudents from "../TopStudentCard";
import Review from "../Review";
import Footer from "../Footer";

import "./index.css"

import { Component } from "react";

class MainContent extends Component{
    render(){
        return(
            <div>
                <CourseCard/>
                <h2 className="topStuHeading">Top Students</h2>
                <div className="topStuCompContainer">
                <TopStudents/>
                <TopStudents/>
                <TopStudents/>
                <TopStudents/>
                </div>
                <h2 className="topStuHeading">Reviews</h2>
                <div className="reviewCompContainer">
                    <Review/>
                    <Review/>
                    <Review/>
                    <Review/>
                    <Review/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default MainContent