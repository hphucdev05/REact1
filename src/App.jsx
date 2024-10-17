import TodoData from './components/todo/todoData';
import TodoNew from './components/todo/todoNew';
import './components/todo/todo.css';
import reactLogo from './assets/react.svg';


const App = () => {
  const name = "phuc";
  const age = 25;
  const data = {
    address: "Ho Chi Minh",
    country: "Viet Nam"

  }
  const addNewtodo = (name) => {
    alert(`call me ${name}`)

  }


  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewtodo={addNewtodo}
      />
      <TodoData
        name={name}
        age={age}
        data={data}

      />
      <div className='todo-image'>
        <img src={reactLogo} className='logo' />
      </div>
    </div>
  )
}

export default App
