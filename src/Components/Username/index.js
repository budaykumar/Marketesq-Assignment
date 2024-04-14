import { Component } from "react";

import "./index.css"

class Username extends Component{
    render(){
        return(
            <div className="UsernameMainContainer">
                <div className="userDetailsContainer">
                    <div>
                        <h1>Amit Jha</h1>
                        <p>+91774690033</p>
                        <p>amit.jha6700@gmail.com</p>
                        <div>
                            <button className="userButton">EDIT</button>
                            <button className="userButton">LOGOUT</button>
                        </div>
                    </div>
                    <hr/>
                    <div>
                        <h1>ADDRESS</h1>
                        <p>R107, AJMERA INFINITY, <br/> KARUNA NAGAR, ELECTRONIC CITY, <br/> BANGALORE, INDIA <br/> PIN: 846009</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Username;