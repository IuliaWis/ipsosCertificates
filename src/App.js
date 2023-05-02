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
      certif_clicked: "All Certificates (***)",
      certif_select_id: -1,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((albumes) => this.setState({ certif: albumes }));
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
          <div className="pa2 ma1 br1 bw1 dib w-100 shadow-5 select1">
            {this.state.certif_clicked}
          </div>

          <div
            className="dib w-20"
            style={{
              overflowY: "scroll",
              height: "770px",
              padding: "5px",
              direction: "rtl",
            }}
          >
            <div style={{ direction: "ltr" }}>
              <ErrorBoundry>
                <CertificatesList
                  certif={this.state.certif}
                  onClickCertif={this.onCertifClick}
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
