import React from 'react'

const Cart = ({tasks, deleteTask}) => {
    

    
  return (
    <div>
        {
            tasks.map((task)=>(
                 <div key={task.id} className="list-group-item w-100 shadow-sm mb-2">
               <div className="row">
                 <div className="col-9 offset-1">{task.task}</div>
                <div className="col-2"><i onClick={()=> deleteTask(task.id)} className="fa-solid fa-trash"></i></div>
               </div>
                </div>    
            ))
        }
    </div>
  )
}

export default Cart