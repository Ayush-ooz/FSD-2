import { useState } from "react";
import img1 from "../assets/image1.png"
import img2 from "../assets/react.svg"
function Usestate4(){
    const[image,setImage]=useState(img1)
    function changeImage(){
        if(image===img1){
            setImage(img2)
        }
        else{
            setImage(img1)
        }
    }
    return(
        <div>
            <img src={image} alt="image" width="300" height="300" />
            <button onClick={changeImage}>ChangeImage</button>
        </div>
    )
}export default Usestate4