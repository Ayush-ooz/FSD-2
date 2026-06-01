import Comp2 from "./Comp2"
import { createContext } from "react"
const color=createContext()
export default function Comp1(){
    return (
        <>
        <color.Provider value="red">
            <Comp2/>
        </color.Provider>
        </>
    )
}export {color}