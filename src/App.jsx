import './components/todo/todo.css'
import './components/todo/todoNew'
import './components/todo/todoData'
import TodoData from './components/todo/todoData'
import TodoNew from './components/todo/todoNew'
import reactlogo from './assets/react.svg'
const name = "Hoang Phuc"
const age = 25
const data = {
  address: "ha noi",
  country: "viet nam"
}
const App = () => {
  return (
    <div className='todo-container'>
      <div className='todo-title' >Todo List</div>
      <TodoNew />
      <TodoData
        name={name}
        age={age}
        data={data}
      />
      <div className='todo-image'>
        <img src={reactlogo} className='logo' />
      </div>
    </div>
  )
}
export default App