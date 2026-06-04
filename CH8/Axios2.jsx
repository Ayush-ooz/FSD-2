import { useEffect,useState } from "react";
import axios from "axios";
export default function Axios2(){
    const[image,setImage]=useState("")
    useEffect(()=>{
        axios
        .get("https://dog.ceo/api/breeds/image/random")
        .then((r)=>{
            console.log(r.data)
            setImage(r.data)
        })
        .catch((e)=>{console.log(e)})
    },[])
    return(
        <>
        <img src={image.message} alt="dog" width="500" height="500"/>
        <button onClick={()=>setImage(image.message)}>Click Here</button>
        </>
    )
}