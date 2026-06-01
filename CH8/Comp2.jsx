import { useContext } from "react";
import {obj} from "./Comp"
import {color} from "./Comp1"
export default function Comp2(){
    var n=useContext(obj)
    var c=useContext(color)
    return(
        <>
        <h1 style={{color:c}}>{n.n1}*{n.n2}/{n.n3}={(n.n1*n.n2)/n.n3}</h1>
        </>
    )
}