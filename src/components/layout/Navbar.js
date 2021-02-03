import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import * as FaIcons from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Button } from '../utilities/Button'

function Navbar(){
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = ()=> setClick(!click)
    const closeMobileMenu = () => setClick(false);

    const showButton = ()=>{
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    }

    window.addEventListener('resize', showButton)

    return(
        <>
         <IconContext.Provider value={{color: '#111'}}>
        <div className="navbar">
            <div className="navbar-container container">
                <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                  <FaIcons.FaLaptopCode className="navbar-icon"/>
                  Melvin Gaye
                </Link>
                <div className="menu-icon"onClick={handleClick}>
                {click ? <FaIcons.FaTimes/> : <FaIcons.FaBars/>}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'} onClick={closeMobileMenu}>
                <li className="nav-item">
                    <Link to='/' className="nav-links">
                    Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/projects' className="nav-links">
                    Projects
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/reading-list' className="nav-links">
                    Readings
                    </Link>
                </li>
                <li className="nav-btn">
                    {button ? 
                    (<Link to='/contact' className="btn-link">
                        <Button btnStyle="btn--outline">CONTACT</Button>
                    </Link>) :
                    (<Link to='/contact' className="btn-link">
                        <Button btnStyle='btn--outline'
                        btnSize='btn--mobile'
                        >CONTACT</Button>
                    </Link>)
                    }
                </li>
            </ul>
            </div>           
        </div>
        </IconContext.Provider>
        </>
    )
}

export default Navbar