import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import api from "./api/apiResource";

function App() {
  const [tasks,setTasks] = useState([])
  const fetchData = async () => {
    const res = await api.get("/todolist");

    setTasks(res.data)

  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mx-auto w-50">
      <Form />
      <List tasks={tasks}/>
    </div>
  );
}

export default App;
