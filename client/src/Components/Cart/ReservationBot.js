import ChatBot from "react-simple-chatbot";
import React, { Component } from "react";

class ReservationBot extends Component {
  constructor(props) {
    super(props);
    this.randDate = Math.floor(Math.random() * 30) + 1;
    this.steps = [
      {
        id: "1",
        message: `Greetings ${this.props.userName}!`,
        trigger: "2"
      },
      {
        id: "2",
        message: `Your Total including tax: ${this.props.totalPrice} JOD`,
        trigger: "3"
      },
      {
        id: "3",
        message: "Do you want to reserve now?",
        trigger: "5"
      },
      {
        id: "5",
        options: [
          { value: "yes", label: "yes", trigger: "6" },
          { value: "no", label: "no", trigger: "no" }
        ]
      },
      {
        id: "no",

        message: "Ok have a nice day :)",
        end: true
      },
      {
        id: "6",

        message: "Please choose the month",
        trigger: "7"
      },
      {
        id: "7",
        options: [
          { value: "Jan", label: "Jan", trigger: "8" },
          { value: "Feb", label: "Feb", trigger: "8" },
          { value: "Mar", label: "Mar", trigger: "8" },
          { value: "Apr", label: "Apr", trigger: "8" },
          { value: "may", label: "may", trigger: "8" },
          { value: "Jun", label: "Jun", trigger: "8" },
          { value: "Jul", label: "Jul", trigger: "8" },
          { value: "Aug", label: "Aug", trigger: "8" },
          { value: "Sep", label: "Sep", trigger: "8" },
          { value: "Oct", label: "Oct", trigger: "8" },
          { value: "Nov", label: "Nov", trigger: "8" },
          { value: "Dec", label: "Dec", trigger: "8" }
        ]
      },
      {
        id: "8",
        message: "Do you want the first available day? ",
        trigger: "9"
      },
      {
        id: "9",
        options: [
          { value: "yes", label: "yes", trigger: "10" },
          { value: "no", label: "no", trigger: "11" }
        ]
      },
      {
        id: "10",

        options: [
          {
            value: `${this.randDate}`,
            label: `${this.randDate}`,
            trigger: "13"
          }
        ]
      },
      {
        id: "11",
        message: "Ok key in your preferred day",
        trigger: "12"
      },
      {
        id: "12",
        user: true,
        trigger: "13"
      },
      {
        id: "13",
        message:
          "Ok everything is set do you want to create your wedding card? ",
        trigger: "14"
      },
      {
        id: "14",
        options: [
          { value: "yes", label: "yes", trigger: "15" },
          { value: "no", label: "no", trigger: "19" }
        ]
      },
      {
        id: "15",
        message: "Please type your full name to be displayed on card",
        trigger: "16"
      },
      {
        id: "16",
        user: true,
        trigger: "17"
      },
      {
        id: "17",
        message: "Please type your partner full name to be displayed on card",
        trigger: "18"
      },
      {
        id: "18",
        user: true,
        trigger: "19"
      },
      {
        id: "19",
        message: "Thank you for using Hayat Box Your reservation is confirmed.",
        end: true
      }
    ];
  }
  handleEnd = ({ steps, values }) => {
    var botVal = {
      fullName: values[5],
      partnerName: values[6],
      date: `${values[3]}, ${values[1]} 2019`
    };

    this.props.handleSubmit(botVal);
  };
  getAvailableDates = month => {
    return Math.floor(Math.random() * 30) + 1;
  };

  render() {
    return <ChatBot steps={this.steps} handleEnd={this.handleEnd} />;
  }
}
export default ReservationBot;
