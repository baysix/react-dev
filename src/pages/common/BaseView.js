import React from "react";
import { connect } from "react-redux";
import { Router, Switch, Route, Link, Redirect } from "react-router-dom";

class BaseView extends React.PureComponent {
  render() {
    return (
      <>
        <h1>테스트중입니다.</h1>
      </>
    );
  }
}

export default BaseView;
