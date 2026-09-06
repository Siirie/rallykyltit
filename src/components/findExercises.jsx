import './exerciseform.css';
import { useState, useEffect } from "react";
import Results from './results.jsx';
import axios from "axios";


const FindExercisesWorking = ({ onExercisesSelected }) => {
  const [kyltit, setKyltit] = useState([]);
  const [word, setWord] = useState("");
    const [number, setNumber] = useState("");
  const [wordDescription, setWordDescription] = useState("");
  const [error, setError] = useState("");

      useEffect(() => {
        axios
            .get('http://localhost:3001/kyltit')
            .then(response => setKyltit(response.data))
            .catch(() => setError('Harjoituksia ei voitu ladata.'))
    }, [])
  
    const selectExercisesName = (event) => {
        event.preventDefault()
        const requestedWord = word

        // Check if the word is empty
        if (!requestedWord) {
            setError('Kirjoita hakusana.')
            return
        }
        // Filter exercises based on the word
        const filteredExercises = kyltit.flatMap(item => item.exercises.filter(exercise => exercise.name.toLowerCase().includes(requestedWord.toLowerCase())));
        onExercisesSelected(filteredExercises);
    }
    const selectExercisesDescription = (event) => {
        event.preventDefault()
        const requestedWordDescription = wordDescription

        // Check if the word is empty
        if (!requestedWordDescription) {
            setError('Kirjoita hakusana.')
            return
        }
        // Filter exercises based on the word
        const filteredExercises = kyltit.flatMap(item => item.exercises.filter(exercise => exercise.description.toLowerCase().includes(requestedWordDescription.toLowerCase())));
        onExercisesSelected(filteredExercises);
    }

    const selectExercisesNumber = (event) => {
        event.preventDefault()
        const requestedNumber = number

        // Check if the word is empty
        if (!requestedNumber) {
            setError('Kirjoita kyltin numero.')
            return
        }
        // Filter exercises based on the number
        const filteredExercises = kyltit.flatMap(item => item.exercises.filter(exercise => exercise.nro.toLowerCase().includes(requestedNumber.toLowerCase())));
        onExercisesSelected(filteredExercises);
    }


  return (
    <div className="exerciseForm">
      <h1>Etsi haluamasi kyltti </h1>
        <form onSubmit={selectExercisesName}>
           
            <div className="label, input">
                <label className="label">
                    Vapaa sanahaku kyltin nimestä <br/>
                    <input 
                    className=" inputWords"
                        type="text"
                         placeholder="Kirjoita hakusana" 
                        value={word}
                        onChange={event => setWord(event.target.value)}/>
                </label> <br/>
                            <button type="submit" className="submit-button">Hae</button>
                {error && <p role="alert">{error}</p>}
            </div>

        </form>

        <form onSubmit={selectExercisesDescription}>
          
            <div className="label, input">
                <label className="label">
                    Vapaa sanahaku kyltin ohjeesta <br/>
                    <input 
                    className=" inputWords"
                        type="text"
                         placeholder="Kirjoita hakusana" 
                        value={wordDescription}
                        onChange={event => setWordDescription(event.target.value)}/>
                </label> <br/>
                            <button type="submit" className="submit-button">Hae</button>
                {error && <p role="alert">{error}</p>}
            </div>
        </form>

        <form onSubmit={selectExercisesNumber}>
          
            <div className="label, input">
                <label className="label">
                    Hae kyltin numerolla <br/>
                    <input 
                    className=" inputWords"
                        type="text"
                         placeholder="Kirjoita kyltin numero" 
                        value={number}
                        onChange={event => setNumber(event.target.value)}/>
                </label> <br/>
                            <button type="submit" className="submit-button">Hae</button>
                {error && <p role="alert">{error}</p>}
            </div>
        </form>

    </div>
  );
}

const FindExercises = ({ onExercisesSelected }) => {
      const [selectedExercises, setSelectedExercises] = useState([]);
    return (
            <div className="container">
    <FindExercisesWorking onExercisesSelected={setSelectedExercises} />
      <Results exercises={selectedExercises} />
    </div>
    )
}

export default FindExercises;