/*Create a React application for a Student Portfolio Website using functional components and React Router.
Components
•	Main.jsx – Configure routes 
•	Home.jsx – Display student details 
•	Projects.jsx – Display projects 
•	Nopage.jsx- Page not found.
Requirements
•	Create navigation for Home and Projects pages. 
•	Home page should display: Welcome to My Portfolio also show student Name, Course, and Education. 
•	Add a link to the Projects page. 
•	Projects page should display 3 projects using props: 
o	Project Name 
o	Description 
o	Image 
•	Use functional components and basic CSS styling.*/


import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import SHome from "./SHome"
import Sproject from "./Sproject"
import Snopage from "./Snopage"
import img1 from "../assets/hero.png"

function Student(){
    const p=[{name:"A",course:"CSE",Education:"College"}]
    const s=[{name:"ABC",des:"Test",image:img1},{name:"XYZ",des:"Test1",image:img1},{name:"PQR",des:"Test2",image:img1}]
    return(
        <div>
            <Router>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Sproject">Project</Link></li>
                </ul>
                <Routes>
        
                    <Route path="/" element={<SHome data={p}/>}/>
                    <Route path="/Sproject" element={<Sproject data={s}/>}/>
                    <Route path="*" element={<Snopage/>}/>
                </Routes>
            </Router>
        </div>
    )
}export default Student