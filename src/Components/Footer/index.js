import { Component } from "react";

import "./index.css"

class Footer extends Component{
    render(){
        return(
            <div className="fotterContainer">
                <div className="addressTextContainer">
                    <p className="addressText">KARO ABHAYAAS <br/> 112, ELECTRONIC CITY <br/> BANGALORE, INDIA</p>
                </div>
                <div className="contactTextContainer">
                    <p className="addressText">SOME TEXT ABOUT SOMETHING <br/> AND THEN SOME OTHER THING</p>
                    <div className="contactUsCon">
                        <p className="contactUsText">CONTACT US</p>
                        <p className="contactUsText">CONTACT US</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer