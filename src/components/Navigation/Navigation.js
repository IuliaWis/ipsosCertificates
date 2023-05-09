import React from "react";
import "./Navigation.css";
import Logo from "../Logo/Logo";

const Navigation = ({
  onCoursesClick,
  onTrainersClick,
  onTraineesClick,
  onCertificatesClick,
}) => {
  return (
    <nav className="navbar w-100 border-box" style={{ display: "flex" }}>
      <Logo />
      <div
        className="ma1 pv2 w-90 v-mid"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <p
          onClick={onCoursesClick}
          className="f4 link dim black ph3 pt4 mb0 mt4 pointer"
        >
          Courses
        </p>
        <p
          onClick={onTrainersClick}
          className="f4 link dim black ph3 pt4 mb0 mt4 pointer"
        >
          Trainers
        </p>
        <p
          onClick={onTraineesClick}
          className="f4 link dim black ph3 pt4 mb0 mt4 pointer"
        >
          Trainees
        </p>
        <p
          onClick={onCertificatesClick}
          className="f4 link dim black ph3 pt4 mb0 mt4 pointer"
        >
          Certificates
        </p>
      </div>
    </nav>
  );
};

export default Navigation;
