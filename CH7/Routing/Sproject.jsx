function Sproject(props){
    return(
        <div>
            {
                props.data.map((d,i)=>
                    <div key={i}>
                        <h1>Project Name:{d.name}</h1>
                        <h3>Description:{d.des}</h3>
                        <img src={d.image} width="400"/>
                    </div>
                )
            }
        </div>
    )
}export default Sproject