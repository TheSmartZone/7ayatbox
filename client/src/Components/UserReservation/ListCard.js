import React from "react";

class ListCard extends React.Component {
  state = {
    result: ""
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
          </div>
        </div>
      </div>
    );
  }
}

export default ListCard;
