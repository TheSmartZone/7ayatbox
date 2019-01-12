import React, { Component } from "react";
import "./Cart.css";
import $ from "jquery";
import { connect } from "react-redux";
import ReservationBot from "../Categories/Reservation/ReservationBot";
import ListCard from "../UserReservation/ListCard";
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: this.props.result2,
      userID: this.props.user.id,
      show: false,
      displayBot: false
    };
  }

  displayBot = () => {
    this.setState({ displayBot: true });
  };
  componentDidMount() {
    console.log("USER", this.props.user.name);
    setTimeout(() => {
      this.displayBot();
    }, 1000);
  }
  //send post request for saving reservations
  handleSubmit = userValues => {
    this.props.cardReservation(userValues);
    $.ajax({
      url: "/reservation/addReservation",
      type: "POST",
      data: {
        cartDetails: this.props.result2,
        userID: this.state.userID,
        providerID: this.props.result2[0].providerID
      },
      success: data => {
        console.log("success", data);
        setTimeout(() => {
          this.props.resetCounter();
          this.props.history.push("/cardsTemplates");
        }, 2500);
      },
      error: err => {
        console.log("ERROR");
      }
    });
  };
  //calculating the total price for cart
  total = () => {
    var total = 0;
    var results = this.props.result2;
    for (var i = 0; i < results.length; i++) {
      total = total + results[i].price;
    }
    return total;
  };

  render() {
    let mystyle = {
      borderTop: "1px solid #ddd",
      marginTop: "10px"
    };
    console.log(this.props.result2.length);
    return this.props.result2.length === 0 ? (
      <div className="container">
        <h3 className="cartH3">
          {" "}
          Nothing in your cart go to services to add more.
        </h3>
      </div>
    ) : (
      <div>
        <div className="container">
          <div className="row">
            {this.props.result2.map((result, index) => {
              return <ListCard result={result} />;
            })}
          </div>

          <button className="open-button" onClick={this.displayBot}>
            C
          </button>
          {this.state.displayBot ? (
            <div className="chat-popup">
              <ReservationBot
                userName={this.props.user.name}
                totalPrice={this.total() * 0.15 + this.total()}
                handleSubmit={this.handleSubmit}
              />
            </div>
          ) : (
            ""
          )}
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
const mapDispatchToProps = dispatch => {
  return {
    resetCounter: () => dispatch({ type: "RESET" }),
    cardReservation: reservation =>
      dispatch({ type: "cardReservation", value: reservation })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
