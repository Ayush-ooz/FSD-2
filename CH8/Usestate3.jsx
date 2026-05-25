import {useState} from "react"
function Usestate3(){
    const [name,setText]=useState("LJ University")
    const[changecolor,setColor]=useState("red")
    const[h,setHide]=useState("hide")
    const[hstext,sethstext]=useState("React JS Hook")
    function changeText(){
        if(name==="LJ University"){
            setText("Welcome Students")
        }
        else{
            setText("LJ University")
        }
    }
    function changeColor(){
       if(changecolor==="red"){
        setColor("blue")
       }
       else{
        setColor("red")
       }
    }
    function handlehc(){
        if(h==="hide"){
            setHide("show")
            sethstext(" ")
        }
        else{
            setHide("hide")
            sethstext("React JS Hook")
        }
    }
    return(
        <div>
            <button onClick={changeText}>Change Name</button>
            <button onClick={changeColor}>Change Color</button>
            <button onClick={handlehc}>{h}</button>
            <h1 style={{color:changecolor}}>{name}</h1>
            <h2>{hstext}</h2>
        </div>
    )
}export default Usestate3