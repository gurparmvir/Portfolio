import React, { Component } from "react";
import "./file.css";
import "./info.css";
import pic from "./pic.png";
class Body extends Component {
  render() {
    return (
      <div>
        <h1>Hello, I am Gurparmvir Singh </h1>
        <h2 className="line">I am a web developer</h2>
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
        <p className="aboutme">
          {" "}
          SKILLS: HTML5, CSS3, JavaScript, Python, C++, Java, C, ReactJS,
          NodeJS, SQL, PostgreSQL, AWS Lambda, AWS DynamoDB
        </p>
      </div>
    );
  }
}

export default Body;
