function SHome(props){
    return(
        <div>
            <h1>Welcome to my Portfolio</h1>
            <h2>Name:{props.data[0].name}</h2>
            <h2>Course:{props.data[0].course}</h2>
            <h2>Education:{props.data[0].Education}</h2>
        </div>
    )
}
export default SHome