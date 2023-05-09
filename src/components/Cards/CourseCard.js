import React from "react";

const CourseCard = ({ id, name, specific, onCourseClick }) => {
  return (
    <a
      className="f6 tl grow no-underline br-pill shadow-5 ba ph3 pv2 mb2 bw0 dib dark-gray"
      href="#0"
      onClick={onCourseClick}
      id={name + " (" + specific + ")/" + id}
    >
      {name + " (" + specific + ")"}
    </a>
  );
};

export default CourseCard;
