const TodoData = (props) => {
    const { todoList, deletetodo } = props // lay ra value cua prop

    const handleclick = (id) => {
        deletetodo(id)
    }
    return (
        <div className='todo-data'>
            {todoList.map((item, index) => {
                return (
                    <div className={`todo-item`} key={item.id}>
                        <div>{item.name}</div>
                        <button onClick={() => { handleclick(item.id) }}
                            style={{ cursor: "pointer" }}

                        >
                            Delete
                        </button>

                    </div>
                )
            })}
        </div>
    )
}

export default TodoData;