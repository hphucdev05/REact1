import './components/todo/todo.css'
import './components/todo/todoNew'
import './components/todo/todoData'
import TodoData from './components/todo/todoData'
import TodoNew from './components/todo/todoNew'
import reactlogo from './assets/react.svg'
import { useState } from 'react'
const name = "Hoang Phuc"
const age = 25
const data = {
  address: "ha noi",
  country: "viet nam"
}


//{key: value}
const App = () => {
  const [todoList, setTodolist] = useState([
    { id: 1, name: "Learning React" },
    { id: 2, name: "Watch Youtube" },


  ])
  const addnewtodo = (name) => {
    const newtodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name
    }
    setTodolist([...todoList, newtodo])// hieu don gian la ...data cu, them data moi vao cuoi data cu
    //array push
  }
  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return (
    <div className='todo-container'>
      <div className='todo-title' >Todo List</div>
      <TodoNew
        addnewtodo={addnewtodo}
      />
      <TodoData
        name={name}
        age={age}
        data={data}
        todoList={todoList}
      />
      <div className='todo-image'>
        <img src={reactlogo} className='logo' />
      </div>
    </div>
  )
}

export default App