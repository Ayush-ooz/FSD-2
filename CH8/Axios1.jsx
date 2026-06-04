import { useEffect,useState } from "react";
import axios from "axios"

export default function Axios1(){
    const[image,setImage]=useState("")
    useEffect(()=>{
        setInterval(()=>{
            axios
            .get("https://randomfox.ca/floof")
            .then((r)=>{
                console.log(r.data)
                setImage(r.data)
            })
            .catch((e)=>{console.log(e)})
        },2000)
    },[])
    return(
        <>
        <img src={image.image} alt="fox" width="500" height="500"/>
        <a href={image.link} target="_blank">Click Here</a>
        </>
    )
}