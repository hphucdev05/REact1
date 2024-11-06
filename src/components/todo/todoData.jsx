const TodoData = (props) => {
    const { name, age, data } = props // lay ra value cua prop

    console.log('check props>>>>: ', props)
    return (
        <div className='todo-data'>
            <div>my name is: {name}</div>
            <div>my age is: {age}</div>
            <div>Learning react</div>
            <div>Watch youtube</div>
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>
    )
}

export default TodoData;