import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

// eslint-disable-next-line no-unused-vars
const App = () => {
  const [progress, setProgress] = useState(0);
  const apiKey = process.env.REACT_APP_NEWS_API;
  const pageSize = 9;
  return (
    <div>
      <Router>
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <NavBar />
        <Routes>
          <Route
            exact
            path="/business"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="business"
                pageSize={pageSize}
                country="us"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="entertainment"
                pageSize={pageSize}
                country="us"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                country="us"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="health"
                pageSize={pageSize}
                country="us"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="science"
                pageSize={pageSize}
                country="us"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="sports"
                pageSize={pageSize}
                country="us"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="technology"
                pageSize={pageSize}
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
export default App;