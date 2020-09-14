import React, { Component } from "react";
import Particles from "react-particles-js";
import Bar from "./navbar";
import Body from "./body";
import Project from "./project";
import Info from "./info";

const particles = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5,
      },
    },
  },
};
class Main extends Component {
  render() {
    return (
      <div>
        <Particles params={particles} />
        <Bar />
        <Body />
        <Project />
        <Info />
      </div>
    );
  }
}
export default Main;
