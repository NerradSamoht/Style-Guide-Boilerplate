import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Button from "./components/Button";

class App extends React.Component {
  render() {
    return (
      <div>
        <Button />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
