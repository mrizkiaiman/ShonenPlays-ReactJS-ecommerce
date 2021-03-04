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
//Functions
import useComponentVisible from '../../../hooks/useComponentVisible'

const NavBar = () => {
  const [displayCategories, setDisplayCategories] = useState(false)
  const {ref, isComponentVisible, setIsComponentVisible} = useComponentVisible(
    false,
  )
  const Menu = ({name}) => (
    <button className="flex items-center cursor-pointer mx-9">
      <p className="text-d-green font-light text-lg">{name}</p>
    </button>
  )

  console.log({isComponentVisible})

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
      <NavBotContainer>
        <NavMenu>
          <Menu name="Home" />
          <Menu name="About" />
          <div>
            <button
              onClick={() => {
                setIsComponentVisible(!isComponentVisible)
              }}
              className="flex items-center cursor-pointer mx-9">
              <p className="text-d-green font-light text-lg">Categories</p>
              <img src={DownArrow} className="ml-4" alt="down-arrow" />
            </button>

            <div ref={ref}>
              {isComponentVisible ? (
                <p className="h-20 w-20 bg-red-500 absolute mx-9">asdasdsd</p>
              ) : null}
            </div>
          </div>
          <Menu name="Faq" />
          <Menu name="Blog" />
          <Menu name="Contact" />
        </NavMenu>
      </NavBotContainer>
    </Nav>
  )
}

export default NavBar
