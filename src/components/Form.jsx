import React, { useState } from 'react';

const Form = ({ submitTask }) => {
  const [userTask, setTask] = useState('');

  const formSubmitHandling = ()=> {
   submitTask(userTask)
   setTask('')
  }

  return (
    <>
      <h1 className='mt-3 text-white'>React Todo List Project</h1>
      <div className='row mt-5'>
        <div className="col-6 offset-3">
          <input
            value={userTask}
            onChange={(e) => setTask(e.target.value)}
            type="text"
            className='form-control'
            placeholder='Enter tasks....'
          />
        </div>
        <div className="col-3">
          <button
            type='button'
            onClick={() => formSubmitHandling()}
            className='btn btn-primary '
          >
            <i className="fa-solid fa-plus"></i>Add Tasks
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
