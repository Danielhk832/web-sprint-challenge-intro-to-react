import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import gsap from 'gsap';
import Character from './components/Character'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, getCharacters] = useState([])
  const [films, getFilms] = useState([])
  
  useEffect(() => {
    axios.get('https://swapi.dev/api/people') 
    .then(res => {
      getCharacters(res.data)
      
    })
}, [])
console.log(characters)
  return (
      <div className="App"> 
        <h1 className="Header">Characters</h1>
      { characters.map(ch => {
        return <Character name={ch.name} bday={ch.birth_year} gender={ch.gender} films={ch.films}/>
      })
      }
      </div>
  );
}

export default App;
