import img1 from "./assets/img1.png"
import ProductCard from "./ProductCard"
function ProductList(){
    var products=[{
        name:"Product1",
        price:35000,
        rating:4.2,
        image:img1
    },
    {
        name:"Product2",
        price:30000,
        rating:3.5,
        image:img1
    },
    {
        name:"Product3",
        price:38000,
        rating:4.8,
        image:img1
    }
]
return(
    <>
    <ProductCard data={products}/>
    </>
)
}export default ProductList