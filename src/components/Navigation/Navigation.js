import React from "react";
import "./Navigation.css";
import Logo from "../Logo/Logo";

const Navigation = () => {
  return (
    <nav className="navbar w-100" style={{ display: "flex" }}>
      <Logo />
      <div className="f3 ma1 pa2 tr w-90">
        <p>Ipsos Certificates</p>
      </div>
    </nav>
  );
};

export default Navigation;
