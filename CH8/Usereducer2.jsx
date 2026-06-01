//Create react js app to increase value by 1 while clicking on button “Increment” and decrease value by 1 while clicking on button “Decrement”. Initialize value with 0. Use useReducer hook to perform the task
import { useReducer } from "react";
function reducer(state,action){
    if(action.type==="inc"){
        return state+1
    }
    else if(action.type==="dec"){
        return state-1
    }
    else{
        return state
    }
}
function Usereducer2(){
    const[state,dispatch]=useReducer(reducer,0)
    return(
        <>
        <h1>{state}</h1>
        <button onClick={()=>dispatch({type:"inc"})}>Increase</button>
        <button onClick={()=>dispatch({type:"dec"})}>Decrease</button>
        </>
    )
}export default Usereducer2