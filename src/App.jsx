import './components/todo/todo.css'

import TodoData from './components/todo/todoData'
import TodoNew from './components/todo/todoNew'
import reactlogo from './assets/react.svg'
import { useState } from 'react'

//Usestate dùng để lưu trữ data, còn [todolist,settodolist] là 1 thằng value còn 1 thằng là func
//để cập nhật value todolist
const App = () => {
  const [todoList, setTodolist] = useState([
  ])
  const addnewtodo = (name) => {
    const newtodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name
    }

    setTodolist([...todoList, newtodo])// hieu don gian la ...data cu, them data moi vao cuoi data cu
    // array push
  }
  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);

  }
  const deletetodo = (id) => {
    const newtodo = todoList.filter(item => item.id !== id)
    console.log("check newtodo ", newtodo)
    setTodolist(newtodo)
  }
  return (
    <div className='todo-container'>
      <div className='todo-title' >Todo List</div>
      <TodoNew
        addnewtodo={addnewtodo}
      />
      {todoList.length > 0 ?
        <TodoData
          todoList={todoList}
          deletetodo={deletetodo}
        />
        :
        <div className='todo-image'>
          <img src={reactlogo} className='logo' />
        </div>
      }
    </div>
  )
}

export default App