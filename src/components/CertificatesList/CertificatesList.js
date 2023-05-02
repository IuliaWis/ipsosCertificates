import React from "react";
import CertificateCard from "../CertificateCard/CertificateCard";

const CertificatesList = ({ certif, onClickCertif }) => {
  return (
    <div className="flex flex-column">
      <CertificateCard
        key={-1}
        id={-1}
        name={"All Certificates"}
        specific={"-1"}
        onClickCertif={onClickCertif}
      />
      {certif.map((cer, i) => {
        return (
          <CertificateCard
            key={certif[i].id}
            id={certif[i].id}
            name={certif[i].title}
            specific={certif[i].userId}
            onClickCertif={onClickCertif}
          />
        );
      })}
    </div>
  );
};

export default CertificatesList;
