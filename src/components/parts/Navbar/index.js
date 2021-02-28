import React from 'react'
//Components
import {Nav, NavTitle, NavMenu} from './elements'

const NavBar = () => {
  const Menu = ({name}) => <p className="font-titillium font-light">{name}</p>

  const MenuList = ['Home', 'About', 'Categories', 'Blog', 'Faq', 'Contact']

  return (
    <p>
      <Nav>
        <NavTitle to="/">ShonenPlays</NavTitle>
        <div className="flex flex-col">
          <NavMenu>
            {MenuList.map((menu, index) => (
              <Menu name={menu} key={index} />
            ))}
          </NavMenu>
        </div>
      </Nav>
    </p>
  )
}

export default NavBar
