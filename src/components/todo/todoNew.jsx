import { useState } from "react";

const TodoNew = (props) => {

    const { addnewtodo } = props;
    // addnewtodo('hphuc')
    const handleclick = () => {
        console.log("check of value input: ", valueInput)
    }
    const [valueInput, setvalueInput] = useState()
    const handleonchange = (name) => {

        setvalueInput(name)
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
            <div>My text input is = {valueInput}</div>
        </div>
    )
}

export default TodoNew;