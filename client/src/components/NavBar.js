import React from "react";
import { Link } from "react-router-dom"

function NavBar(){
    return(
        <div>
        <nav>
        <Link to ="/addrecipe">Add Recipe</Link>
    </nav>
    {/* <img className="homeImages"src={yosemite} alt={"yosemite"}/> */}
    </div>
    )
}

export default NavBar;