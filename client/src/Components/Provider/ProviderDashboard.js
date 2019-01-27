import React, { Component } from "react";
import axios from "axios";
import "./ProviderDashboard.css";
import { Link } from "react-router-dom";
import { storage } from "../../firebase";
import SweetAlert from "react-bootstrap-sweetalert";
class ProviderDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      providerId: this.props.location.query,
      result: [],
      categoryId: 1,
      description: "",
      imageUrl: "",
      location: "",
      price: "",
      rate: "4.5",
      title: "",
      capicity: "",
      type: "",
      image: {},
      show: false
    };
    this.acceptedFileTypes = "image/x-png, image/png, image/jpg,image.jpeg";
  }

  componentDidMount = () => {
    axios({
      method: "post",
      url: "/provider/getProviderServices",
      data: {
        providerId: this.state.providerId
      }
    })
      .then(({ data }) => {
        this.setState({ result: data });
      })
      .catch(error => {
        console.log("ERROR", error);
      });
  };

  handleSubmitButtonClick = () => {
    this.setState({ show: true });
    //starting put request to firebase storage
    const uploadTask = storage
      .ref(`images/${this.state.image.name}`)
      .put(this.state.image);
    //the on function is event listener that provide 3 functions progress,error,complete
    uploadTask.on(
      "state_changed",
      snapshot => {
        // progress function
      },
      error => {
        // error function
        console.log("errr", error);
      },
      () => {
        // complete function
        storage
          .ref("images")
          .child(this.state.image.name)
          .getDownloadURL()
          .then(url => {
            this.setState({ imageUrl: url });
            this.addServicesHandler();
          });
      }
    );
  };
  //////
  addServicesHandler = () => {
    var obj = {
      providerId: this.state.providerId,
      categoryId: this.state.categoryId,
      description: this.state.description,
      imageUrl: this.state.imageUrl,
      price: this.state.price,
      location: this.state.location,
      rate: this.state.rate,
      title: this.state.title,
      capicity: this.state.capicity
    };
    axios({
      method: "post",
      url: "/provider/addService",
      data: {
        providerId: obj.providerId,
        categoryId: obj.categoryId,
        description: obj.description,
        imageUrl: obj.imageUrl,
        price: obj.price,
        rate: obj.rate,
        title: obj.title,
        capicity: obj.capicity,
        location: obj.location
      }
    })
      .then(({ data }) => {
        this.setState({ text: data.express });
      })
      .catch(err => {
        console.log("ERROR");
      });
  };

  onChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  fileSelectedHandler = event => {
    this.setState({ image: event.target.files[0] });
  };
  render() {
    return (
      <div>
        <div className="container-fluid page-cont">
          <div className="row dash-row">
            <div className="col-4 data-box">
              <div>
                <h3>
                  <Link
                    to={{
                      pathname: "/ProviderServices",
                      query: this.state.result
                    }}
                  >
                    <span>{this.state.result.length}</span>{" "}
                  </Link>
                  Services
                </h3>
              </div>
            </div>

            <div className="col-4 data-box">
              <div>
                <h3>
                  <span>7</span> Reservations
                </h3>
              </div>
            </div>

            <div className="col-4 data-box">
              <div>
                <h3>
                  <span>3500 </span>JD Revenues
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row inputs">
            <div className="col-25">
              <label htmlFor="fname">title</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                onChange={this.onChangeHandler}
                name="title"
                placeholder="Your title.."
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="subject">Image</label>
            </div>
            <div className="col-3 ">
              <div className="uploadImage">
                <input
                  type="file"
                  name="file"
                  id="subject"
                  accept={this.acceptedFileTypes}
                  multiple={false}
                  onChange={this.fileSelectedHandler}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="country">Service</label>
            </div>
            <div className="col-75">
              <select
                name="categoryId"
                value={this.state.value}
                onChange={this.onChangeHandler}
              >
                <option value="1">Halls</option>
                <option value="2">Zafeh</option>
                <option value="3">DJ</option>
                <option value="4">Beauty Center</option>
                <option value="5">Flowers</option>
                <option value="6">Cars</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="subject">Price</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                onChange={this.onChangeHandler}
                name="price"
                placeholder="Your Price"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="subject">Location</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                onChange={this.onChangeHandler}
                name="location"
                placeholder="Your Location"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="subject">Description</label>
            </div>
            <div className="col-75">
              <textarea
                onChange={this.onChangeHandler}
                name="description"
                placeholder="Your description.."
              />
            </div>
          </div>
          <div className="row">
            <div>
              <button
                onClick={this.handleSubmitButtonClick}
                className="cart-cta"
              >
                Add Srevice
              </button>
              <SweetAlert
                show={this.state.show}
                success
                title="your service has been added"
                onConfirm={() => {
                  console.log("confirm");
                  this.setState({ show: false });
                }}
                onCancel={() => {
                  console.log("cancel");
                  this.setState({ show: false });
                }}
                onEscapeKey={() => this.setState({ show: false })}
                onOutsideClick={() => this.setState({ show: false })}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProviderDashboard;
