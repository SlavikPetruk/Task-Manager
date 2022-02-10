import { createContext, useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid'
export const TaskListContext = createContext()

const TaskListContextProvider = props => {
    const [editItem, setEditItem] = useState(null)

    const initialState = JSON.parse(localStorage.getItem('tasks')) || []
    const [tasks, setTasks] = useState(initialState)
    useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const addTask = title => setTasks([...tasks, {title,id:uuidv4()}])
    const removeTask = id => setTasks(tasks.filter(task => task.id !== id))
    const clearTasks = () => setTasks([])

    const findList = id => {
        const item = tasks.find(task => task.id === id)
        setEditItem(item)
    }
    const editTask = (title, id) => {
        const newTask = tasks.map(task => ( task.id === id) ? {title,id} : task)
        setTasks(newTask)
        setEditItem(null)
    }
    
    return  (
        <TaskListContext.Provider value={{  tasks,
                                            addTask,
                                            removeTask,
                                            clearTasks,
                                            findList,
                                            editTask,
                                            editItem
                                            }}>
            {props.children}
        </TaskListContext.Provider>)
}

export default TaskListContextProvider