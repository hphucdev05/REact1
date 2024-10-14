import './style.css'
const Mycomponent = () => {
    // let word = "Hello Phuc!";
    // const word = "video 31";
    // const bool = true;
    // const bool = undefined
    // const check = null
    const obj = [1, 2, 3];
    // const obj = {
    //     name: "Phuc",
    //     age: 19
    // }
    return (
        <>
            <div > {JSON.stringify(obj)}</div>

            <div className="child"
                style={
                    { borderRadius: "10px" }
                }
            > fkinghard</div>
        </>
    )
}
export default Mycomponent
