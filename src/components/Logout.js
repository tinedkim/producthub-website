import React from "react";
import { ToastsContainer, ToastsStore } from "react-toasts";
import Bttn from '@material-ui/core/Button';
import "../App.css";


export default function Logout(props) {

  
    const handleSubmit = event => {
        event.preventDefault();
    
        props.handleClick(false)
      };
    
    return (
        <div class = "Logout">
            <Bttn Button variant="contained" disableElevation style={{
                        color: "white",
                        fontSize: "18px",
                        backgroundColor: "#12517A",
                        outline: 'none'}}
                        onClick={handleSubmit}
                        >
                <a
                >
                    Logout
                </a>
            </Bttn>
            <ToastsContainer store={ToastsStore} />
        </div>
    );
}

