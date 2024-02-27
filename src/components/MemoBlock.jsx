import React from 'react'
import '../css/MemoBlock.css'

export const MemoBlock = ({memoBlock}) => {

  console.log(memoBlock)
  return (
    <>
      <div className="memo-block">
        <div>
          <div className='memo-block-fromt'>
         </div>
          <div className='memo-block-back'>
            {memoBlock.emoji}
         </div>
        </div>
      </div>
    </>
  )
}
