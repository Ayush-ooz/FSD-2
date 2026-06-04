import { useEffect,useState } from "react";
function UseEffect1(){
    const[date,setDate]=useState(new Date())
    useEffect(()=>{
        setInterval(()=>{
            setDate(new Date())
        },1000)
    },[])
    return(
        <>
        <h1>{date.toLocaleTimeString()}</h1>
        <h2>Hour:{date.getHours()} Minutes:{date.getMinutes()} Seconds:{date.getSeconds()}</h2>
        </>
    )
}export default UseEffect1