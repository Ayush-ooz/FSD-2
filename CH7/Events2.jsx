function Events2(){
    const handlesubmit=(e)=>{
        e.preventDefault()
        var u=document.getElementById("un").value
        alert(`Hello ${u}`)
    }
    const handlechange=(e)=>{
        document.getElementById("test").innerHTML=e.target.value
        console.log(e.target.value)
    }
    const handledoubleclick=()=>{
        document.getElementById("test1").innerHTML="You clicked Twice"
    }
    return(
        <div>
            <h1>Handle Events Example</h1>
            <form onSubmit={handlesubmit}>
                <input type="text" onChange={handlechange} id="un"/>
                <input type="submit"/>
            </form>
            <h2 id="test"></h2>
            <button onDoubleClick={handledoubleclick}>Click Here</button>
            <h2 id="test1"></h2>
        </div>
    )
}export default Events2