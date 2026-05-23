function Child(props){
    return(
        <>
        <h1>Name:{props.name}</h1>
        <h2>Age:{props.age+1}</h2>
        </>
    )
}
function User(props){
    return(
        <>
        <h1 style={{
            color:"blue",
            textTransform:"uppercase",
            textDecoration:"underline"}}>
            Welcome {props.data.name} to {props.data.clg}</h1>
        </>
    )
}
export default User