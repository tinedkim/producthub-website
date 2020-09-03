import React from "react";
import { ToastsContainer, ToastsStore } from "react-toasts";
import Bttn from '@material-ui/core/Button';
import "../App.css";

<<<<<<< HEAD
import { connect } from "react-redux";
import { logout } from "../actions/session";


const mapStateToProps = ({ errors }) => ({
    errors
});
  const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

const Logout = ({ errors, logout }) => {
    const handleSubmit = event => {
        event.preventDefault();
        logout();
    };

=======

export default function Logout(props) {

  
    const handleSubmit = event => {
        event.preventDefault();
    
        props.handleClick(false)
      };
    
>>>>>>> 7ea4ea63b4e64dc9ed79c92a8f378bef19423a31
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
<<<<<<< HEAD
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Logout);
=======
}

>>>>>>> 7ea4ea63b4e64dc9ed79c92a8f378bef19423a31
