import React, {useState} from 'react'
//Assets
import {
  SearchIcon,
  UserIcon,
  WishlistIcon,
  CartIcon,
} from '../../../assets/icons/navbar'
import DownArrow from '../../../assets/icons/down-arrow.svg'
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
  const [displayCategories, setDisplayCategories] = useState(false)
  const Menu = ({value}) => (
    <button
      onClick={value && value.onSubmit ? () => value.onSubmit() : null}
      className="flex items-center cursor-pointer mx-9">
      <p className="text-d-green font-light text-lg">
        {typeof value === 'string' ? value : value.name}
      </p>
      {value && value.icon ? value.icon : null}
    </button>
  )

  const MenuList = [
    'Home',
    'About',
    {
      name: 'Categories',
      icon: <img src={DownArrow} className="ml-4" alt="down-arrow" />,
      onSubmit: () => setDisplayCategories(!displayCategories),
    },
    'Blog',
    'Faq',
    'Contact',
  ]

  return (
    <Nav>
      <NavTopContainer>
        <NavIconContainer>
          <NavIcon src={SearchIcon} alt="search-icon" />
          <NavIcon src={UserIcon} alt="user-icon" />
        </NavIconContainer>
        <NavTitleOrange to="/">
          Shonen<NavTitleGreen to="/">Styles</NavTitleGreen>
        </NavTitleOrange>

        <NavIconContainer>
          <NavIcon src={WishlistIcon} alt="wishlist-icon" />
          <NavIcon src={CartIcon} alt="cart-icon" />
        </NavIconContainer>
      </NavTopContainer>
      <NavBotContainer className="flex">
        <NavMenu>
          {MenuList.map((menu, index) => (
            <Menu value={menu} key={index} />
          ))}
        </NavMenu>
      </NavBotContainer>
      {displayCategories && (
        <div className="h-20 w-20 bg-red-500">
          <p>asdasdsd</p>
        </div>
      )}
    </Nav>
  )
}

export default NavBar
