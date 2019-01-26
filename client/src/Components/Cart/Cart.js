import React, { Component } from "react";
import "./Cart.css";
import { connect } from "react-redux";
import ReservationBot from "./ReservationBot";
import ListCard from "../UserReservation/ListCard";
import axios from "axios";
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: this.props.cartItems,
      userID: this.props.user.id,
      show: false,
      displayBot: false
    };
  }
  displayBot = () => {
    this.setState({ displayBot: true });
  };
  componentDidMount() {
    setTimeout(() => {
      this.displayBot();
    }, 1000);
  }
  //send post request for saving reservations
  handleSubmit = userValues => {
    this.props.cardReservation(userValues);
    axios({
      method: "post",
      url: "/reservation/addReservation",
      data: {
        cartDetails: this.props.cartItems,
        userID: this.state.userID,
        providerID: this.props.cartItems[0].providerID
      }
    })
      .then(response => {
        setTimeout(() => {
          this.props.resetCounter();
          this.props.history.push("/cardsTemplates");
        }, 2500);
      })
      .catch(error => {
        console.log("addReservation ERROR", error);
      });
  };
  //calculating the total price for cart
  total = () => {
    var total = 0;
    var results = this.props.cartItems;
    for (var i = 0; i < results.length; i++) {
      total = total + results[i].price;
    }
    return total;
  };

  render() {
    return this.props.cartItems.length === 0 ? (
      <div className="container">
        <h3 className="cartH3">
          Nothing in your cart go to services to add more.
        </h3>
      </div>
    ) : (
      <div>
        <div className="container">
          <div className="row">
            {this.props.cartItems.map((result, index) => {
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
