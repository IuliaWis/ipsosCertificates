import React from "react";
import CourseCard from "../Cards/CourseCard";

const CoursesList = ({ courses, onCourseClick, courseclick }) => {
  return (
    <div className="flex flex-column">
      <a
        className="f6 tr no-underline grow ba ph3 pv2 mb2 dib bw0 br-pill bg-dark-blue white shadow-5"
        href="#0"
      >
        {courseclick}
      </a>
      <CourseCard
        key={-1}
        id={-1}
        name={"All Courses"}
        specific={"all.com"}
        onCourseClick={onCourseClick}
      />
      {courses.map((cer, i) => {
        return (
          <CourseCard
            key={courses[i].id}
            id={courses[i].id}
            name={courses[i].name}
            specific={courses[i].website}
            onCourseClick={onCourseClick}
          />
        );
      })}
    </div>
  );
};

export default CoursesList;
