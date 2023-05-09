import React from "react";
import TraineeCard from "../Cards/TraineeCard";

const TraineesList = ({ trainees, onTraineeClick, traineeclick }) => {
  return (
    <div className="flex flex-column">
      <a
        className="f6 tr no-underline grow ba ph3 pv2 mb2 dib bw0 br-pill bg-purple white shadow-5"
        href="#0"
      >
        {traineeclick}
      </a>
      <TraineeCard
        key={-1}
        id={-1}
        name={"All Trainees"}
        specific={"all.com"}
        onTraineeClick={onTraineeClick}
      />
      {trainees.map((cer, i) => {
        return (
          <TraineeCard
            key={trainees[i].id}
            id={trainees[i].id}
            name={trainees[i].name}
            specific={trainees[i].website}
            onTraineeClick={onTraineeClick}
          />
        );
      })}
    </div>
  );
};

export default TraineesList;
