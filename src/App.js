import "./App.css";
import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import CertificatesList from "./components/CardLists/CertificatesList";
import CoursesList from "./components/CardLists/CoursesList";
import TrainersList from "./components/CardLists/TrainersList";
import TraineesList from "./components/CardLists/TraineesList";
import ErrorBoundry from "./components/ErrorBoundry/ErrorBoundry";

class App extends Component {
  constructor() {
    super();
    this.state = {
      certif: [],
      certif_clicked: "All Certificates (all.com)",
      certif_select_id: -1,
      courses: [],
      courses_clicked: "All Courses (all.com)",
      courses_select_id: -1,
      trainers: [],
      trainers_clicked: "All Trainers (all.com)",
      trainers_select_id: -1,
      trainees: [],
      trainees_clicked: "All Trainees (all.com)",
      trainees_select_id: -1,
      route: "main",
    };
  }

  onCertifClick = (event) => {
    let de_disp = event.currentTarget.id.split("/");
    this.setState({ certif_clicked: de_disp[0] });
    this.setState({ certif_select_id: de_disp[1] });
  };

  onCourseClick = (event) => {
    let de_disp = event.currentTarget.id.split("/");
    this.setState({ courses_clicked: de_disp[0] });
    this.setState({ courses_select_id: de_disp[1] });
  };

  onTrainerClick = (event) => {
    let de_disp = event.currentTarget.id.split("/");
    this.setState({ trainers_clicked: de_disp[0] });
    this.setState({ trainers_select_id: de_disp[1] });
  };

  onTraineeClick = (event) => {
    let de_disp = event.currentTarget.id.split("/");
    this.setState({ trainees_clicked: de_disp[0] });
    this.setState({ trainees_select_id: de_disp[1] });
  };

  onCoursesClick = () => {
    this.setState({ route: "courses" });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((fakedata) => this.setState({ courses: fakedata }));
  };

  onTrainersClick = () => {
    this.setState({ route: "trainers" });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((fakedata) => this.setState({ trainers: fakedata }));
  };

  onTraineesClick = () => {
    this.setState({ route: "trainees" });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((fakedata) => this.setState({ trainees: fakedata }));
  };

  onCertificatesClick = () => {
    this.setState({ route: "certificates" });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((fakedata) => this.setState({ certif: fakedata }));
  };

  render() {
    const whichCard = () => {
      switch (this.state.route) {
        case "certificates":
          return (
            <CertificatesList
              certif={this.state.certif}
              onClickCertif={this.onCertifClick}
              certifclick={this.state.certif_clicked}
            />
          );
        case "courses":
          return (
            <CoursesList
              courses={this.state.courses}
              onCourseClick={this.onCourseClick}
              courseclick={this.state.courses_clicked}
            />
          );
        case "trainers":
          return (
            <TrainersList
              trainers={this.state.trainers}
              onTrainerClick={this.onTrainerClick}
              trainerclick={this.state.trainers_clicked}
            />
          );
        case "trainees":
          return (
            <TraineesList
              trainees={this.state.trainees}
              onTraineeClick={this.onTraineeClick}
              traineeclick={this.state.trainees_clicked}
            />
          );

        default:
          return <h1>Nothing selected</h1>;
      }
    };
    return (
      <div className="Appx">
        <Navigation
          onCoursesClick={this.onCoursesClick}
          onTrainersClick={this.onTrainersClick}
          onTraineesClick={this.onTraineesClick}
          onCertificatesClick={this.onCertificatesClick}
        />
        <div>
          <div className="pl3 pt3 w-20" style={{ direction: "ltr" }}>
            <ErrorBoundry>{whichCard()}</ErrorBoundry>
          </div>
          <div className="dib w-80"></div>
        </div>
      </div>
    );
  }
}
export default App;
