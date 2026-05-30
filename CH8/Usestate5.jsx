import { useState } from "react";
import img1 from "../assets/image1.png"
import img2 from "../assets/image2.png"
import img3 from "../assets/image3.png"
import img4 from "../assets/react.svg"
import img5 from "../assets/hero.png"
function Usestate5(){
    const[image,setImage]=useState(img1)
    var img=[img1,img2,img3,img4,img5]
    function handleImage(){
        var i=Math.floor(Math.random()*img.length)
        setImage(img[i])
    }
    return(
        <div>
            <img src={image} alt="image" width="300" height="300" />
            <button onClick={handleImage}>ChangeImage</button>
        </div>
    )
}export default Usestate5