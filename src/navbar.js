import React, { Component } from "react";
import Pdf from "./Singh_resume.pdf";
import "./file.css";

class Bar extends Component {
  render() {
    return (
      <div className="navmenu">
        <div className="navlink">
          <ul>
            <li>
              <a href={Pdf}>Resume</a>
            </li>
            <li>
              <a href="mailto:gurparmvir@gmail.com">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Bar;
