import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login, Home } from "./features";
import { PrivateRoute } from "./components/utils";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route
            path="*"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PrivateRoute>
                <Login />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    );
  }
}
