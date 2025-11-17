import React from 'react';

const Cart = ({ tasks, deleteTask, updateTask }) => {

  const handleDeleteTask = (id) => {
    if (window.confirm("Are you sure?")) {
      deleteTask(id);
    }
  };

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className={task.complete  ? 'list-group-item w-100 bg-success text-white text-decoration-line-through shadow-sm mb-2' : 'list-group-item w-100 shadow-sm mb-2'}>
          <div className="row">
            <div className="col-9 offset-1">
              <input
                type="checkbox"
                className="me-2"
                checked={task.complete}
                onChange={() => updateTask(task.id, !task.complete)}
              />
              {task.task}
            </div>

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
