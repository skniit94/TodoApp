import * as React from "react";
import Task from "./components/task";
import EditableTask from "./components/editableTask";
import "./App.css";
import tasks from "./stores/tasks";
import { observer } from "mobx-react";

export default observer(
  class App extends React.Component<any, any> {
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Todo App</h1>
          </header>
          <input
            id="task"
            type="text"
            className="form-control input"
            placeholder="What needs to be done?"
            aria-label="Search for..."
            onKeyPress={e => tasks.createTask(e)}
          />
          {tasks.List.map(item => {
            if (item.isEditable)
              return (
                <EditableTask
                  task={item}
                  actions={{
                    editUtil: (e: any) => tasks.editUtil(item.id, e),
                    deleteTask: () => tasks.deleteTask(item.id)
                  }}
                />
              );
            else
              return (
                <Task
                  task={item}
                  actions={{
                    editTask: () => tasks.editTask(item.id),
                    deleteTask: () => tasks.deleteTask(item.id)
                  }}
                />
              );
          })}
        </div>
      );
    }
  }
);

// export default App;
