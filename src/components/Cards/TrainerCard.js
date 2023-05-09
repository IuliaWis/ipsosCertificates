import React from "react";

const TrainerCard = ({ id, name, specific, onTrainerClick }) => {
  return (
    <a
      className="f6 tl grow no-underline br-pill shadow-5 ba ph3 pv2 mb2 bw0 dib dark-gray"
      href="#0"
      onClick={onTrainerClick}
      id={name + " (" + specific + ")/" + id}
    >
      {name + " (" + specific + ")"}
    </a>
  );
};

export default TrainerCard;
