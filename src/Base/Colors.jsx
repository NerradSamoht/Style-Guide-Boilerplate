import React from "react";
import { styles } from "../style-guide-propeties";
import { hexToRgbA } from "../js/helper";

class Colors extends React.Component {
  state = {
    primary: styles.Colors.primary,
    secondary: styles.Colors.secondary,
    success: styles.Colors.success,
    warning: styles.Colors.warning,
    danger: styles.Colors.danger,
    info: styles.Colors.info
  };

  render() {
    console.log(styles);

    const { primary, secondary, success, warning, danger, info } = this.state;

    return (
      <section id="colors">
        <h2>Colors</h2>
        <div className="colors">
          <div className="box primary">
            <p>Primary</p>
          </div>

          <div>
            <ul>
              <li>{primary}</li>
              <li>{hexToRgbA(primary)}</li>
            </ul>
          </div>

          <div className="box secondary">
            <p>Secondary</p>
          </div>

          <div>
            <ul>
              <li>{secondary}</li>
              <li>{hexToRgbA(secondary)}</li>
            </ul>
          </div>

          <div className="box success">
            <p>Success</p>
          </div>

          <div>
            <ul>
              <li>{success}</li>
              <li>{hexToRgbA(success)}</li>
            </ul>
          </div>

          <div className="box warning">
            <p>Warning</p>
          </div>

          <div>
            <ul>
              <li>{warning}</li>
              <li>{hexToRgbA(warning)}</li>
            </ul>
          </div>

          <div className="box danger">
            <p>Danger</p>
          </div>

          <div>
            <ul>
              <li>{danger}</li>
              <li>{hexToRgbA(danger)}</li>
            </ul>
          </div>

          <div className="box info">
            <p>Info</p>
          </div>

          <div>
            <ul>
              <li>{info}</li>
              <li>{hexToRgbA(info)}</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Colors;
