import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import * as emailjs from "emailjs-com";
import Dialog from '@material-ui/core/Dialog';
import { ToastsContainer, ToastsStore } from "react-toasts";
import { MDBBtn } from "mdbreact";
import Bttn from '@material-ui/core/Button';
import "../App.css";

import { connect } from "react-redux";
import { signup } from "../actions/session";


const mapStateToProps = ({ errors }) => ({
  errors
});
const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))
});

const Signup = ({ errors, signup }) => {
  const [isLogin] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [isError, setError] = React.useState(false);
  const [params, setParams] = React.useState({
    email: null, password: null, firstName: null, lastName: null, contactNumber: null
  });

  const handleSubmit = event => {
    event.preventDefault();
    const user = {
      email: params.email,
      password: params.password,
      firstName: params.firstName,
      lastName: params.lastName,
      contactNumber: params.contactNumber
    };
    signup(user).then(res => {
      if (res.type === "RECEIVE_CURRENT_USER") {
        const templateId = "template_FNZvTKs9";
        const templateParams = {
          email: params.email,
          firstName: params.firstName
        }
        sendFeedback(templateId, templateParams);
      }
      else {
        setError(true);
      }
    });
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

    const logErrors = ({params, [name]: value}) => {
      console.log(params)
    }
}

  const onChange1 = (e) => {
    [e.target.name] = e.target.value
  }


  const refreshPage = () => {
    window.location.reload(false);
  }

  const sendFeedback = (templateId, variables) => {
    emailjs.send(
      "gmail",
      templateId,
      variables,
      "user_wzos8lPUKwPXPkAOaRTiX"
    ).then(res => {
    	console.log('Email successfully sent!')
  	})
    .catch(err => console.error('Email failed to send!', err),
    //resetForm()
    );
  }

    return (
        <div class = "Signup">
          <Form>
            <Bttn Button variant="contained" disableElevation style={{
                        color: "white",
                        fontSize: "18px",
                        backgroundColor: "#12517A",
                        outline: 'none'}}
                        onClick={handleClickOpen}>
                <a
                >
                    Sign Up
                </a>
            </Bttn>

            <Dialog
              style={{ zIndex: 50000 }}
              open={open}
              onClose={handleClose}
            >
              <Form
                  id="signup"
                  className="button"
                  style={{ padding: "20px" }}
                  onSubmit={handleSubmit}
              >
                  <Form.Group controlId="Header" className="space">
                    <h1 style={{ textAlign: "center" }}>Sign Up</h1>
                  </Form.Group>

                  <Form.Group className="error">
                    {isError && <p style=
                      {{textAlign: "center",
                        color: "#ed4337",
                        fontSize: "0.9rem",
                        fontStyle: "oblique"}}>
                        There is an error: {errors}
                    </p>}
                  </Form.Group>

                  <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label style={{ fontSize: 18 }}>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={params.email}
                        name="email"
                        id="email"
                        onChange={handleChange}
                      />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label style={{ fontSize: 18 }}>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={params.password}
                        name="password"
                        onChange={handleChange}
                        />
                  </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="formGridFirstName">
                  <Form.Label style={{ fontSize: 18 }}>First Name</Form.Label>
                  <Form.Control
                      placeholder="Jane"
                      value={params.firstName}
                      name="firstName"
                      id="firstName"
                      //onChange={onChange1}
                      onChange={handleChange}
                  />
                  </Form.Group>

                  <Form.Group controlId="formGridLastName">
                  <Form.Label style={{ fontSize: 18 }}>Last Name</Form.Label>
                  <Form.Control
                      placeholder="Doe"
                      value={params.lastName}
                      name="lastName"
                      onChange={handleChange}
                  />
                  </Form.Group>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridContact">
                      <Form.Label style={{ fontSize: 18 }}>
                        Phone Number
                      </Form.Label>
                      <Form.Control
                        value={params.contactNumber}
                        name="contactNumber"
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Form.Row>
                  <div class="form-group">
                  <label className="font">Sign up as:</label>
                  <select class="form-control">
                      <option selected>Select vendor or user</option>
                      <option>Vendor</option>
                      <option>User</option>
                  </select>
                  </div>

                  <Button
                    className="space"
                    block
                    style={{ float: "right" }}
                    variant="secondary"
                    type="Button"
                    onClick={handleSubmit}
                  >
                    Signup
                  </Button>

                  <div className="already">
                    <a show={isLogin}>
                        I already have an account
                    </a>
                  </div>
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
)(Signup);