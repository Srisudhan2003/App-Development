import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/HomePage";
import AdminLogin from "./components/AdminLogin";
import About from "./components/About";
import MeditationTimer from "./components/MeditationTimer";
import { Provider } from "react-redux";
import Store from "./components/redux/Store";
import TermsAndConditions from "./components/TermsAndConditions";

const root = document.getElementById("root");

ReactDOM.render(
  <Provider store={Store}>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/meditate" element={<MeditationTimer />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/tac" element={<TermsAndConditions />}></Route>
      </Routes>
    </Router>
  </Provider>,
  root
);
