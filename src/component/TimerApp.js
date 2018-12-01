import React, { Component } from "react";
import "./TimerApp.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleReset = this.handleReset.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
    this.state = {
      number: 0,
      button: "Stop"
    };
  }

  //Start the stopwatch automatically when the browser opens the app
  componentDidMount() {
    const timer = setInterval(() => {
      this.setState({
        number: this.state.number + 1
      });
    }, 1000);
    this.setState({ timer: timer });
  }

  //main function to start and stop the Stopwatch
  handleStatus() {
    // if button === 'stop', stop the watch
    if (this.state.button === "Stop") {
      this.setState({
        button: "Start"
      });
      clearInterval(this.state.timer);
    } else {
      //if button === 'Start', start the watch and change the button to 'Stop'
      const timer = setInterval(() => {
        this.setState({
          number: this.state.number + 1
        });
      }, 1000);
      this.setState({
        button: "Stop"
      });
      this.setState({
        timer: timer
      });
    }
  }

  //reset the watch to 0 and stop the watch
  handleReset() {
    this.setState({
      number: 0,
      button: "Start"
    });
    clearInterval(this.state.timer);
  }

  render() {
    return (
      <div className="App center">
        <h4>Stopwatch</h4>
        <div className="row">
          <div className="col-12">
            <h2>Timer: {this.state.number} s</h2>
          </div>
          <div className="col-12 button-box">
            <button className="btn btn-primary" onClick={this.handleStatus}>
              {this.state.button}
            </button>
            <button className="btn btn-primary" onClick={this.handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
