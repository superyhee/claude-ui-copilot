import React, { useState, useEffect } from 'react';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const startEditing = (task) => {
    setEditingTask(task);
  };

  const saveEdit = (id, newText) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: newText } : task
    ));
    setEditingTask(null);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Todo List</h1>
        
        <form onSubmit={addTask} className="mb-6">
          <div className="flex">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Add a new task"
              className="flex-grow px-4 py-2 text-gray-700 bg-gray-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-r-lg hover:bg-blue-600 transition duration-300">
              Add
            </button>
          </div>
        </form>

        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('active')}
            className={`px-4 py-2 rounded ${filter === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Active
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-4 py-2 rounded ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Completed
          </button>
        </div>

        <ul className="space-y-3">
          {filteredTasks.map(task => (
            <li key={task.id} className="flex items-center bg-gray-100 p-3 rounded-lg">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
                className="mr-3 form-checkbox h-5 w-5 text-blue-500"
              />
              {editingTask && editingTask.id === task.id ? (
                <input
                  type="text"
                  value={editingTask.text}
                  onChange={(e) => setEditingTask({...editingTask, text: e.target.value})}
                  onBlur={() => saveEdit(task.id, editingTask.text)}
                  className="flex-grow px-2 py-1 mr-2 text-gray-700 bg-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              ) : (
                <span
                  className={`flex-grow mr-2 ${task.completed ? 'line-through text-gray-500' : 'text-gray-700'}`}
                  onClick={() => startEditing(task)}
                >
                  {task.text}
                </span>
              )}
              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-500 hover:text-red-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;