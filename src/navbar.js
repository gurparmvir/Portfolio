import React, { Component } from "react";
import Pdf from "./Singh_resume.pdf";
import Body from "./body";
import Info from "./info";
import Project from "./project";
import "./file.css";
import { Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Bar extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <ul>
              <li>
                <Nav.Link href="/home">Home</Nav.Link>
              </li>
              <li>
                <Nav.Link href="/about">About</Nav.Link>
              </li>
              <li>
                <Nav.Link href="/project">Project</Nav.Link>
              </li>
              <li>
                <a href={Pdf}>Resume</a>
              </li>
              <li style={{ float: "right", paddingRight: "20px" }}>
                <a href="mailto:gurparmvir@gmail.com">Contact</a>
              </li>
            </ul>
            <Switch>
              <Route exact path="/home" component={Body} />
              <Route path="/about" component={Info} />
              <Route path="/project" component={Project} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default Bar;
