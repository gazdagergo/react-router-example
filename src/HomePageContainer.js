import React from "react";
import { withRouter } from "react-router-dom";
import HomePageContent from "./HomePageContent";

class HomePageContainer extends React.Component {
  render() {
    return <HomePageContent content="go to about us" />;
  }
}

export default withRouter(HomePageContainer);
