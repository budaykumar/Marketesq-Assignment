import { Component  } from "react";

import "./index.css"

class Review extends Component{
    render(){
        return(
            <div className="reviewCon">
                <h3>Amit Jha</h3>
                <hr/>
                <p>"Some review submitted by the user about the company"</p>
            </div>
        )
    }
}

export default Review