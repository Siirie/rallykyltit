import './results.css';
const Results = ({ exercises }) => {
    return (
        <div className="results">
            <h2>Tehtävät</h2>
            {exercises.length === 0 ? (
                <p>Käytä hakua nähdäksesi tehtävät</p>
            ) : (
                <ol>
                    {exercises.map(exercise => (
                        <li key={exercise.nro}>
                            <strong>{exercise.nro}: {exercise.name}</strong>
                            <p>{exercise.description}</p>
                        </li>
                    ))}
                </ol>
            )}
        </div>
    )
}

export default Results;