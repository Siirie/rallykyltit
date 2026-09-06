import { useState, useEffect } from 'react';
import axios from 'axios';
import './exerciseform.css';
import Results from './results.jsx';

const RANDOM_CLASS = 'random-class';

const ExerciseFormWorking = ({ onExercisesSelected }) => {
    const [kyltit, setKyltit] = useState([])
    const [amount, setAmount] = useState('')
    const [luokka, setLuokka] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        axios
            .get('http://localhost:3001/kyltit')
            .then(response => setKyltit(response.data))
            .catch(() => setError('Harjoituksia ei voitu ladata.'))
    }, [])

    const selectExercises = (event) => {
        event.preventDefault()
        const requestedAmount = Number(amount)
        const availableExercises = luokka === RANDOM_CLASS
            ? kyltit.flatMap(item => item.exercises)
            : kyltit.find(item => item.class === luokka)?.exercises || []

        if (availableExercises.length === 0 || !Number.isInteger(requestedAmount) || requestedAmount < 1) {
            setError('Valitse luokka ja anna harjoitusten määräksi vähintään 1.')
            return
        }

        const shuffledExercises = [...availableExercises].sort(() => Math.random() - 0.5)
        onExercisesSelected(shuffledExercises.slice(0, requestedAmount))
        setError('')
    }

    return (
        <div className="exerciseForm">
            <h1>Arvo rally-toko kyltit seuraavaan treeniisi!</h1>
            <form onSubmit={selectExercises}>
            <p className="ingressi">täytä alla olevat valinnat</p>
            <div className="label, input">
                <label className="label">
                    Montako kylttiä?
                    <input className= "inputDropdown"
                        type="number"
                        min="1"
                        value={amount}
                        onChange={event => setAmount(event.target.value)}
                    />
                </label> 
                </div>
                <div className="label, input">
                <label>
                    Luokka
                    
                    <select  value={luokka} onChange={event => setLuokka(event.target.value)}>
                        <option value="">Valitse luokka  </option>
                        
                        {kyltit.map(item => (
                            <option key={item.key} value={item.class}>
                                {item.class}
                            </option>
                        ))}
                        <option value={RANDOM_CLASS}>Kaikki luokat</option>
                    </select>
                    
                </label>
                </div>
                <button type="submit" className="submit-button">Hae</button>
                {error && <p role="alert">{error}</p>}
            </form>
        </div>
    )
}

const ExerciseForm = ({ onExercisesSelected }) => {
      const [selectedExercises, setSelectedExercises] = useState([]);
    return (
            <div className="container">
    <ExerciseFormWorking onExercisesSelected={setSelectedExercises} />
      <Results exercises={selectedExercises} />
    </div>
    )
}
export default ExerciseForm;