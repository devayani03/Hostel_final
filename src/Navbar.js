import React,{useState} from "react";
import {Button} from './components/Button';
import Dropdown from './components/Dropdown';
import './components/Navbar.css';
import {Link} from 'react-router-dom';

function Navbar(){
    const [click,setClick]=useState(false);
    const [dropdown,setDropdown]=useState(false);
    const handleClick=()=>setClick(!click);
    const closeMobileMenu=()=>setClick(false);


const onMouseEnter=()=>{
    if(window.innerWidth<900)
    {
        setDropdown(false);
    }
    else{
        setDropdown(true);
    }
};

const onMouseLeave=()=>{
    if(window.innerWidth<900)
    {
        setDropdown(false);
    }
    else{
        setDropdown(false);
    }
};
    return (
    <>
    <nav className="navbar">
        
         <Link to='/' className="navbar-logo">
            <img src="https://res.cloudinary.com/dyxnmjtrg/image/upload/v1692363023/logo1_rg5oeu.png" alt="Logo" class="logo"></img>
            VJTI Hostel
         </Link> 
         <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
         </div>
         <ul className={click ? 'nav-menu active' :'nav-menu'}>
            <li className="nav-item">
            
            <Link to='/' className="nav-links" onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className="nav-item">
                
            
            <Link to='/events' className="nav-links" onClick={closeMobileMenu}>Events</Link>
            </li>
            <li className="nav-item" 
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            >
            
            <Link to='/blocks' className="nav-links" onClick={closeMobileMenu}>Blocks
            <i className="fas fa-caret-down"/>
            </Link>
            {dropdown && <Dropdown/>}
            
            
            </li>

            <li className="nav-item">
            <Link to='/contact' className="nav-links" onClick={closeMobileMenu}>Contact
            </Link>
            </li>
           

            <li className="nav-item">            
            <Link to='/sign-up' className="nav-links-mobile" onClick={closeMobileMenu}>Sign-up
            </Link>
             
             </li> 
              
         </ul>
         <Button/>
     </nav>
    </>
    );
}

export default Navbar;