import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './header.css';

 function Navbar() {
  return (
    <nav className='Navbar'>
    <Link to="/ExcerciseForm"  onMouseEnter={(e) => {e.target.style.color = 'lightgray';}} onMouseLeave={(e) => {e.target.style.color = 'white';}}>Arvo kyltit</Link>
      <Link to="/findExercises"  onMouseEnter={(e) => {e.target.style.color = 'lightgray';}} onMouseLeave={(e) => {e.target.style.color = 'white';}}>Hae tehtäviä</Link>
    </nav>
  );
}

const Header=() =>{
    return (
        <div>

      <div className="Navbar">
        <Navbar />
      </div>

</div>
    )}
export default Header;