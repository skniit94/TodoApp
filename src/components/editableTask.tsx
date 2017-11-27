import * as React from "react";

class EditableTask extends React.Component<any, any> {
  render() {
    return (
      <div className="task">
        <input
          type="text"
          placeholder={this.props.task.name}
          onKeyPress={this.props.actions.editUtil}
        />
        <button type="button" onClick={this.props.actions.deleteTask}>
          &times;
        </button>
      </div>
    );
  }
}
export default EditableTask;
