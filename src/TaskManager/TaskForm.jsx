import { useContext, useEffect, useState } from "react";
import { TaskListContext } from "./TaskListContext";

const TaskForm = () => {
    const {addTask, clearTasks, editItem, editTask} = useContext(TaskListContext)

    const [title, setTitle] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if (!editItem ) {
            addTask(title)
            setTitle("")
        } else {
            editTask(title,editItem.id)
        }
    }
    const handleChange = e => setTitle(e.target.value)

    useEffect(() => {
        if (editItem) {
            setTitle(editItem.title)
        } else {
            setTitle('')
        }
    },[editItem])

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Add Task..."
        value={title}
        onChange={handleChange}
        required
        className="task-input"
      />
        <div className="buttons">
            <button className="btn ">
                {editItem ? 'Edit Task' : 'Add Task'}
            </button>
            <button onClick={clearTasks} className="btn ">
                Clear
            </button>
        </div>
  </form>
  )
};

export default TaskForm;
