import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Container from './components/container';
import Programs from './components/Programs';
import ExerciseDetail from './components/ExerciseDetail';
import Wnp from './components/Wnp';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Container />} />
      <Route path="/exercise/:name" element={<ExerciseDetail />} />
      <Route path="/w" element={<Wnp />} />
      </Routes>
      </Router>
  );
}

export default App;

