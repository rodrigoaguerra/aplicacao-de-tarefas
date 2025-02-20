import React, { useState, useContext, useEffect } from 'react';
import { TaskContext } from '../context/TaskContext';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/TaskStyles.css';

const EditTask = () => {
  const { tasks, editTask } = useContext(TaskContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [taskName, setTaskName] = useState('');

  useEffect(() => {
    const taskToEdit = tasks.find(task => task.id === id);
    if (taskToEdit) {
      setTaskName(taskToEdit.name);
    }
  }, [id, tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      editTask({ id, name: taskName });
      navigate('/');
    }
  };

  return (
    <div className="task-container">
      <h1>Editar Tarefa</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Edite a tarefa"
          className="task-input"
        />
        <button type="submit" className="edit-button">Editar</button>
      </form>
      <button onClick={() => navigate('/')} className="back-button">Voltar</button>
    </div>
  );
};

export default EditTask;
