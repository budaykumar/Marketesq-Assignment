import { Component } from "react";

import "./index.css"

class RegistrationPage extends Component {
    render() {
        return (
            <div className="RegisOuterContainer">
                <div className="RegisMainContainer">
                    <input type="text" className="inputFeild" placeholder="NAME"/>
                    <input type="text" className="inputFeild" placeholder="EMAIL"/>
                    <input type="text" className="inputFeild" placeholder="PHONE NUMBER"/>
                    <button className="OtpButton">SEND OTP</button>
                    <p>Don't Recevie It? <a href="#">RESEND</a></p>
                    <input type="text" className="inputFeild" placeholder="OTP"/>
                    <button className="OtpButton">SIGN UP</button>
                    <p>ALredy Have An Account? <a href="login">Log In</a> </p>
                </div>
            </div>
        )
    }
}

export default RegistrationPage;