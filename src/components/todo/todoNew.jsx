
const TodoNew = (props) => {
    console.log(">>> check point: ", props)
    const { addnewtodo } = props;
    // addnewtodo('hphuc')
    const handleclick = () => {

        alert("click me!")

    }
    const handleonchange = (name) => {

        console.log(">>>>>onChange", name)
    }
    return (
        <div className='todo-new'>
            <input type="text"
                onChange={(event) => handleonchange(event.target.value)}
            />
            <button style={{ cursor: "pointer" }}
                onClick={handleclick}
            >

                Add </button>
        </div>
    )
}

export default TodoNew;