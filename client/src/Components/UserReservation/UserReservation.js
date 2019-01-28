import React, { Component } from "react";
import ListCard from "./ListCard";
import { connect } from "react-redux";
import axios from "axios";
class UserReservation extends Component {
  constructor(props) {
    super(props);
    this.state = { result: [] };
  }
  componentDidMount() {
    this.getAllServices();
  }
  getAllServices = () => {
    axios({
      method: "get",
      url: `/reservation/userReservation?userId=${this.props.user.id}`
    })
      .then(({ data }) => {
        this.setState({ result: data });
      })
      .catch(err => {
        console.log("ERROR");
      });
  };

  render() {
    // eslint-disable-next-line no-lone-blocks
    {
      return (
        <div className="container">
          <h1>My Reservation</h1>
          <hr className="hr-header" />

          {this.state.result.map((result, index) => {
            return <ListCard key={index} result={result} />;
          })}
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(UserReservation);
