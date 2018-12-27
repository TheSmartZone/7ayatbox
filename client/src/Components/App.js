import React, { Component } from "react";
import $ from "jquery";
import Home from "../Components/Home/Home";
import Nav from "../Components/Home/NavBar/Nav";
import Footer from "../Components/Home/Footer/Footer";
import Categories from "../Components/Categories/Categories";
import SignIn from "../Components/SignIn/SignIn";
import Budget from "../Components/Categories/Budget/Budget";
import ViewCategories from "../Components/Categories/ViewCategories/ViewCategories";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "../Components/Categories/Cart/Cart"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  componentDidMount() {
    $.ajax({
      url: "/provider/login",
      type: "POST",
      data: {
        email: "djmartin@gmail.com",
        password: "123456",
        name: "DJMartin"
      },
      success: data => {
        //alert("Hi");
        console.log("success", data);
        this.setState({ text: data.express });
      },
      error: err => {
        console.log("ERROR");
      }
    });
  }
  render() {
    return (
      <div>
        <Nav />

        <BrowserRouter>
          <Switch>
            <Route exact path="/SignIn" component={SignIn} />
            <Route exact path="/" component={Home} />
            <Route exact path="/Categories" component={Categories} />
            <Route exact path="/budget" component={Budget} />
            <Route exact path="/ViewCategories" component={ViewCategories} />
            <Route exact path="/Cart" component={Cart} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
