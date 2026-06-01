import { createContext, useContext } from "react";
import UseContext2 from "./UseContext2"
const Fname=createContext()
const Lname=createContext()
export default function UseContext1(){
    return(
        <>
        <Fname.Provider value="Ayush">
            <Lname.Provider value="Rana">
                <UseContext2/>
            </Lname.Provider>
        </Fname.Provider>
        </>
    )
}export {Fname,Lname}