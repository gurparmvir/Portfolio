import React, { Component } from "react";
import Bar from "./navbar";
import Body from "./body";
import Project from "./project";
class Main extends Component {
  render() {
    return (
      <div>
        <Bar />
        <Body />
        <Project />
      </div>
    );
  }
}

export default Main;
