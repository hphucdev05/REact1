const TodoData = (props) => {
    console.log('check props>>>>: ', props)
    const { name, age, data } = props
    return (
        <div className='todo-data'>
            <div>my name is: {name}</div>
            <div>my age is: {age}</div>

            <div>Learning react</div>
            <div>Watch youtube</div>
        </div>
    )
}

export default TodoData;