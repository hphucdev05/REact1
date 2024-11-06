import './components/todo/todo.css'
import './components/todo/todoNew'
import './components/todo/todoData'
import TodoData from './components/todo/todoData'
import TodoNew from './components/todo/todoNew'
import reactlogo from './assets/react.svg'
const App = () => {
  return (
    <div className='todo-container'>
      <div className='todo-title' >Todo List</div>
      <TodoNew />
      <TodoData />
      <div className='todo-image'>
        <img src={reactlogo} className='logo' />
      </div>
    </div>
  )
}
export default App