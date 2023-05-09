import React from "react";
import CertificateCard from "../Cards/CertificateCard";

const CertificatesList = ({ certif, onClickCertif, certifclick }) => {
  return (
    <div className="flex flex-column">
      <a
        className="f6 tr no-underline grow ba ph3 pv2 mb2 dib bw0 br-pill bg-dark-red white shadow-5"
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
