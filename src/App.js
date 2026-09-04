import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header.jsx' ;
import ExerciseForm from './components/excerciseForm.jsx';
import Results from './components/results.jsx';
import FindExercises from './components/findExercises.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<ExerciseForm />} />
          <Route path="/ExcerciseForm" element={<ExerciseForm />} />
          <Route path="/findExercises" element={<FindExercises />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
