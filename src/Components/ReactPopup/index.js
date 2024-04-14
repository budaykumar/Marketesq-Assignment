import Popup from "reactjs-popup";

import 'reactjs-popup/dist/index.css'

import './index.css' 

const ReactPopUp = () => (
    <div className="popup-container">
        <Popup
        modal 
        trigger={
            <button className="trigger-button" type="button">CHECK OUT</button>
        } 
        >
        {close => (
            <div>
            <div className="popup-content">
             <h1>PLEASE PROVIDE YOUR ADDRESS</h1>
             <textarea className = "textarea" rows="25" cols="50">
             </textarea>
             <div>
                <button className="popup-button" type="button" onClick={close}>CANCEL</button>
                <button className="popup-button" type="button" onClick={close}>SAVE</button>
            </div>
            </div>
            
          </div>
        )} 
        </Popup> 
    </div>
)

export default ReactPopUp;