import { MemoBlock } from "./MemoBlock"

import '../css/Tablero.css'

export const Tablero = ({memoBlocks}) => {

  return (
    <>
      <main className="board">
        {
          memoBlocks.map((item, i) =>{
            return <MemoBlock key={`${i}_${item.emji}`} memoBlock={ item }/>
          })
        }
      </main>
    </>
  )
}
