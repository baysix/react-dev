import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BaseView from "../common/BaseView";

class Main extends React.PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="*" component={BaseView}></Route>
        </Switch>
      </Router>
    );
  }
}

export default Main;
