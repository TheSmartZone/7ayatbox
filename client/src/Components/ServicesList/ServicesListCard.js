import React from "react";
import { connect } from "react-redux";
import "./ServicesList.css";
import SweetAlert from "react-bootstrap-sweetalert";

class ServicesListCard extends React.Component {
  state = {
    qty: 0,
    result: "",
    show: false
  };

  handleSubmit = () => {
    this.setState({ show: true });
    this.props.incrementCounter();
    this.props.saveResult(this.props.result);
  };

  render() {
    return (
      // eslint-disable-next-line no-lone-blocks
      <div className="col-xl-3 col-lg-4 col-sm-6">
        <div className="card">
          <img
            src={this.props.result.imageUrl}
            className="card-img-top"
            alt=""
          />

          <div className="card-block text-left">
            <h4 className="card-title">{this.props.result.title}</h4>
            <p className="card-text">{this.props.result.description}</p>
            <p className="card-text">{this.props.result.price}</p>
            <div>
              <button onClick={this.handleSubmit} className="cart-cta">
                Add to cart
              </button>
              <SweetAlert
                show={this.state.show}
                success
                title="the service added to your cart"
                onConfirm={() => {
                  this.setState({ show: false });
                }}
                onCancel={() => {
                  this.setState({ show: false });
                }}
                onEscapeKey={() => this.setState({ show: false })}
                onOutsideClick={() => this.setState({ show: false })}
              />
            </div>

            <button
              className="cart-details"
              onClick={() => {
                this.props.handleDetailsClick(this.props.result);
              }}
            >
              Show Details
            </button>
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
    incrementCounter: () => dispatch({ type: "INCREMENT" }),
    saveResult: result => dispatch({ type: "SAVE", value: result })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServicesListCard);
