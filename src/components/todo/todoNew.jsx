
const TodoNew = (props) => {
    console.log(">>> check point: ", props)
    const { addnewtodo } = props;
    addnewtodo('hphuc')
    return (
        <div className='todo-new'>
            <input type="text" />
            <button> Add </button>
        </div>
    )
}

export default TodoNew;