import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import * as emailjs from "emailjs-com";
import Dialog from '@material-ui/core/Dialog';
import { ToastsContainer, ToastsStore } from "react-toasts";
import { MDBBtn } from "mdbreact";
import Bttn from '@material-ui/core/Button';
import "../App.css";

import { connect } from "react-redux";
import { login } from "../actions/session";


const mapStateToProps = ({ errors }) => ({
  errors
});
const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

const Login = ({ errors, login , props}) => {
  const [isLogin, setLogin] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [params, setParams] = React.useState({
    email: null, password: null
  });

  const handleSubmit = event => {
    event.preventDefault();
    props.handleClick(true);
    const user = {
      email: params.email,
      password: params.password,
    };
    login(user);
  };

  const handleClickOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };

  const handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;

    setParams({
      ...params, [name]: value}
    )

    const logErrors = ({errors, [name]: value}) => {
      console.log(errors)
    }
}

  const onChange1 = (e) => {
    [e.target.name] = e.target.value
  }


  const refreshPage = () => {
    window.location.reload(false);
  }

    return (
        <div class = "Login">
            <Form>
            <Bttn Button variant="contained" disableElevation style={{
                        color: "white",
                        fontSize: "18px",
                        backgroundColor: "#12517A",
                        outline: 'none'}}
                        onClick={handleClickOpen}>
                <a
                >
                    Login
                </a>
            </Bttn>
                  <Dialog
                    style={{ zIndex: 50000 }}
                    open={open}
                    onClose={handleClose}
                  >
                    <Form
                      id= "login"
                      className="button"
                      style={{ padding: "20px" }}
                      onSubmit={handleSubmit}
                    >
                      <Form.Group controlId="Header" className="space">
                        <h1 style={{ textAlign: "center" }}>Login</h1>
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{ fontSize: 18 }}>
                          Email address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          value={params.email}
                          name="email"
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{ fontSize: 18 }}>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          value={params.password}
                          name="password"
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Button
                        className="space"
                        block
                        style={{ float: "right" }}
                        variant="secondary"
                        type="Button"
                        onClick={handleSubmit}
                      >
                        Login
                      </Button>

                      <a
                        className="already"
                        show={isLogin}
                      >
                        Create an account
                      </a>
                    </Form>
                  </Dialog>
            </Form>
            <ToastsContainer store={ToastsStore} />
        </div>
    );
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);