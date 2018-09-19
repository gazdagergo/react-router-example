import React from "react";
import { Link } from "react-router-dom";

export default class HomePageContent extends React.Component {
  render() {
    return <Link to="/aboutus">{this.props.content}</Link>;
  }
}
