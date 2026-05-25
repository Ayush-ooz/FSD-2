import {useState} from "react"
function Usestate2(){
    const[count,setcount]=useState(20)
    function increase(){
        if(count<50){
            setcount(count+1)
        }
        else{
            return false
        }
    }
    function decrease(){
        if(count>0){
            setcount(count-1)
        }
    }
    return(
        <div>
            <h1>UseState Example</h1>
            <button onClick={increase}>Click here to increase</button>
            <button onClick={decrease}>Click here to decrease</button>
            <h2>Count={count}</h2>
        </div>
    )
}export default Usestate2