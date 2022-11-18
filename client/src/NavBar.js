import React from "react";
import { Link } from "react-router-dom"
import dinnerborder from "./photos/dinner1.png"


function NavBar(){
    return(
        <div className="header">
        <nav>
        <Link to ="/recipes">ALL RECIPES</Link>
        <Link to ="/addrecipe">MY RECIPES</Link>
        <Link to ="/addrecipe">FAVORITES</Link>
        <Link to ="/addrecipe">ADD A RECIPE</Link>
        {/* <div className="navImageDiv"> */}
        <Link to ="/addrecipe"><img className="navImage"src={dinnerborder} alt={"dinner"}></img></Link>
        {/* </div> */}
    </nav>
    </div>
    )
}

export default NavBar;