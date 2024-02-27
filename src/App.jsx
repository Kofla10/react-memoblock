import React, {useState, useEffect} from 'react'

import './App.css'
import { Tablero } from './components/Tablero'

const emojiList = [..."💔😫🙋👨😈👽🫡💋"];

function App() {
  const [memoBlockBarajados, setMemoBlockBarajados] = useState([])

  useEffect(() => {
    const barajadoEmojiList = barajarArray([...emojiList, ...emojiList])
    setMemoBlockBarajados(barajadoEmojiList.map( (emoji, i ) =>({
      index:i,
      emoji,
      flipped: false
    })));
  }, []);


  const barajarArray = (a) =>{

    for(let i = 8; i > 0; i--){
      //usamos math.random para poder usar los numero randos, usamos el floor, por el motivo que nos pueded arrojar numero decimales, utilizando la sintaxis de desestructuración de arrays de JavaScript.
      const j = Math.floor( Math.random() * (i+1));
      [a[i], a[j]] = [a[j], a[i]];

    }

    return a;
  }

  return (
    <>
      <Tablero memoBlocks = {memoBlockBarajados}/>
    </>
  )
}

export default App
