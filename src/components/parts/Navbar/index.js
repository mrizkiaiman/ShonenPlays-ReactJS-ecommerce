import React from 'react'
//Assets
import {
  SearchIcon,
  UserIcon,
  WishlistIcon,
  CartIcon,
} from '../../../assets/icons/navbar'
//Components
import {
  Nav,
  NavTopContainer,
  NavBotContainer,
  NavIconContainer,
  NavTitleGreen,
  NavTitleOrange,
  NavMenu,
  NavIcon,
} from './elements'

const NavBar = () => {
  const Menu = ({name}) => (
    <p className="font-titillium text-d-green cursor-pointer">{name}</p>
  )
  const test

  const MenuList = ['Home', 'About', 'Categories', 'Blog', 'Faq', 'Contact']

  return (
    <Nav>
      <NavTopContainer>
        <NavIconContainer className="flex flex-wrap">
          <NavIcon src={SearchIcon} alt="search-icon" />
          <NavIcon src={UserIcon} alt="user-icon" />
        </NavIconContainer>
        <NavTitleOrange to="/">
          Shonen<NavTitleGreen to="/">Styles</NavTitleGreen>
        </NavTitleOrange>
        <NavIconContainer className="flex flex-wrap">
          <NavIcon src={WishlistIcon} alt="wishlist-icon" />
          <NavIcon src={CartIcon} alt="cart-icon" />
        </NavIconContainer>
      </NavTopContainer>
      <NavBotContainer className="flex">
        <NavMenu>
          {MenuList.map((menu, index) => (
            <Menu name={menu} key={index} />
          ))}
        </NavMenu>
      </NavBotContainer>
    </Nav>
  )
}

export default NavBar
