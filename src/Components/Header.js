import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <>
            <nav>
                <input type='checkbox' id='check' />
                <label htmlFor="check" className='checkbtn'>
    <i className="fa-solid fa-bars"></i>
</label>

                <label className='logo'>Ah.</label>
                <ul className='list'>
                    <li><Link to="/home" >Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/skills">Skill</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Header
