import React, { Component } from "react";
import "./Home.css";
import "./About/About";
import About from "./About/About";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      budget: "",
      halls: "",
      zafehs: "",
      djs: "",
      beautys: "",
      flowers: "",
      cars: ""
    };
  }

  //Budget modal submit
  submit = e => {
    this.setState({
      budget: e.target.value,
      halls: Math.ceil(e.target.value * 0.76),
      zafehs: Math.ceil(e.target.value * 0.03),
      djs: Math.ceil(e.target.value * 0.03),
      beautys: Math.ceil(e.target.value * 0.1),
      flowers: Math.ceil(e.target.value * 0.05),
      cars: Math.ceil(e.target.value * 0.03)
    });
    console.log(this.state);
  };
  changeHandlerHall = e => {
    this.setState({
      halls: Number(e.target.value)
    });
    console.log("hall", this.state);
  };
  changeHandlerDj = e => {
    this.setState({
      djs: e.target.value
    });
    console.log("dj", this.state);
  };

  changeHandlerZafeh = e => {
    this.setState({
      zafehs: e.target.value
    });
    console.log("zafeh", this.state);
  };

  changeHandlerFlower = e => {
    this.setState({
      flowers: e.target.value
    });
    console.log("flower", this.state);
  };

  changeHandlerCar = e => {
    this.setState({
      cars: e.target.value
    });
    console.log("car", this.state);
  };
  changeHandlerBeauty = e => {
    this.setState({
      beautys: e.target.value
    });
    console.log("b", this.state);
  };

  render() {
    return (
      <div>
        <header className="container-fluid index-header">
          <div className="row title-row">
            <div className="col-12">
              <div className="backgroundImg" />
            </div>
          </div>

          <div className="row header-screen-row">
            <div className="screen-header-controllers">
              <div />
              <div />
              <div />
            </div>

            <div className="col-12 title-row">
              <h1>
                <mark>Create Your Beautiful Wedding </mark>
              </h1>
              <section id="home">
                <div id="textSlider" className="row">
                  <div className="col-xs-12 col-sm-12 col-md-3 col-lg-4 iamCol" />
                  <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8 slideCol">
                    <div className="scroller">
                      <div className="inner">
                        <p>Reserve</p>
                        <p>Plan</p>
                        <p>book</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div className="col-12 button-holder">
                <a
                  href="#"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  Start Now
                </a>
              </div>

              <div
                className="modal fade"
                id="exampleModalCenter"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-header">
                      <h3 className="modal-title" id="exampleModalLongTitle">
                        Insert Your Budget{" "}
                      </h3>
                    </div>
                    <div className="modal-body">
                      <input
                        type="Number"
                        onChange={this.submit}
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="$ 0.000"
                      />
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-target="planmodal"
                        data-dismiss="modal"
                      >
                        Close
                      </button>

                      <button
                        type="button"
                        className="btn btnStart"
                        data-toggle="modal"
                        data-target="#planmodal"
                        data-dismiss="modal"
                      >
                        See your Plane
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="modal fade"
                id="planmodal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-header">
                      <h3 className="modal-title" id="exampleModalLongTitle">
                        Your Plan
                      </h3>
                    </div>
                    <div className="modal-body">
                      <label htmlFor="formGroupExampleInput">
                        Hall Or Hotel Budget{" "}
                      </label>
                      <input
                        type="Number"
                        onChange={this.changeHandlerHall}
                        defaultValue={this.state.halls}
                        className="form-control"
                        id="formGroupExampleInput"
                      />
                      <label htmlFor="formGroupExampleInput">DJ Budget</label>
                      <input
                        type="Number"
                        onChange={this.changeHandlerDj}
                        defaultValue={this.state.djs}
                        className="form-control"
                        id="formGroupExampleInput"
                      />
                      <label htmlFor="formGroupExampleInput">
                        Zafeh Budget{" "}
                      </label>
                      <input
                        type="Number"
                        onChange={this.changeHandlerZafeh}
                        defaultValue={this.state.zafehs}
                        className="form-control"
                        id="formGroupExampleInput"
                      />
                      <label htmlFor="formGroupExampleInput">
                        Beauty Center Budget{" "}
                      </label>
                      <input
                        type="Number"
                        onChange={this.changeHandlerBeauty}
                        defaultValue={this.state.beautys}
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="$ 0.000"
                      />
                      <label htmlFor="formGroupExampleInput">Car Budget</label>
                      <input
                        type="Number"
                        onChange={this.changeHandlerCar}
                        defaultValue={this.state.cars}
                        className="form-control"
                        id="formGroupExampleInput"
                      />
                      <label htmlFor="formGroupExampleInput">
                        Flowers Budget
                      </label>
                      <input
                        type="Number"
                        onChange={this.changeHandlerFlower}
                        defaultValue={this.state.flowers}
                        className="form-control"
                        id="formGroupExampleInput"
                      />
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-target="#exampleModalCenter"
                        data-dismiss="modal"
                        data-toggle="modal"
                      >
                        Back to your budget
                      </button>
                      <Link
                        to={{
                          pathname: "/budgetresult",
                          query: {
                            halls: this.state.halls,
                            djs: this.state.djs,
                            beautys: this.state.beautys,
                            flowers: this.state.flowers,
                            cars: this.state.cars,
                            zafehs: this.state.zafehs
                          }
                        }}
                      >
                        <button type="button" className="btn btnStart">
                          what we recommend{" "}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <About />
      </div>
    );
  }
}
export default Home;
