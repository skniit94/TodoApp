import * as React from "react";
import "../App.css";

class Task extends React.Component<any, any> {
  render() {
    return (
      <div className="task">
        <label>{this.props.task.name}</label>
        <button type="button" onClick={this.props.actions.editTask}>
          Edit
        </button>
        <button type="button" onClick={this.props.actions.deleteTask}>
          &times;
        </button>
      </div>
    );
  }
}
export default Task;
