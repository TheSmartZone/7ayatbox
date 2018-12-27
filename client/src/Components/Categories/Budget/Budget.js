import React, { Component } from "react";
import "./Budget.css";
import { Link } from "react-router-dom";
class Budget extends Component {
  constructor(props) {
    super(props);

    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Your Budget : " + this.state.value);
    event.preventDefault();
  }
  // state = {
  //     value: {
  //         hall: '',
  //         car: '',
  //         dj: '',
  //         zafeh: '',
  //         flower: '',
  //         beautySalon: ''

  //     },
  //     totalBudget: ''
  // }

  // handleChange = this.handleChange.bind(this);
  // handleSubmit = this.handleSubmit.bind(this);
  // handleChange(event) {
  //     this.setState({
  //         value: {
  //             hall: event.target.value * 0.4,
  //             car: event.target.value * 0.3,
  //             dj: event.target.value * 0.03,
  //             zafeh: event.target.value * 0.2,
  //             flower: event.target.value * 0.06,
  //             beautySalon: event.target.value * 0.1
  //         }
  //     })
  // }

  // handleSubmit(event) {
  //     alert('BUDGET : ' + this.state.value);
  //     event.preventDefault();
  // }

  render() {
    return (
      <div>
        <h1>Helllo From Budget</h1>
        <br />
        <div className="bugetForm">
          <div className="totalBudget">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group ">
                <label htmlFor="formGroupExampleInput">
                  <h2>
                    <strong> Total Budget</strong>
                  </h2>
                </label>
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="$ 0.000"
                />
                <br/>
                <div>
                  {/* Button trigger modal */}
                  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                    Plan Details
              </button>
                  {/* Modal */}
                  <div className="modal fade" id="exampleModalLong" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1 className="modal-title planDetails" id="exampleModalLongTitle">Your Plan Details</h1>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <div className="planDetails">
                            <div className="formm">
                              <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                  <label htmlFor="formGroupExampleInput2">Hall Budget</label>
                                  <input
                                    type="text"
                                    value={"$ " + this.state.value * 0.4}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    id="formGroupExampleInput2"
                                    placeholder="$ 0.000"
                                  />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="formGroupExampleInput">Zafeh Budget </label>
                                  <input
                                    type="text"
                                    value={"$ " + this.state.value * 0.3}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    id="formGroupExampleInput"
                                    placeholder="$ 0.000"
                                  />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="formGroupExampleInput2">Car Budget</label>
                                  <input
                                    type="text"
                                    value={"$ " + this.state.value * 0.2}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    id="formGroupExampleInput2"
                                    placeholder="$ 0.000"
                                  />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="formGroupExampleInput2">Flower Budget</label>
                                  <input
                                    type="text"
                                    value={"$ " + this.state.value * 0.04}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    id="formGroupExampleInput2"
                                    placeholder="$ 0.000"
                                  />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="formGroupExampleInput2">DJ Budget</label>
                                  <input
                                    type="text"
                                    value={"$ " + this.state.value * 0.02}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    id="formGroupExampleInput2"
                                    placeholder="$ 0.000"
                                  />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="formGroupExampleInput2">
                                    Beauty Salon Budget
                                  </label>
                                  <input
                                    type="text"
                                    value={"$ " + this.state.value * 0.04}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    id="formGroupExampleInput2"
                                    placeholder="$ 0.000"
                                  />
                                </div>
                                <Link
                                  to={{
                                    pathname: "/budgetresult",
                                    query: this.state.value
                                  }}
                                >
                                <div className="modal-footer">
                                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary" >See Your Options</button>
                                </div>
                                </Link>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Budget;
