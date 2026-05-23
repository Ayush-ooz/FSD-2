import Child from "./Child"
import User from "./Child"
function Parent(){
    //var a="ABC"
    var obj={name:"Virat",clg:"LJ University"}
    return(
        <>
        {/* <Child name="pqr" age="21"/>
        <Child name={a} age={22}/> */}
        <User data={obj}/>
        </>
    )
}export default Parent