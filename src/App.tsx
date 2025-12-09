import { useState } from "react";
import Done from "./assets/ui/Done/Done";
import Entering from "./assets/ui/Entering/Entering";
import Taskstodo from "./assets/ui/Todo/Taskstodo";
import "./index.css";
import Pratov from "./assets/ui/Pratov/Pratov";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
}

function App() {

  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem("todos");
    if (!saved) return []; 
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error("Invalid JSON in localStorage, resetting todos", e);
      return [];
    }
  });

  const onData = (data:Todo[]):void=>{
    localStorage.setItem("todos", JSON.stringify(data))
    setTodos(data)
  }

  return (
    <>
    <div id="app">
      <Entering data={todos} onData={onData}/> 
      <Taskstodo data={todos} onData={onData}/>
      <Done data={todos}/>
    </div>
    <Pratov/>
    </>
  )
}

export default App
