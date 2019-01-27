import React, { Component } from "react";
import ServicesListCard from "./ServicesListCard";
import "./ServicesList.css";
import axios from "axios";
import { connect } from "react-redux";
import ListCard from "../UserReservation/ListCard";
class ServicesList extends Component {
  constructor(props) {
    super(props);
    this.state = { result: [] };
  }
  componentDidUpdate(prevProps) {
    //update UI based on the selected category from the drop down menu
    if (prevProps.location.query !== this.props.location.query) {
      this.getAllServices();
    }
  }
  componentDidMount() {
    this.getAllServices();
  }
  getAllServices = () => {
    axios({
      method: "get",
      url: `/services/${this.props.location.query}`
    })
      .then(({ data }) => {
        this.setState({ result: data });
      })
      .catch(err => {
        console.log("ServiceList ERROR", err);
      });
  };
  render() {
    return (
      <div className="container">
        <h1>{this.props.location.query}</h1>
        <hr className="hr-header" />
        <div className="row">
          {this.state.result.map((result, index) => {
            return Object.keys(this.props.user).length > 0 ? (
              <ServicesListCard key={index} result={result} />
            ) : (
              <ListCard key={index} result={result} />
            );
          })}
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

export default connect(mapStateToProps)(ServicesList);
