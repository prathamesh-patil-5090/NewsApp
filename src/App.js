import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  state = {
    progress: 0
  };
  setProgress = (progress) => {
    this.setState({ progress });
  }
  pageSize = 9;
  render() {
    return (
      <div>
        <Router>
          <LoadingBar
          height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          <NavBar />
          <Routes>
            <Route
              exact
              path="/business"
              element={
                <News setProgress={this.setProgress}
                  key="business"
                  pageSize={this.state.pageSize}
                  country="us"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress={this.setProgress}
                  key="entertainment"
                  pageSize="this.state.pageSize"
                  country="us"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/"
              element={
                <News setProgress={this.setProgress}
                  key="general"
                  pageSize="this.state.pageSize"
                  country="us"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News setProgress={this.setProgress}
                  key="health"
                  pageSize="this.state.pageSize"
                  country="us"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News setProgress={this.setProgress}
                  key="science"
                  pageSize="this.state.pageSize"
                  country="us"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News setProgress={this.setProgress}
                  key="sports"
                  pageSize="this.state.pageSize"
                  country="us"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News setProgress={this.setProgress}
                  key="technology"
                  pageSize="this.state.pageSize"
                  country="us"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
