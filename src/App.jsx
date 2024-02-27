import React, {useState, useEffect} from 'react'

import './App.css'
import { Tablero } from './components/Tablero'

const emojiList = [..."💔😫🙋👨😈👽🫡💋"];

function App() {
  const [memoBlockBarajados, setMemoBlockBarajados] = useState([])
  const [animating, setAnimating] = useState(false)
  const [setselectMemoBlock, setSetselectMemoBlock] = useState(null)
  useEffect(() => {
    const barajadoEmojiList = barajarArray([...emojiList, ...emojiList])
    setMemoBlockBarajados(barajadoEmojiList.map( (emoji, i ) =>({
      index:i,
      emoji,
      flipped: false
    })));
  }, []);


  const barajarArray = (a) =>{
    for(let i = 7; i > 0; i--){
      //usamos math.random para poder usar los numero randos, usamos el floor, por el motivo que nos pueded arrojar numero decimales, utilizando la sintaxis de desestructuración de arrays de JavaScript.
      const j = Math.floor( Math.random() * (i+1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  //creamos la funcion para cuando se presione click en las cartas
  const handleMemoClick = (memoBlock) =>{
    //cuando se presione el clikc, la propiedad cambiar el valor filpped
    const MemoBlockInvertido = {...memoBlock, flipped: true}
    let memobloquesbarajadosCopy = [...memoBlockBarajados]
    
    setMemoBlockBarajados()
  }

  return (
    <>
      <Tablero memoBlocks = {memoBlockBarajados}/>
    </>
  )
}

export default App
