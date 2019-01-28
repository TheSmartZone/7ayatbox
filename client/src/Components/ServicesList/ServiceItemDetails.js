import React, { Component } from "react";
import { connect } from "react-redux";
import "./ServiceItemDetails.css";
import StarRatings from "react-star-ratings";
class ServiceItemDetails extends Component {
  //add to cart
  addToCart = result => {
    this.props.incrementCounter();
    this.props.saveResult(this.props.service);
  };

  render() {
    console.log(this.props.service);
    return (
      <div>
        <img src={this.props.service.imageUrl} className="service-img" alt="" />

        <div className="row service-modal">
          <div className="col-md-8">
            <h2 className="serviceTitle ">{this.props.service.title}</h2>
            <h4>price $ {this.props.service.price}</h4>
          </div>
          <div className="col-md-4">
            <div className="ratingService">
              <StarRatings
                rating={this.props.service.rate}
                starRatedColor="rgb(153, 17, 69)"
                numberOfStars={5}
                name="rating"
                starDimension="30px"
                starSpacing="5px"
              />
              <h4 className="service-h4">
                Location {this.props.service.location}
              </h4>
            </div>
          </div>
        </div>

        <div className="serviceDescription ">
          {this.props.service.description}
        </div>
        <button onClick={this.addToCart} className="addToCartService">
          Add To Cart
        </button>
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
