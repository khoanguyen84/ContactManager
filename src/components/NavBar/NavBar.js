import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
   return (
      <React.Fragment>
         <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <div className="container">
               <Link to="/" className="navbar-brand">
                  <i className="fas fa-phone text-warning" />
                  Contact <span className="text-warning">Manager</span>
               </Link>
            </div>
         </nav>
      </React.Fragment>
   );
}
export default NavBar;
