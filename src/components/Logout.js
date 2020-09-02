import React from "react";
import { ToastsContainer, ToastsStore } from "react-toasts";
import Bttn from '@material-ui/core/Button';
import "../App.css";

import { connect } from "react-redux";
import { logout } from "../actions/session";


const mapStateToProps = ({ session }) => ({
    session
});
  const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

const Logout = ({ logout, session }) => {
    const handleSubmit = event => {
        event.preventDefault();
        logout();
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
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Logout);
