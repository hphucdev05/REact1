const TodoData = (props) => {
    const { todoList } = props // lay ra value cua prop

    console.log('check props>>>>: ', todoList)
    return (
        <div className='todo-data'>
            {todoList.map((item, index) => {
                console.log(">>>>check map: ", item, index)
                return (
                    <div className="todo-item">
                        <div>{item.name}</div>
                        <button>Delete</button>

                    </div>
                )
            })}

            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>
    )
}

export default TodoData;