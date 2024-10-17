
const TodoNew = (props) => {
    console.log("check props>>>", props)
    const { addNewtodo } = props;
    addNewtodo("phuchoang")
    return (
        <div className='todo-new'>
            <input type="text" />
            <button>Add</button>
        </div>
    )
}

export default TodoNew;