import React, { useState } from 'react';
import './Task.css';
import Header from './header.jsx';
import LeftNav from './LeftNav.jsx';

const TaskBuilder = () => {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState([]);

  // Add a new task
  const addTask = () => {
    if (taskText.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTaskText(''); // Clear input
    } else {
      alert("Please enter a task.");
    }
  };

  // Handle Enter key press to add task
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  // Toggle task completion status
  const toggleCompletion = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        if (!task.completed) {
          alert("Hurray! You have completed your task.");
        }
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <>
      <Header />
      <div className='grid'>
        <div><LeftNav /></div>
        <div className="task-builder">
          <h1>Task Builder</h1>
          <div className="input2">
            <input
              className='text'
              type="text"
              placeholder="Enter a new task"
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
          <button id="addtask" onClick={addTask}>Add Task</button>

          <ul>
            {tasks.map(task => (
              <li key={task.id} className={`task-item ${task.completed ? 'completed-task' : ''}`}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleCompletion(task.id)}
                />
                <span>{task.text}</span>
                <button className="btn1" onClick={() => deleteTask(task.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TaskBuilder;
