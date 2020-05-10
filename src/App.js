import React, { Component } from "react";
import image from "./assets/logo512.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import Typed from "typed.js";

import $ from "jquery";
import { SecondStrings, InitialStrings } from "./components/Strings";
import { Colors } from "./constants/Colors";

class App extends Component {
  componentDidMount() {
    const loveContainer = $(".box-container");
    const loveBox = $(".love-box");
    const letterBox = $(".second-container");

    loveBox.on("click", function () {
      loveContainer
        .addClass("active")
        .delay(1000)
        .queue(function () {
          letterBox
            .addClass("active")
            .delay(1000)
            .queue(function () {
              $("#second-typed").addClass("active");
              new Typed("#second-typed", {
                stringsElement: "#second-strings",
                typeSpeed: 100,
                cursorChar: "|",
              });
            });
        });
    });

    new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 50,
    });
  }

  render() {
    return (
      <div className="container px-3">
        <BoxContainer />
        <SecondContainer />
      </div>
    );
  }
}

const BoxContainer = () => (
  <div className="box-container">
    <div className="text-center">
      <InitialStrings id="typed-strings" />
      <span
        className="text-center"
        style={{
          textAlign: "center",
          marginBottom: 30,
          fontWeight: "bold",
          color: Colors.dark,
          fontSize: 25,
          marginTop: -25,
        }}
        id="typed"
      ></span>
      <div className="love-box text-center">
        <img className="img-flud" width="200" src={image} alt="love" />
      </div>
    </div>
  </div>
);

const SecondContainer = () => (
  <div className="second-container d-flex justify-content-center align-items-center">
    <div>
      <SecondStrings id="second-strings" />
      <span style={{ color: "#fff", fontSize: 50 }} id="second-typed"></span>
    </div>
  </div>
);

export default App;
