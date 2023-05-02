import React from "react";
import "./CertificateCard.css";

const CertificateCard = ({ id, name, specific, onClickCertif }) => {
  return (
    <div
      className="tl cardback dib pa1 ma1 br1 bw1 grow shadow-5 pointer flex flex-wrap"
      onClick={onClickCertif}
      id={name + " (" + specific + ")/" + id}
    >
      <h4 className="ma1" id={name}>
        {name}
      </h4>
      <p className="ma1" id={name}>
        ({specific})
      </p>
    </div>
  );
};

export default CertificateCard;
