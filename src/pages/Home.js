import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { tasks, removeTask } = useContext(TaskContext);
  const navigate = useNavigate();

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.name}
            <button onClick={() => navigate(`/edit-task/${task.id}`)} className='edit-button'>Editar</button>
            <button onClick={() => removeTask(task.id)} className='delete-button'>Excluir</button>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate('/add-task')} className='add-button'>Adicionar Tarefa</button>
    </div>
  );
};

export default Home;