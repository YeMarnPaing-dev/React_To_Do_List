import React from 'react'

const Cart = ({ tasks, deleteTask }) => {

  const handleDeleteTask = (id) => {
    if (window.confirm("Are you sure?")) {
      deleteTask(id);
    }
  };

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className="list-group-item w-100 shadow-sm mb-2">
          <div className="row">
            <div className="col-9 offset-1">{task.task}</div>

            <div className="col-2">
              <i
                onClick={() => handleDeleteTask(task.id)}
                className="fa-solid fa-trash"
                style={{ cursor: "pointer" }}
              ></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
