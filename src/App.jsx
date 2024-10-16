<<<<<<< HEAD
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
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponents from './learn/MyComponents'
import SecondComponent from './learn/SecondComponent'
// () => { }
const App = () => {
  const [count, setCount] = useState(0)
>>>>>>> 09153529b833f8808fd862091294ff3b32deca63

  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew />
      <TodoData
        name={name}
        age={age}
        data={data}
      />
      <div className='todo-image'>
        <img src={reactLogo} className='logo' />
      </div>
<<<<<<< HEAD
    </div>
=======
      <h1>Hello world

        <SecondComponent />
        <MyComponents />

      </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
>>>>>>> 09153529b833f8808fd862091294ff3b32deca63
  )
}

export default App
