import {Component} from "react";


import "./index.css"

class Classes extends Component {
    render(){
        return(
            <div>
                <div className="classesContainer">
                <div className="thumbnailCon">
                    <p>Thumbnail Component</p>
                </div>
                <div className="vedioDiscpContainer">
                    <h3>Sample Video Title</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br/> industry. Lorem Ipsum has been the industry's standard dummy text <br/> ever since the 1500s, when an unknown printer took a galley of <br/> type and scrambled it to make a type specimen book. It has <br/> survived not only five centuries, but also the leap into <br/> electronic typesetting, remaining essentially unchanged.</p>
                    <button className="practiceButton">PRACTICE</button> 
                </div>
            </div>
            <hr/>
            </div>
        )
    }
}

export default Classes