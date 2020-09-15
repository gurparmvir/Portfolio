import React, { Component } from "react";
import Bar from "./navbar";
import Body from "./body";
import Info from "./info";
import Project from "./project";
class Main extends Component {
  render() {
    return (
      <div>
        <Bar />
        <Info />
        <Project />
      </div>
    );
  }
}

export default Main;
