import React from 'react'

const Form = () => {
  return (
  <>
  <h1 className='mt-3 text-white'>React Todo List Project</h1>
    <div className='row mt-5'>
        <div className="col-6 offset-3">
           <input type="text" className='form-control' placeholder='Enter tasks....'/>
        </div>
        <div className="col-3">
            <button className='btn btn-primary '><i class="fa-solid fa-plus"></i>Add Tasks</button>
        </div>
    </div>
  </>
  )
}

export default Form