import React from 'react'

function Item({ todoDate, todoName }) {
  return (<>
    <div className='mx-4'>
      {todoName}
    </div>
    <div>
      {todoDate}
    </div>
  </>
  )
}

export default Item