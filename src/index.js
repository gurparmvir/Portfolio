import React from "react";
import ReactDOM from "react-dom";
//import Bar from "./navbar";

//import Main from "./main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Body from "./body";
import Info from "./info";
import Project from "./project";
import Bar from "./navbar";

ReactDOM.render(
  <div>
    <Bar />
    <Router>
      <Switch>
        <Route exact path="/home" component={Body} />
        <Route path="/about" component={Info} />
        <Route path="/project" component={Project} />
      </Switch>
    </Router>
  </div>,
  document.getElementById("root")
);
