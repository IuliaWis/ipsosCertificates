import React from "react";
import CertificateCard from "../CertificateCard/CertificateCard";

const CertificatesList = ({ certif, onClickCertif, certifclick }) => {
  return (
    <div className="flex flex-column">
      <a
        className="f6 tr no-underline br-pill ba ph3 pv2 mb2 dib dark-blue"
        href="#0"
      >
        {certifclick}
      </a>
      <CertificateCard
        key={-1}
        id={-1}
        name={"All Certificates"}
        specific={"all.com"}
        onClickCertif={onClickCertif}
      />
      {certif.map((cer, i) => {
        return (
          <CertificateCard
            key={certif[i].id}
            id={certif[i].id}
            name={certif[i].name}
            specific={certif[i].website}
            onClickCertif={onClickCertif}
          />
        );
      })}
    </div>
  );
};

export default CertificatesList;
