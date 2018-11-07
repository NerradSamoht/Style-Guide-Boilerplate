import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Buttons from "./Base/Buttons";
import Lists from "./Base/Lists";
import Elements from "./Base/Elements";
import Media from "./Base/Media";
import Tables from "./Base/Tables";
import Typography from "./Base/Typography";
import Form from "./Base/Form";
import Colors from "./Base/Colors";

class App extends React.Component {
  render() {
    return (
      <div>
        <Buttons />
        <Lists />
        <Elements />
        <Media />
        <Tables />
        <Typography />
        <Form />
        <Colors />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
