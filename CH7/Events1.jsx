function Events1(){
    // const handleclick=()=>{
    //     alert(`Welcome`)
    // }
    const handleclick=(n)=>{
        alert(`Welcome ${n}`)
    }
    return(
        <>
        {/* <button onClick={()=>{handleclick()}}>Click Here</button> */}
        {/* <button onClick={handleclick}>Click Here</button> */}
        <button onClick={()=>{handleclick("ABC")}}>Click Here</button>
        </>
    )
}
export default Events1