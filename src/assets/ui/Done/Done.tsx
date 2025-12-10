import "./done.css"

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const Done = ({data}:{data:Todo[]}) => {

  const dones = data.filter(todo => todo.completed)   

  return (
    <section className='done'>
      <header>Done - {dones.length}</header>
      <ul>
      {dones.length===0?
      <p>No tasks done yet 😴</p> :  
      dones.map(todo => (
        <li key={todo.id}>
          <p>{todo.text}</p>
        </li>
      ))
      }
      </ul>
    </section>
  )
}

export default Done
