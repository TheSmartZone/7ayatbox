import React, { Component } from "react";
import "../ServicesList/ServicesList.css";
import ServicesListCard from "../ServicesList/ServicesListCard";
import axios from "axios";
class BudgetResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      halls: [],
      zafehs: [],
      djs: [],
      beautys: [],
      flowers: [],
      cars: []
    };
  }
  componentDidMount() {
    axios({
      method: "post",
      url: "/services/Recommendation",
      data: {
        hallPrice: this.props.location.query.halls,
        zafehPrice: this.props.location.query.zafehs,
        djPrice: this.props.location.query.djs,
        beautyCentersPrice: this.props.location.query.beautys,
        flowersPrice: this.props.location.query.flowers,
        carsPrice: this.props.location.query.cars
      }
    })
      .then(({ data }) => {
        this.filterCategoryHandler(data);
      })
      .catch(error => {
        console.log("Recommendation ERROR", error);
      });
  }
  //format the results in arrays to be displayed under corresponding sections in UI
  filterCategoryHandler = data => {
    var arrHall = [];
    var arrDJ = [];
    var arrZafeh = [];
    var arrBuity = [];
    var arrFlower = [];
    var arrCar = [];
    data.forEach(result => {
      if (result.category === "Hall") {
        arrHall.push(result);
      } else if (result.category === "DJ") {
        arrDJ.push(result);
      } else if (result.category === "Zafeh") {
        arrZafeh.push(result);
      } else if (result.category === "Car") {
        arrCar.push(result);
      } else if (result.category === "BeautyCenter") {
        arrBuity.push(result);
      } else if (result.category === "Flower") {
        arrFlower.push(result);
      }
    });
    this.setState({
      halls: arrHall,
      djs: arrDJ,
      zafehs: arrZafeh,
      beautys: arrBuity,
      flowers: arrFlower,
      cars: arrCar
    });
  };
  render() {
    return (
      <div className="container">
        <h1>Recommended Hall's</h1>
        <hr className="hr-header" />
        <div className="row">
          {this.state.halls.map((result, index) => {
            return <ServicesListCard key={index} result={result} />;
          })}
        </div>
        <h1>Recommended DJ</h1>
        <hr className="hr-header" />
        <div className="row">
          {this.state.djs.map((result, index) => {
            return <ServicesListCard key={index} result={result} />;
          })}
        </div>
        <h1>Recommended Zafeh</h1>
        <hr className="hr-header" />
        <div className="row">
          {this.state.zafehs.map((result, index) => {
            return <ServicesListCard key={index} result={result} />;
          })}
        </div>
        <h1>Recommended Beauty Centers</h1>
        <hr className="hr-header" />
        <div className="row">
          {this.state.beautys.map((result, index) => {
            return <ServicesListCard key={index} result={result} />;
          })}
        </div>
        <h1>Recommended Flowers</h1>
        <hr className="hr-header" />
        <div className="row">
          {this.state.flowers.map((result, index) => {
            return <ServicesListCard key={index} result={result} />;
          })}
        </div>
        <h1>Recommended Cars</h1>
        <hr className="hr-header" />
        <div className="row">
          {this.state.cars.map((result, index) => {
            return <ServicesListCard key={index} result={result} />;
          })}
        </div>
      </div>
    );
  }
}

export default BudgetResult;
