import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {Outlet, Link} from "react-router-dom"
import "../NavBar/Nav.css"


function Nav()
{
    return(
        <div className="contenedor">
         <nav>
        <ul class="nav justify-content-end ">

              
            <li class="nav-item">
              <h4  className="id" class="nav-link ">Tienda de boleta</h4> 
            </li>
            <li class="nav-item">
            <Link to="/ContenerTodo"class="nav-link" >Home</Link>
            </li>

     </ul>
     </nav>
     <Outlet/>
     </div>
    )
}

export default Nav