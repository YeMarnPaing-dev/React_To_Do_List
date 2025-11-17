import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import api from "./api/apiResource";
import uuid from "react-uuid";

function App() {
  const [tasks,setTasks] = useState([])
  const fetchData = async () => {
    const res = await api.get("/todolist");

    setTasks(res.data)

  };

  useEffect(() => {
    fetchData();
  }, []);

const submitTask = async (userTask) => {
  const data = {
    id: uuid(),
    task: userTask,
    complete: false
  };
 
  // send to server
  await api.post("/todolist", data);

  // update local state
  setTasks([...tasks, data]);

}

  const deleteTask = async (task_id) => {
     try {
    await api.delete(`/todolist/${task_id}`);

    // Remove the deleted task from state
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== task_id));
  } catch (error) {
    console.error("Delete error:", error);
  }
         
  }   

  return (
    <div className="mx-auto w-50">
      <Form submitTask={submitTask}/>
      <List tasks={tasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
