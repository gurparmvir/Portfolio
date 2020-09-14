import React, { Component } from "react";
import "./info.css";
import pic from "./pic.png";
class Info extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={pic} alt="" className="pic1" />
        </div>
        <h1 className="me">About Me </h1>
        <p className="aboutme">
          I am a recent graduate from the Univeristy of Maryland, Baltimore
          County passionate for front-end web developing with 1 year of
          experience using HTML5, CSS and JavaScript in order to build all
          aspects of the user experience and user interface.
        </p>
      </div>
    );
  }
}
export default Info;
