import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from "react-bootstrap/Modal";
import { ToastsContainer, ToastsStore } from "react-toasts";
import { MDBBtn } from "mdbreact";
import Bttn from '@material-ui/core/Button';
import "../App.css";
import AppBar from '@material-ui/core/AppBar';
import logo from "../references/logo.png";
import Toolbar from '@material-ui/core/Toolbar';
import {Link, BrowserRouter} from 'react-router-dom';
import Login from './Login.js';
import Signup from './Signup.js';
import Logout from './Logout.js';
<<<<<<< HEAD

import { connect } from "react-redux";

const mapStateToProps = ({ session }) => ({
  session
});

class Home extends Component {
  render() {
    const userButtons = () => {
      return (
        <div>
          {this.props.session.userId ? (
            <Logout/>
          ) : (
            <div style = {{display: "flex"}}>
              <Login />
              <Signup />
            </div>
          )}
        </div>
      );
    }

=======


class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoggedIn: true
    };
  }

  handleClick = state => {
    this.setState({
      isLoggedIn: state
    });
  }
  
  render() {
    const userButtons = () => {
      return (
        <div>
          {this.state.isLoggedIn ? (
            <Logout handleClick = {this.handleClick}/>
          ) : (
            <div style = {{display: "flex"}}>
              <Login handleClick = {this.handleClick}/>
              <Signup />
            </div>
          )}
        </div>
      );
    }
    
>>>>>>> 7ea4ea63b4e64dc9ed79c92a8f378bef19423a31
    return (
      <div style={{flexGrow: 1}}>
      <AppBar position="static" style = {{backgroundColor: "#12517A"}} >
        <Toolbar>
          <div class = "Navbar" style = {{width: '100%', display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <div class = "NavButtons">
              <Bttn disableElevation style = {{outline: 'none'}}>
                <BrowserRouter forceRefresh={true}>
                  <Link to="/">
                    <img src={logo} style={{ width: "160px" }} alt = "logo" noWrap/>
                  </Link>
                </BrowserRouter>
              </Bttn>
              <Bttn Button variant="contained" disableElevation style={{
                  color: "white",
                  fontSize: "18px",
                  backgroundColor: "#12517A",
                  outline: 'none'}}>
                <BrowserRouter forceRefresh={true}>
                  <Link to="/components/marketplace/Marketplace" style = {{color: "white", textDecoration: 'none'}}>
                    Marketplace
                  </Link>
                </BrowserRouter>
              </Bttn>
            </div>
            <div>
              {userButtons()}
            </div>
            <ToastsContainer store={ToastsStore} />
          </div>
        </Toolbar>
      </AppBar>
      </div>
    );
  }
}
<<<<<<< HEAD

export default connect(
  mapStateToProps
)(Home);
=======
  export default Home;
>>>>>>> 7ea4ea63b4e64dc9ed79c92a8f378bef19423a31
