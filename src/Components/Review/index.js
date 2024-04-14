import { Component  } from "react";

import "./index.css"

class Review extends Component{
    render(){
        const {eachStudentDetails} = this.props;
        const {studentName, review} = eachStudentDetails;
        return(
            <div className="reviewCon">
                <h3>{studentName}</h3>
                <hr/>
                <p>{review}</p>
            </div>
        )
    }
}

export default Review