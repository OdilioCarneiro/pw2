import React, { useState } from 'react';
import './App.css'; 

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const newTask = {
      id: Date.now(),
      text: input,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setInput('');
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const removeTask = (id) => {
    const remainingTasks = tasks.filter((task) => task.id !== id);
    setTasks(remainingTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'pending') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="todo-container">
      <h2 className="todo-title">lista de tarefas</h2>

      <form className="todo-form" onSubmit={handleAddTask}>
        <input 
          type="text" 
          className="todo-input"
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="O que você precisa fazer?"
        />
        <button type="submit" className="btn-add">
          Adicionar
        </button>
      </form>

      <div className="filter-container">
        <button 
          className={`btn-filter ${filter === 'all' ? 'active' : ''}`} 
          onClick={() => setFilter('all')}
        >
          Todas
        </button>
        <button 
          className={`btn-filter ${filter === 'pending' ? 'active' : ''}`} 
          onClick={() => setFilter('pending')}
        >
          Pendentes
        </button>
        <button 
          className={`btn-filter ${filter === 'completed' ? 'active' : ''}`} 
          onClick={() => setFilter('completed')}
        >
          Concluidas
        </button>
      </div>

      <ul className="todo-list">
        {filteredTasks.map((task) => (
          <li 
            key={task.id} 
            className={`todo-item ${task.completed ? 'completed' : ''}`}
          >
            <input 
              type="checkbox" 
              className="todo-checkbox"
              checked={task.completed} 
              onChange={() => toggleTask(task.id)} 
            />
            
            <span className={`todo-text ${task.completed ? 'completed-text' : ''}`}>
              {task.text}
            </span>

            <button className="btn-delete" onClick={() => removeTask(task.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>

      {filteredTasks.length === 0 && (
        <p className="empty-message">Nenhuma tarefa ainda</p>
      )}
      
      <h1 className="todo-credits">atividade feita por Odílio Carneiro</h1>
    </div>
  );
}

export default TodoList;