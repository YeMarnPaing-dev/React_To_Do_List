import React from 'react'
import Cart from './Cart'


const List = ({tasks}) => {
  return (
    
    <div>
      
       <div className='mt-3'>
         <ol className='list-group'>
           <Cart tasks={tasks}/>
        </ol>
       </div>
      
        </div>
  )
}

export default List