import React, { Component } from "react";
import "./Login.css";
import $ from "jquery";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false, email: "", password: "" };
  }

  handleEmailChange = e => {
    this.setState({
      email: e.target.value
    });
  };
  handlePasswordChange = e => {
    this.setState({
      password: e.target.value
    });
  };
  //send post request for login
  handleLogin = () => {
    console.log(this.state.email, this.state.password);
    $.ajax({
      url: `/${this.props.location.query}/login`,
      type: "POST",
      data: {
        email: this.state.email,
        password: this.state.password
      },
      success: data => {
        this.props.logedin(data);
        if (this.props.location.query === "user") {
          this.props.history.goBack();
        } else {
          this.props.history.push({
            pathname: "/provider",
            query: data.id
          });
          $("#cart-nav").hide();
          $("#nav-service").hide();
        }
      },

      error: err => {
        console.log("UserLogin ERROR", err);
      }
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
                      <h3 className="text-center">SIGN IN</h3>
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
                            onChange={this.handleEmailChange}
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
                            onChange={this.handlePasswordChange}
                          />
                        </div>{" "}
                      </div>

                      <button
                        className="btn btn-lg btn-primary btn-block"
                        onClick={this.handleLogin}
                      >
                        Sign In
                      </button>
                      <Link
                        to={{
                          pathname: "/signup",
                          query: this.props.location.query
                        }}
                      >
                        {" "}
                        <button
                          id="login_register_btn"
                          type="button"
                          className="btn btn-link"
                        >
                          Register
                        </button>{" "}
                      </Link>
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

const mapStateToProps = state => {
  return {
    ctr: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    logedin: user => dispatch({ type: "logedin", value: user })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
