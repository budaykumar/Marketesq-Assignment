import { Component } from "react";

import "./index.css"

class TopStudents extends Component{
    render(){
        const {eachStudentDetails} = this.props;
        const {studentName, review} = eachStudentDetails;
        return(
            <div className="topStuContainer">
                <div className="stuImage">
                     <p>TopStudents Component</p>
                </div>
                <div className="stuDescription">
                    <h3>{studentName}</h3>
                    <p>{review}</p>
                </div>
            </div>
        )
    }
}

export default TopStudents