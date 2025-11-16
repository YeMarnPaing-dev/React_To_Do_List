import React from 'react'

const Cart = ({tasks}) => {
    
    
    
  return (
    <div>
        {
            tasks.map((tasks,index)=>(
                 <div key={index} className="list-group-item w-100 shadow-sm mb-2">
               <div className="row">
                 <div className="col-9 offset-1">{tasks.task}</div>
                <div className="col-2"><i className="fa-solid fa-trash"></i></div>
               </div>
                </div>    
            ))
        }
    </div>
  )
}

export default Cart