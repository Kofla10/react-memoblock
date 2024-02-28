import { MemoBlock } from "./MemoBlock"

import '../css/Tablero.css'

export const Tablero = ({memoBlocks, animating, handleMemoClick}) => {

  return (
    <>
      <main className="board">
        {
          memoBlocks.map((item, i) =>{
            return <MemoBlock key={`${i}_${item.emji}`} 
                              memoBlock={ item }
                              animating = {animating}
                              handleMemoClick = {handleMemoClick} 
                   />
          })
        }
      </main>
    </>
  )
}
