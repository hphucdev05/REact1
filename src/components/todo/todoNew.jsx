import { useState } from "react";

const TodoNew = (props) => {

    const { addnewtodo } = props;
    // addnewtodo('hphuc')
    const handleclick = () => {
        console.log("check of value input: ", valueInput)
        addnewtodo(valueInput)
        setvalueInput("")
    }
    const [valueInput, setvalueInput] = useState("phuc")

    const handleonchange = (name) => {
        setvalueInput(name)
    }
    return (
        <div className='todo-new'>
            <input type="text"
                onChange={(event) => handleonchange(event.target.value)}
                value={valueInput}
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