import React from 'react'
//Assets
import {
  SearchIcon,
  UserIcon,
  WishlistIcon,
  CartIcon,
} from '../../../assets/icons/navbar'
//Components
import {Nav, NavTitle, NavMenu, NavIcon} from './elements'

const NavBar = () => {
  const Menu = ({name}) => <p className="font-titillium font-light">{name}</p>

  const MenuList = ['Home', 'About', 'Categories', 'Blog', 'Faq', 'Contact']

  return (
    <p>
      <Nav>
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-wrap">
            <NavIcon src={SearchIcon} alt="search-icon" />
            <NavIcon src={UserIcon} alt="user-icon" />
          </div>
          <NavTitle to="/">ShonenPlays</NavTitle>
          <div className="flex flex-wrap">
            <NavIcon src={WishlistIcon} alt="wishlist-icon" />
            <NavIcon src={CartIcon} alt="cart-icon" />
          </div>
        </div>
        <div className="flex">
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
