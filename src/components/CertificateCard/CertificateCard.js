import React from "react";
import "./CertificateCard.css";

const CertificateCard = ({ id, name, specific, onClickCertif }) => {
  return (
    <a
      className="f6 tl grow no-underline br-pill ba ph3 pv2 mb2 dib dark-gray"
      href="#0"
      onClick={onClickCertif}
      id={name + " (" + specific + ")/" + id}
    >
      {name + " (" + specific + ")"}
    </a>
  );
};

export default CertificateCard;
