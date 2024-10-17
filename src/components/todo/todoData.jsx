const TodoData = (props) => {
    console.log('check props>>>>: ', props)
    return (
        <div className='todo-data'>
            <div>My Name is {props.name}</div>
            <div> Learning React </div>
            <div> Watching Youtube</div>
        </div>
    )
}

export default TodoData;