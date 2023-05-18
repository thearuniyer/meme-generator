import React from 'react'
import trollFace from '../assets/troll-face.png'

function Header() {
  return (
    <nav className='navbar'>
        <div className='nav-left'>
            <img src={trollFace} alt='trollface' className='troll-face'/>
            <h2>Meme Generator</h2>
        </div>
        <div className='nav-right'>
            <h4>React Course - Project 3</h4>
        </div>
    </nav>
  )
}

export default Header