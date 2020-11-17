import React from 'react';
import NavbarStyle from './NavbarStyle.css'

const Navbar = () => {

    

    return ( 
        <header>
        <nav className="navbar">
            <ul>
                <li><a className="" id="linkHome" href="#All" >Home</a></li>
                <li><a className="" id="linkMovies" href="#Movies">Movies</a></li>
                <li><a className="" id="linkSeries" href="#Series">Series</a></li>
            </ul>
        </nav>
        </header>
     );
}
 
export default Navbar;