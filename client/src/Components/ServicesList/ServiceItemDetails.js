import React, { Component } from "react";
import { connect } from "react-redux";
import "./Reservation.css";

class ServiceItemDetails extends Component {
  //add to cart
  addToCart = result => {
    this.props.incrementCounter();
    this.props.saveResult(this.props.location.query);
  };

  render() {
    return (
      <div>
        <div className="reservation-background">
          <div className="container-reservation">
            <div className="row title-reservation">
              <div className="col-7">
                <h2>{this.props.location.query.title}</h2>
              </div>
            </div>

            <div className="row">
              <div className="col-6 title-reservation">
                price $<mark>{this.props.location.query.price}</mark>
              </div>
            </div>

            <div className="row">
              <div className="col-6 title-reservation">
                Location <mark>{this.props.location.query.location}</mark>
              </div>
            </div>

            <div className="row">
              <div className="col-6 title-reservation">
                Rate <mark>{this.props.location.query.rate}</mark>
              </div>
            </div>
          </div>
        </div>
        <div className="row description">
          <div className="col-12">{this.props.location.query.description}</div>
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
    incrementCounter: () => dispatch({ type: "INCREMENT" }),
    saveResult: result => dispatch({ type: "SAVE", value: result })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServiceItemDetails);
