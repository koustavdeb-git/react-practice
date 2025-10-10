
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import Button from './components/Button/Button.jsx';
import StartGame from './components/StartGame.jsx';
import { useState } from 'react'
import GamePlay from './components/GamePlay.jsx';

function App() {

  const [isGameStarted, setisGameStarted] = useState(false);


  const toggleGamePlay = () => {
    setisGameStarted((prev)=> !prev)
    console.log(isGameStarted);
    
  }

  // let content;

  // if(isGameStarted) {
  //   content = <GamePlay/>
  // } else {
  //   content = <StartGame toggle={toggleGamePlay}/>
  // }

  return (
    <>
      {isGameStarted ? <GamePlay/> : <StartGame toggle={toggleGamePlay}/>}
          
    </>
  )
}

export default App
