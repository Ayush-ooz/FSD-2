import {useState} from "react"
function Usestate1(){
    const [count,setcount]=useState(0)
    function handlecount(){
        setcount(count+1)
    }
    return(
        <div>
            <h1>UseState Example</h1>
            <button onClick={handlecount}>Click to increase the count</button>
            <h2>Count={count}</h2>
        </div>
    )
}export default Usestate1