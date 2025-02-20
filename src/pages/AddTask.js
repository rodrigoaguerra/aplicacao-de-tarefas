import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
  const [taskName, setTaskName] = useState('');
  const { addTask } = useContext(TaskContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      addTask({ id: uuidv4(), name: taskName });
      navigate('/');
    }
  };

  return (
    <div className="task-container">
      <h1>Adicionar Tarefa</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Digite a tarefa"
          className="task-input"
        />
        <button type="submit" className="add-button">Adicionar</button>
      </form>
      <button onClick={() => navigate('/')} className="back-button">Voltar</button>
    </div>
  );
};

export default AddTask;