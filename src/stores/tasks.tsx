import { types } from "mobx-state-tree";

const Task = types
  .model("Task", {
    id: types.number,
    name: types.string,
    isCompleted: false,
    isEditable: false
  })
  .actions(self => ({
    enableEdit() {
      self.isEditable = true;
    },
    changeTask(caption: string) {
      self.name = caption;
      self.isEditable = false;
    }
  }));

const Tasks = types
  .model("Tasks", {
    List: types.array(Task)
  })
  .actions(self => ({
    createTask(event: any) {
      // console.log("event", event.charCode);
      let caption = event.target.value;
      if (event.charCode == 13 && caption != "") {
        let taskObj = Task.create({
          id: Math.floor(Math.random() * 100000 + 1),
          name: caption
        });
        //   console.log("taskObj", taskObj);
        self.List.push(taskObj);
        event.target.value = "";
      }
    },

    deleteTask(id: number) {
      console.log("id", id);
      //   console.log("tasks", self.List);
      let array = self.List;
      let task = array.filter(function(arr) {
        return arr.id == id;
      });
      console.log(task);
      let index = array.indexOf(task[0]);
      if (index > -1) {
        array.splice(index, 1);
      }
      // this.setState({ tasks: array });
    },
    editTask(id: number) {
      console.log("id", id);
      console.log("tasks", self.List);
      let array = self.List;
      let taskObj = array.filter(function(arr) {
        return arr.id == id;
      })[0];
      console.log("taskObj", taskObj);
      taskObj.enableEdit();
    },
    editUtil(id: number, event: any) {
      console.log("editUtil");
      console.log(event.target.value);
      let caption = event.target.value;
      let array = [];
      if (event.charCode == 13 && caption != "") {
        console.log("Enter");
        console.log(caption);
        array = self.List;
        let taskObj = array.filter(function(arr) {
          return arr.id == id;
        })[0];
        taskObj.changeTask(caption);
      }
    }
  }));

// create an instance from a snapshot
const tasks = Tasks.create({
  List: [{ id: 1, name: "task1" }, { id: 2, name: "task2" }]
});

export default tasks;
