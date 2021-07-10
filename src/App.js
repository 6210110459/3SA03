import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = ["Hello", "NiHao", "Konnichiwa", " Hola", "Aloha"];
const i = Math.floor(Math.random() * word.length);


function App() {
  return (
  <div >
    <WordCard value={word[i]}/>
  </div>
  );
}

export default App;
