import React, { Component } from "react";
import ServicesListCard from "./ServicesListCard";
import "./ServicesList.css";
import axios from "axios";
import { connect } from "react-redux";
import ListCard from "../UserReservation/ListCard";
import ServiceItemDetails from "./ServiceItemDetails";
import Modal from "react-responsive-modal";
class ServicesList extends Component {
  constructor(props) {
    super(props);
    this.state = { result: [], openModal: false, selectedService: {} };
  }
  componentDidUpdate(prevProps) {
    //update UI based on the selected category from the drop down menu
    if (prevProps.location.query !== this.props.location.query) {
      this.getAllServices();
    }
    if (!this.props.location.query) {
      this.getAllServices();
    }
  }
  componentDidMount() {
    this.getAllServices();
  }
  getAllServices = () => {
    axios({
      method: "get",
      url: `/services/${this.props.location.query || "Hall"}`
    })
      .then(({ data }) => {
        this.setState({ result: data });
      })
      .catch(err => {
        console.log("ServiceList ERROR", err);
      });
  };
  handleDetailsClick = service => {
    console.log("SERVICE", service);
    this.setState({ selectedService: service });
    this.onOpenModal();
  };
  onOpenModal = () => {
    this.setState({ openModal: true });
  };

  onCloseModal = () => {
    this.setState({ openModal: false });
  };
  render() {
    return (
      <div className="container">
        <h1>{this.props.location.query}</h1>
        <hr className="hr-header" />
        <div className="row">
          {this.state.result.map((result, index) => {
            return Object.keys(this.props.user).length > 0 ? (
              <ServicesListCard
                key={index}
                result={result}
                handleDetailsClick={this.handleDetailsClick}
              />
            ) : (
              <ListCard key={index} result={result} />
            );
          })}
        </div>
        <Modal open={this.state.openModal} onClose={this.onCloseModal} center>
          <ServiceItemDetails service={this.state.selectedService} />
        </Modal>
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
