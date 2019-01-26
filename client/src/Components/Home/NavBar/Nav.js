import React, { Component } from "react";
import "./Nav.css";
import $ from "jquery";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
class Nav extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isLoggedIn: false,
      name: "",
      id: ""
    };
  }

  handleLogout = () => {
    axios.post("/user/logout").then(response => {
      console.log(response.data, response.status);
      if (response.status === 200) {
        this.props.user = null;
      }
    });
  };
  componentDidMount() {
    $(document).ready(function() {
      var sHeight = window.innerHeight;
      var y = $(window).scrollTop();

      //Scroll Effects
      $(window).bind("scroll", function() {
        y = $(window).scrollTop();

        $(".index-header")
          .filter(function() {
            return (
              $(this).offset().top < y + $(window).height() &&
              $(this).offset().top + $(this).height() > y
            );
          })
          .css("background-position", "center " + parseInt(-y / 3) + "px");
        if (y > 20) {
          $(".headerNav-container").css({
            padding: "5px 0px"
          });

          $(".headerNav-container").addClass("nav-changed");
        } else {
          $(".headerNav-container").removeClass("nav-changed");
          $(".headerNav-container").css({
            padding: "20px 0px 20px"
          });
        }
      });
    });
  }

  render() {
    console.log("2", this.props.user);
    return (
      <div>
        <div className="container-fluid headerNav-container">
          <ul>
            <li>
              <div className="navlogo" />
            </li>
            <li>
              <Link
                to={{
                  pathname: "/"
                }}
              >
                Home
              </Link>
            </li>

            <li id="nav-service">
              <a href="#">Services</a>
              <div className="sub-menu-holder">
                <ul>
                  <li>
                    <Link
                      to={{
                        pathname: "/ServicesList",
                        query: "Hall"
                      }}
                    >
                      Wedding Halls
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/ServicesList",
                        query: "Zafeh"
                      }}
                    >
                      Zefah
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/ServicesList",
                        query: "DJ"
                      }}
                    >
                      DJ
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/ServicesList",
                        query: "BeautyCenter"
                      }}
                    >
                      Beauty Centers
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/ServicesList",
                        query: "Flower"
                      }}
                    >
                      Flowers
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      to={{
                        pathname: "/ServicesList",
                        query: "Car"
                      }}
                    >
                      Cars
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li
              id="navProvider"
              style={{
                display: Object.keys(this.props.user).length ? "none" : "block"
              }}
            >
              <Link to={{ pathname: "/login", query: "provider" }}>
                Become a Provider
              </Link>
            </li>

            <li
              className="My-reservation"
              style={{
                display: Object.keys(this.props.user).length ? "block" : "none"
              }}
            >
              <Link to={{ pathname: "/myreservation" }}>Reservations</Link>
            </li>

            <li
              id="navLogin"
              style={{
                display: Object.keys(this.props.user).length ? "none" : "block"
              }}
            >
              <Link to={{ pathname: "/login", query: "user" }}>Login</Link>
            </li>

            <li
              id="cart-nav"
              style={{
                display: Object.keys(this.props.user).length ? "block" : "none"
              }}
            >
              <Link to={{ pathname: "/Cart" }}>
                My Cart <mark>{this.props.counter}</mark>
              </Link>
            </li>

            <li
              className="logout"
              style={{
                display: Object.keys(this.props.user).length ? "block" : "none"
              }}
            >
              <a href="/" onClick={this.handleLogout}>
                Logout
              </a>
            </li>
            <li
              className="logedName"
              style={{
                display: Object.keys(this.props.user).length ? "block" : "none"
              }}
            >
              <a>{this.props.user.name}</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(Nav);
