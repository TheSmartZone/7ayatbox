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
import AboutUs from "./AboutUs/ِAboutUs";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import weddingCard from "./weddingCard/weddingCard"
import cardsTemplates from "./weddingCard/cardsTemplates"
import ProviderServices from "./Provider/ProviderServices/ProviderServices";

import UserReservation from "./UserReservation/UserReservation";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  componentDidMount() {}
  render() {
    return (
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
            <Route exact path="/AboutUs" component={AboutUs} />
            <Route exact path="/weddingCard" component={weddingCard} />
            <Route exact path="/cardsTemplates" component={cardsTemplates} />
            <Route
              exact
              path="/ProviderServices"
              component={ProviderServices}
            />
            <Route exact path="/myreservation" component={UserReservation} />
          </Switch>

          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
