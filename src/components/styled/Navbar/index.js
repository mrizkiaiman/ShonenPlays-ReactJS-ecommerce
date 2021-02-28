import React from 'react'
//Components
import {Nav, NavTitle, NavMenu} from './elements'

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavTitle to="/">ShonenPlays</NavTitle>
        <div className="flex flex-col">
          <NavMenu>
            <p>Home</p>
            <p>About</p>
            <p>Categories</p>
            <p>Blog</p>
            <p>Faq</p>
            <p>Contact</p>
          </NavMenu>
        </div>
      </Nav>
    </>
  )
}

export default NavBar
