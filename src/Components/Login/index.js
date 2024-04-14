import { Component  } from 'react'

import "./index.css"

class Login extends Component {
    render() {
        return (
            <div className='loginOuterContainer'>
                <div className='loginMainCon'>
                <input type='text' placeholder='USERNAME' className='inputFeild'/>
                <input type='password' placeholder='PASSWORD' className='inputFeild'/>
                <a href='/username'><button className= "loginButton">Login</button></a>
                <p>Don't have an account? <a href='registration-page'>Sign Up</a></p>
                </div>
            </div>
        )
    }
}

export default Login;