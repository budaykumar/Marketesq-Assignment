import {Component} from "react";


import "./index.css"

class Classes extends Component {
    render(){
        const {eachVideoDetails} = this.props;
        const {videoTitle, videoDescription} = eachVideoDetails
        return(
            <div>
                <div className="classesContainer">
                <div className="thumbnailCon">
                    <p>Thumbnail Component</p>
                </div>
                <div className="vedioDiscpContainer">
                    <h3>{videoTitle}</h3>
                    <p>{videoDescription}</p>
                    <button className="practiceButton">PRACTICE</button> 
                </div>
            </div>
            <hr/>
            </div>
        )
    }
}

export default Classes