import "./App.css";

import React from "react";
import { Provider, connect } from "react-redux";
import { compose } from "redux";
import { WithRouter } from "./hoc/WithRouter";
import { BrowserRouter } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import HeaderContainer from "./components/Header/HeaderContainer";
import Preloader from "./components/common/Preloader/Preloader";

import store from "./redux/reduxStore";
import { initializeApp } from "./redux/reducers/appReducer";


class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    return (
      this.props.initialized === false
        ? <Preloader />
        : <div className="app-wrapper">
          <HeaderContainer />
          <div className="wrapper">
            <Sidebar />
            <Content />
          </div>
        </div>
    );

  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}
const AppContainer = compose(connect(mapStateToProps, { initializeApp }), WithRouter)(App);

export const SocialNetworkApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
}

