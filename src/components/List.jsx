import React from 'react'
import Form from './Form'

const List = () => {
  return (
    
    <div>
        <Form/>
       <div className='mt-3'>
         <ol className='list-group'>
            <div className="list-group-item w-100 shadow-sm mb-2">
               <div className="row">
                 <div className="col-9 offset-1">To Do List Tasks Message</div>
                <div className="col-2"><i class="fa-solid fa-trash"></i></div>
               </div>
                </div>    

                  <div className="list-group-item w-100 shadow-sm mb-2">
               <div className="row">
                 <div className="col-9 offset-1">To Do List Tasks Message</div>
                <div className="col-2"><i class="fa-solid fa-trash"></i></div>
               </div>
                </div>    

                  <div className="list-group-item w-100 shadow-sm mb-2">
               <div className="row">
                 <div className="col-9 offset-1">To Do List Tasks Message</div>
                <div className="col-2"><i class="fa-solid fa-trash"></i></div>
               </div>
                </div>    

                  <div className="list-group-item w-100 shadow-sm mb-2">
               <div className="row">
                 <div className="col-9 offset-1">To Do List Tasks Message</div>
                <div className="col-2"><i class="fa-solid fa-trash"></i></div>
               </div>
                </div>        
           
        </ol>
       </div>
      
        </div>
  )
}

export default List