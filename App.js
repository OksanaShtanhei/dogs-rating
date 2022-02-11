import React, { useEffect, useState } from 'react';
import Imgs from './Imgs';
import Rating from './Rating'
import './App.css';

function App() {
  const [randomOne, setRandomOne] = useState()
  const [randomTwo, setRandomTwo] = useState()
  const [breed, setBreed] = useState([])
  const [rating, setRating] = useState([])
  const [counter, setCounter] = useState({})
  
  const regexp = /\/+/g

  const getRandom = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(data => data.json())
        .then(data => setRandomOne(data.message)) 
    fetch('https://dog.ceo/api/breeds/image/random')
         .then(data => data.json())
         .then(data => setRandomTwo(data.message))
  }

  useEffect(() => {
    getRandom() 
  }, [])
  useEffect(() => {
    if(randomOne && randomTwo){
      setBreed([randomOne.split(regexp)[3], randomTwo.split(regexp)[3]])
    }
  }, [randomOne, randomTwo])

  const count = (arr) => {
    return arr.reduce((acc, value) => {
      return acc[value] ? acc[value]++ : acc[value] = 1, acc;
    }, {});
  }

   const handleRating = (e) => {
    let current = e.target.textContent
    setRating([... rating,  current])
    getRandom()
   }

   useEffect(() => {
    setCounter(count(rating))
   }, [rating])

  return (
    <div className="App">
      <header className="App-header">
        <h3>Choose a breed</h3>
      </header>
      <div className="container">
          <Imgs random={randomOne} 
               breed={breed[0]}
               handleRating={handleRating} />
          <Imgs random={randomTwo}
               breed={breed[1]}
               handleRating={handleRating} /> 
          <Rating counter={counter} />
      </div> 
    </div>
  );
}

export default App;
