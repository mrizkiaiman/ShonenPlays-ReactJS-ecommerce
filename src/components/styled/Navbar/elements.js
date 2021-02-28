import styled from 'styled-components'
//Components
import {NavLink as Link} from 'react-router-dom'
import {FaAngellist} from 'react-icons/fa'

export const Nav = styled.nav`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  border-bottom: 1px solid #e5e7eb;

  @media (min-width: 1820px) {
    margin: 0 100px;
  }
`

export const NavTitle = styled(Link)`
  color: black;
  font-size: 50px;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  padding: 30px 0;
`

export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 34px;
  flex-wrap: wrap;

  @media (min-width: 1820px) {
    margin: 0 100px;
  }

  p {
    font-size: 20px;
    margin: 0 20px;

    @media (max-width: 603px) {
      margin: 12px 20px;
    }
  }
`

export const NavIcon = styled(FaAngellist)`
  font-size: 20px;
`
