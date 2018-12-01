import React, { Component } from "react";
import TimerApp from "./TimerApp";

import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="container footer">
        <div className="row buttons">
          <button
            onClick={this.props.ToDoPage}
            className="col-xs-5 col-5 btn button-one"
          >
            Todo List
          </button>
          <button
            onClick={this.props.TimerPageBtn}
            className="col-xs-5 col-5 btn"
          >
            Stopwatch
          </button>
        </div>
      </div>
    );
  }
}
export default Footer;
