import React from "react";
import "./Navigation.css";
import Logo from "../Logo/Logo";

const Navigation = ({ onRouteChanged, isOnRoute }) => {
  return (
    <nav className="navbar w-100" style={{ display: "flex" }}>
      <Logo />
      <div
        className="ma1 pv2 w-90 v-mid"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <p
          onClick={() => onRouteChanged("courses")}
          className="f4 link dim black ph3 pt4 mb0 mt4 pointer"
        >
          Courses
        </p>
        <p
          onClick={() => onRouteChanged("trainers")}
          className="f4 link dim black ph3 pt4 mb0 mt4 pointer"
        >
          Trainers
        </p>
        <p
          onClick={() => onRouteChanged("trainees")}
          className="f4 link dim black ph3 pt4 mb0 mt4 pointer"
        >
          Trainees
        </p>
        <p
          onClick={() => onRouteChanged("certificates")}
          className="f4 link dim black ph3 pt4 mb0 mt4 pointer"
        >
          Certificates
        </p>
      </div>
    </nav>
  );
};

export default Navigation;
