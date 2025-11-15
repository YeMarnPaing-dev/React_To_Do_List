import React from 'react'
import Form from './Form'

const List = () => {
  return (
    
    <div>
        <Form/>
       <div className='mt-3'>
         <ol className='list-group'>
            <div className="list-group-item w-75">
               <div className="row">
                 <div className="col">Task Message</div>
                <div className="col">Delete Icon</div>
               </div>
                </div>            
        </ol>
       </div>
      
        </div>
  )
}

export default List