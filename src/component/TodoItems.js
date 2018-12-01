import React, { Component } from "react";

class TodoItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textDecorationLine: "none"
    };
    this.default = true;
    this.createTasks = this.createTasks.bind(this);
  }

  AddCrossline() {
    if (this.default !== false) {
      this.setState({ textDecorationLine: "line-through" });
    } else {
      this.setState({ textDecorationLine: "none" });
    }
    this.default = !this.default;
  }

  createTasks(item) {
    console.log(this.state.textDecorationLine);
    return (
      <div key={item.key} className="flex todo-list container">
        <div className="row">
          <div className="col-1 col-xl-1 col-xs-1 checkbox-con">
            <input type="checkbox" onChange={() => this.AddCrossline()} />
          </div>
          <li
            className="col-8 col-xl-8 col-xs-6"
            style={{ textDecorationLine: this.state.textDecorationLine }}
          >
            {item.text}
          </li>

          <div className="col-3 col-xl-3 col-xs-4">
            <button
              className="btn btn-danger deleteBtn"
              onClick={() => this.delete(item.key)}
            >
              delete
            </button>
          </div>
        </div>
      </div>
    );
  }
  delete(key) {
    this.props.delete(key);
  }
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return <ul className="theList">{listItems}</ul>;
  }
}
export default TodoItems;
