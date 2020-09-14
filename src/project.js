import React, { Component } from "react";
import "./project.css";
import layout from "./layout.png";
import robot from "./robot.png";
class Project extends Component {
  render() {
    return (
      <div>
        <div className="dt mw6 center pt0 pb5 pv5-m pv6-ns">
          <div className="db dtc-ns v-mid-ns">
            <img src={layout} alt="" className="w-100 mw7 w5-ns" />
          </div>
          <div className="db dtc-ns v-mid ph2 pr0-ns pl3-ns">
            <p className="lh-copy">Simple Layout using flexbox.</p>
            <a className="live" href="https://gurparmvir.github.io/Layout/">
              See Live
            </a>
          </div>
        </div>
        <div className="dt mw6 center pt0 pb5 pv5-m pv6-ns">
          <div className="db dtc-ns v-mid-ns">
            <img src={robot} alt="" className="w-100 mw7 w5-ns" />
          </div>
          <div className="db dtc-nb v-mid ph2 pr0-ns pl3-ns">
            <p className="lh-copy">App using React</p>
            <a href="https://gurparmvir.github.io/robofriends/">See Live</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
