import "./taskstodo.css"
import { check, trash } from '../../icons/export'

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const Taskstodo = ({data, onData}:{data:Todo[], onData:(d:Todo[])=>void}) => {

  const pressTrash = (id:number):void =>{
    const newData:Todo[] = data.filter(todo => todo.id!==id)
    onData(newData)
    localStorage.setItem("todos", JSON.stringify(newData))
  }

  const pressCheck = (id:number):void =>{
    const newData:Todo[] = data.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    )
    onData(newData)
    localStorage.setItem("todos", JSON.stringify(newData))
  }
  
  const tasktodo:Todo[] = data.filter((todo:Todo)=>(!todo.completed))

  return (
    <section className='todo'>
      <header>Task to do - {tasktodo.length}</header>
      <ul>
      {tasktodo.length === 0?
        <p>No tasks to do yet 👌</p> :
        tasktodo.map(todo => (
          <li key={todo.id}>
            <p>{todo.text}</p>
            <div>
              <button onClick={()=>{pressCheck(todo.id)}}>
                <img src={check} alt="Click if you make it as checked"/>
              </button>
              <button onClick={()=>{pressTrash(todo.id)}}>
                <img src={trash} alt="Click if you wanna delete it"/>
              </button>
            </div>
          </li>
        ))
      }
      </ul>
    </section>
  )
}

export default Taskstodo
