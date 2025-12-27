import { useState } from 'react'
import MainBar from './MainBar'
import Game from './Game'
import AdsComponent from '../AdsComponent'




function App() {
  const [count, setCount] = useState(0)

  const [difficulty, setDifficulty] = useState(3)
  const [color1, setColor1] = useState("#f9ac03ff")
  const [color2, setColor2] = useState("#036cf2ff")

  const [numPlayers, setNumPlayers] = useState(2);


  return (
    <>
      <div className="min-w-[1024px]">
        <AdsComponent dataAdSlot='8634879271' />
        <MainBar difficulty={difficulty} setDifficulty={setDifficulty} color1={color1} setColor1={setColor1} color2={color2} setColor2={setColor2} numPlayers={numPlayers} setNumPlayers={setNumPlayers}></MainBar>
        <div className="pt-[10vmin] h-[calc(100vh-10vmin)] overflow-y-auto">
        <Game difficulty={difficulty} setDifficulty={setDifficulty} color1={color1} setColor1={setColor1} color2={color2} setColor2={setColor2} numPlayers={numPlayers} setNumPlayers={setNumPlayers}></Game>
        </div>

      </div>
    </>
  )
}

export default App
