import React from 'react'

const Form = () => {
  return (
  <>
    <div className='row mt-5'>
        <div className="col">
           <input type="text" className='form-control' placeholder='Enter tasks....'/>
        </div>
        <div className="col">
            <button className='btn btn-primary '>Add Tasks</button>
        </div>
    </div>
  </>
  )
}

export default Form