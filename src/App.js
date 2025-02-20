import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import EditTask from './pages/EditTask';
import { TaskProvider } from './context/TaskContext';

const App = () => {
  return (
    <Router>
      <TaskProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/edit-task/:id" element={<EditTask />} />
        </Routes>
      </TaskProvider>
    </Router>
  );
};

export default App;