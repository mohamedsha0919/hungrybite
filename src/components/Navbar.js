import { Outlet, NavLink } from "react-router-dom";

const Navbar = () =>{
    return(
<>
<section>
      <nav>
            <ul>
              <li>
              <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="Services">Services</NavLink>
              </li>
            </ul>
      </nav>
      
</section>
<Outlet/>
</>
    );
}
export default Navbar;