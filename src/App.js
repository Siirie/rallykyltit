import './App.css';
import Header from './components/header.jsx' ;
import ExerciseForm from './components/excerciseForm.jsx';
import Results from './components/results.jsx';
import { useState } from 'react';

function App() {
  const [selectedExercises, setSelectedExercises] = useState([]);

  return (
    <div className="App">
      <Header />
      <ExerciseForm onExercisesSelected={setSelectedExercises} />
      <Results exercises={selectedExercises} />
    </div>
  );
}

export default App;
