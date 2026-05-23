function ProductCard(props){
    return(
        <>
        <table border={2}>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Image</th>
                <th>Rating</th>
            </tr>
            {
                props.data.filter((p)=>
                    p.rating>4).map((p,i)=>
                    <tr key={i}>
                        <td>{p.name}</td>
                        <td>{p.price+1000}</td>
                        <td><img src={p.image} width="100"/></td>
                        <td>{p.rating}</td>
                    </tr>
                )}
        </table>
        </>
    )}
export default ProductCard