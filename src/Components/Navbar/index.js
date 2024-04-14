import {Component} from "react";
import {NavLink} from "react-router-dom"
import { IoIosContact } from "react-icons/io";
import { IoMdCart } from "react-icons/io";

import "./index.css"

class Navbar extends Component {
    render(){
        return(
            <div >
            <nav className="mainContainer">
                <div>
                    <NavLink to = "/"><h2>karo abhayaas</h2></NavLink>
                    
                </div>
                <div className="linksContainer">
                <NavLink to= "/" className= "eachLink">JOIN US</NavLink>
                <NavLink to = "/classes" className= "eachLink">Classes</NavLink>
                <NavLink to = "/products" className= "eachLink">Products</NavLink>
                <NavLink to = "/about" className= "eachLink">About</NavLink>
                <NavLink to = "/login"><IoIosContact className="contactIcon" /></NavLink>
                <NavLink to = "/cart"><IoMdCart className="contactIcon" /></NavLink>
                </div>
            </nav>
            </div>
        )
    }
}

export default Navbar