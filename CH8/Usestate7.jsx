import { use, useState } from "react";
function Usestate7(){
    const[formdata,setFormData]=useState({})
    function handlechange(e){
        const{name,value}=e.target
        setFormData({...formdata,[name]:value})
    }
    function handlesubmit(e){
        e.preventDefault()
        if(formdata.pass!==formdata.cpass){
            alert("Password and Confirm Password must be same")
        }
        else if(formdata.pass.length<=8){
            alert("Password must be greater than 8")
        }
        else if(formdata.contact.length!==10){
            alert("Contact number should be 10 digit")
        }
        else{
            alert(`Thank You! Welcome ${formdata.un}`)
        }
    }
    return(
        <form onSubmit={handlesubmit}>
            <label>UserName</label>
            <input type="text" name="un" onChange={handlechange} required/><br />
            Email: <input type="email" name="eid" onChange={handlechange} required/><br />
            Password: <input type="password" name="pass" onChange={handlechange} required/><br />
            Confirm Password: <input type="password" name="cpass" onChange={handlechange}required/><br />
            Contact Number: <input type="tel" name="contact"onChange={handlechange}required/><br /><br />
            Message:<textarea name="msg" onChange={handlechange}></textarea><br /><br />
            <label>Gender</label>
            <input type="radio" name="gender"value="male"onChange={handlechange}/>Male
            <input type="radio" name="gender"value="female"onChange={handlechange}/>Female
            <br /><br />
            <label>Hobbies</label>
            <input type="checkbox" name="hobby" value="dancing"onChange={handlechange}/>dancing
            <input type="checkbox" name="hobby" value="reading"onChange={handlechange}/>Reading
            <br />
            <select name="city"onChange={handlechange}>
                <option value=" ">Select</option>
                <option value="Godhra">Godhra</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Rajkot">Rajkot</option>
            </select><br /><br />
            <input type="submit"/>
        </form>
    )
}export default Usestate7