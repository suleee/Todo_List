import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router";

import TodoList from "./component/TodoList";
import Footer from "./component/Footer";
import TimerApp from "./component/TimerApp";

import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "todo"
    };
  }
  showTimer() {
    this.setState({ view: "timer" });
  }
  showTodo() {
    this.setState({ view: "todo" });
  }
  render() {
    return (
      <div>
        <h1>Daily Fitness Helper</h1>
        <div className="row">
          <div className="col-12">
            {this.state.view === "todo" ? <TodoList /> : <TimerApp />}
          </div>
          <div className="col-12 footer-con">
            <Footer
              TimerPageBtn={() => this.showTimer()}
              ToDoPage={() => this.showTodo()}
            />
          </div>
        </div>
      </div>
    );
  }
}

var destination = document.querySelector("#main-container");
ReactDOM.render(<App />, destination);
