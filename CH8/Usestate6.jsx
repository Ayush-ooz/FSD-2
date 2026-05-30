import { useState } from "react";
function Usestate6(){
    const[task,setTask]=useState(" ")
    const[todolist,setToDoList]=useState([])
    function addTask(){
        setToDoList([...todolist,{id:Date.now(),name:task}])
        setTask(" ")
    }
    function deleteTask(id){
        setToDoList(todolist.filter((t)=>t.id!==id))
    }
    return(
        <div>
            <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}/>
            <button onClick={addTask}>AddTask</button>
            {
                todolist.map((t)=>
                    <div key={t.id}>
                        <h3>{t.name}</h3>
                        <button onClick={()=>deleteTask(t.id)}>DeleteTask</button>
                    </div>
                )
            }
        </div>
    )
}export default Usestate6