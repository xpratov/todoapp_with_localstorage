import { plus } from "../../icons/export"
import "./entering.css"
import { useState } from "react"

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const Entering = ({ data, onData }:{data:Todo[], onData:any}) => {
  const [handleInput, setHandleInput] = useState<string>("")

  const pressNew = ():void =>{
    if (!handleInput.trim()) return;
    const updatedTodos:Todo[] = [
      {
        id: data[0].id+1,
        text: handleInput,
        completed: false,
      }, 
      ...data
    ]
    localStorage.setItem("todos", JSON.stringify(updatedTodos))
    onData(updatedTodos)
    setHandleInput("")
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      pressNew();
    }
  };

  return (
    <div className='entering'>
      <input value={handleInput} onChange={(v)=>{setHandleInput(v.target.value)}} onKeyDown={handleKeyPress} type="text" placeholder='Add a new task' />      
      <button type="submit" onClick={pressNew}>
        <img src={plus} alt="Add a new task with this button" />
      </button>
    </div>
  )
}

export default Entering
