import { Component } from "react";

import "./index.css"

class TopStudents extends Component{
    render(){
        return(
            <div className="topStuContainer">
                <div className="stuImage">
                     <p>TopStudents Component</p>
                </div>
                <div className="stuDescription">
                    <h3>Amit Jha</h3>
                    <p>"Some review submitted by the user about the company"</p>
                </div>
            </div>
        )
    }
}

export default TopStudents