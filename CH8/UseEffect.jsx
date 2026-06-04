import { useEffect,useState } from "react";
function UseEffect(){
    const[count1,setcount1]=useState(0)
    const[count2,setcount2]=useState(0)
    useEffect(()=>alert("Effect"),[])
    return(
        <>
        <button onClick={()=>setcount1(count1+1)}>Button A {count1}</button>
        <button onClick={()=>setcount2(count2+1)}>Button B {count2}</button>
        </>
    )
}export default UseEffect