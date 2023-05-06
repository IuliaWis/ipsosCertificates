import "./App.css";
import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import CertificatesList from "./components/CertificatesList/CertificatesList";
import ErrorBoundry from "./components/ErrorBoundry/ErrorBoundry";

class App extends Component {
  constructor() {
    super();
    this.state = {
      certif: [],
      certif_clicked: "All Certificates (all.com)",
      certif_select_id: -1,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((fakedata) => this.setState({ certif: fakedata }));
  }

  onCertifClick = (event) => {
    let de_disp = event.currentTarget.id.split("/");
    this.setState({ certif_clicked: de_disp[0] });
    this.setState({ certif_select_id: de_disp[1] });
  };

  render() {
    return (
      <div className="Appx">
        <Navigation />
        <div>
          <div
            className="dib w-20"
            style={{
              overflowY: "scroll",
              height: "770px",
              padding: "10px",
              direction: "rtl",
            }}
          >
            <div style={{ direction: "ltr" }}>
              <ErrorBoundry>
                <CertificatesList
                  certif={this.state.certif}
                  onClickCertif={this.onCertifClick}
                  certifclick={this.state.certif_clicked}
                />
              </ErrorBoundry>
            </div>
          </div>

          <div className="dib w-80"></div>
        </div>
      </div>
    );
  }
}
export default App;
