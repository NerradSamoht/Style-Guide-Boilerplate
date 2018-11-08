import React from "react";
import { render } from "react-dom";
// import { Router, Link } from "@reach/router";
import Buttons from "./Base/Buttons";
import Lists from "./Base/Lists";
import Elements from "./Base/Elements";
import Media from "./Base/Media";
import Tables from "./Base/Tables";
import Typography from "./Base/Typography";
import Form from "./Base/Form";
import Colors from "./Base/Colors";
import Navigation from "./Base/Navigation";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="page-container">
        <Navigation />
        <main className="main-content">
          <h1>Style Guide</h1>
          <Colors />
          <hr />
          <Typography />
          <hr />
          <Elements />
          <hr />
          <Buttons />
          <hr />
          <Lists />
          <hr />
          <Form />
          <hr />
          <Tables />
          <hr />
          <Media />
        </main>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
