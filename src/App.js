import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = ["Hello", "NiHao", "Konnichiwa", " Hola", "Aloha"];
const i = Math.floor(Math.random() * word.length);


function App() {
  return (
  <div>
    <center> <img src="https://s.isanook.com/jo/0/rp/rc/w300h300/ya0xa0m1w0/aHR0cDovL2ltYWdlLmpvb3guY29tL0pPT1hjb3Zlci8wLzBjMTVjMmVlMjNlZmEzNTIvMTAwMC5qcGc=.jpg" widht="100px" height="100px"/> </center>
    <WordCard value={word[i]}/>
  </div>
  );
}

export default App;
