import { useContext } from "react";
import { TaskListContext } from "./TaskListContext";

const Task = ({task}) => {
    const {removeTask, findList} = useContext(TaskListContext)

  return (
      <li className="list-item">
          <span>{task.title}</span>
          <div>
              <button onClick={() => removeTask(task.id)} className="btn-delete task-btn">
                  <i className="fas fa-trash-alt"></i>
              </button>
              <button onClick={() => findList(task.id)} className="btn-edit task-btn">
                  <i className="fas fa-pen"></i>
              </button>
          </div>
      </li>
  )
};

export default Task;
