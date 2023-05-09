import React from "react";

const CertificateCard = ({ id, name, specific, onClickCertif }) => {
  return (
    <a
      className="f6 tl grow no-underline shadow-5 ba ph3 pv2 bw0 mb2 br-pill dib dark-gray"
      href="#0"
      onClick={onClickCertif}
      id={name + " (" + specific + ")/" + id}
    >
      {name + " (" + specific + ")"}
    </a>
  );
};

export default CertificateCard;
