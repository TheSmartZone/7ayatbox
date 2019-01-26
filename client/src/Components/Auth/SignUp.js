import React, { Component } from "react";
import "./Login.css";
import axios from "axios";
export default class UserSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false, name: "", email: "", password: "" };
  }

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSignUp = () => {
    axios({
      method: "post",
      url: `/${this.props.location.query}/signUp`,
      data: {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      }
    })
      .then(response => {
        this.props.history.push("/login");
      })
      .catch(error => {
        console.log("UserSignup ERROR", error);
      });
  };

  render() {
    return (
      <div className="login">
        <div className="container ">
          <div>
            <div id="fullscreen_bg" className="fullscreen_bg" />
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-md-offset-4">
                  <div className="panel panel-default">
                    <div className="panel-body">
                      <h3 className="text-center">SIGN UP</h3>
                      <div className="form-group">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <span className="glyphicon glyphicon-user" />
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            id="txt_name"
                            name="name"
                            onChange={this.onChangeHandler}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <span className="glyphicon glyphicon-envelope" />
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Email Address"
                            id="txt_email"
                            name="email"
                            onChange={this.onChangeHandler}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <span className="glyphicon glyphicon-lock" />
                          </span>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            id="txt_password"
                            name="password"
                            onChange={this.onChangeHandler}
                          />
                        </div>
                      </div>

                      <button
                        className="btn btn-lg btn-primary btn-block"
                        onClick={this.handleSignUp}
                      >
                        Create Account
                      </button>

                      <div className="header" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
