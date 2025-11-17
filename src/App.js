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
 
  const res = await api.post("todolist", data);

  setTasks(...tasks,res.data)

  

}

  return (
    <div className="mx-auto w-50">
      <Form submitTask={submitTask}/>
      <List tasks={tasks}/>
    </div>
  );
}

export default App;
