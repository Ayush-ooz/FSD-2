import { createContext } from "react";
import Comp1 from "./Comp1"
const obj1={n1:5,n2:4,n3:2}
const obj=createContext()
export default function Comp(){
    return(
        <>
        <obj.Provider value={obj1}>
            <Comp1/>
        </obj.Provider>
        </>
    )
}export {obj}