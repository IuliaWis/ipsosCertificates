import React from "react";

const TraineeCard = ({ id, name, specific, onTraineeClick }) => {
  return (
    <a
      className="f6 tl grow no-underline br-pill shadow-5 ba ph3 pv2 mb2 bw0 dib dark-gray"
      href="#0"
      onClick={onTraineeClick}
      id={name + " (" + specific + ")/" + id}
    >
      {name + " (" + specific + ")"}
    </a>
  );
};

export default TraineeCard;
