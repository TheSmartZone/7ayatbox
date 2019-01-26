import React, { Component } from "react";
import Home from "../Components/Home/Home";
import Nav from "../Components/Home/NavBar/Nav";
import Reservation from "../Components/Categories/Reservation/Reservation.js";
import ServicesList from "../Components/ServicesList/ServicesList";
import BudgetResult from "../Components/Categories/BudgetResult/BudgetResult";
import Provider from "../Components/Provider/Provider";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "../Components/Cart/Cart";
import ContactUs from "../Components/ContactUs/ContactUs";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import weddingCard from "./weddingCard/weddingCard";
import cardsTemplates from "./weddingCard/cardsTemplates";
import ProviderServices from "./Provider/ProviderServices/ProviderServices";
import axios from "axios";
import UserReservation from "./UserReservation/UserReservation";
import { connect } from "react-redux";
class App extends Component {
  constructor() {
    super();
    this.state = { render: false };
  }
  componentWillMount() {
    this.getUser();
  }
  getUser = () => {
    axios.get("/user/").then(response => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");
        this.props.loggedIn(response.data.user);
      } else {
        console.log("Get user: no user");
      }
      this.setState({ render: true });
    });
  };
  render() {
    return this.state.render ? (
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/Provider" component={Provider} />
            <Route exact path="/" component={Home} />
            <Route exact path="/Reservation" component={Reservation} />
            <Route exact path="/budgetresult" component={BudgetResult} />
            <Route exact path="/ServicesList" component={ServicesList} />
            <Route exact path="/Cart" component={Cart} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/ContactUs" component={ContactUs} />
            <Route exact path="/weddingCard" component={weddingCard} />
            <Route exact path="/cardsTemplates" component={cardsTemplates} />
            <Route
              exact
              path="/ProviderServices"
              component={ProviderServices}
            />
            <Route exact path="/myreservation" component={UserReservation} />
          </Switch>
        </div>
      </BrowserRouter>
    ) : (
      <div />
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
    loggedIn: user => dispatch({ type: "loggedIn", value: user })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
