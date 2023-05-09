import React from "react";
import TrainerCard from "../Cards/TrainerCard";

const TrainersList = ({ trainers, onTrainerClick, trainerclick }) => {
  return (
    <div className="flex flex-column">
      <a
        className="f6 tr no-underline grow ba ph3 pv2 mb2 dib bw0 br-pill bg-dark-green white shadow-5"
        href="#0"
      >
        {trainerclick}
      </a>
      <TrainerCard
        key={-1}
        id={-1}
        name={"All Trainers"}
        specific={"all.com"}
        onTrainerClick={onTrainerClick}
      />
      {trainers.map((cer, i) => {
        return (
          <TrainerCard
            key={trainers[i].id}
            id={trainers[i].id}
            name={trainers[i].name}
            specific={trainers[i].website}
            onTrainerClick={onTrainerClick}
          />
        );
      })}
    </div>
  );
};

export default TrainersList;
