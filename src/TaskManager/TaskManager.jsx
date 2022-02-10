import React from 'react';
import './TaskManager.css'
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const TaskManager = () => {
  return (
        <div className="main">
            <h1>Task Manedger</h1>
            <TaskForm/>
            <TaskList value='task'/> 
        </div>
    )
};

export default TaskManager;

