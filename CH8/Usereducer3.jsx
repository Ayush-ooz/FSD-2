import { useReducer } from "react";
import img1 from "../assets/image1.png"
import img2 from "../assets/image2.png"

function reducer(state,action){
    if(state===img1){
        return img2
    }
    else if(state===img2){
        return img1
    }
    else{
        return img1
    }
}
function Usereducer3(){
    const[state,dispatch]=useReducer(reducer,img1)
    return(
        <>
        <img src={state} height="300" width="300"/>
        <button onClick={()=>dispatch()}>Change Image</button>
        </>
    )
}
export default Usereducer3