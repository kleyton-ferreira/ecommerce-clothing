import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebase.config'
import { UserContext } from '../../context/user-context'
import { CartContext } from '../../context/cartContext'

// STYLES
import {
  HeaderContainer,
  HeaderItems,
  HeaderItem,
  HeaderItemText,
  HeaderItemContainer,
  HeaderTitle
} from './header.styles'

// BUTTON
import { BsCart3 } from 'react-icons/bs'
import { useContext } from 'react'

const Header = () => {
  const navigate = useNavigate()

  const { isAuthenticated } = useContext(UserContext)
  const { toggleCart } = useContext(CartContext)

  const handleInitialPage = () => {
    navigate('/')
  }

  const handleLoginClick = () => {
    navigate('/login')
  }

  const handleSignupClick = () => {
    navigate('/signup')
  }

  const handleExploreClick = () => {
    navigate('/explore')
  }

  return (
    <HeaderContainer>
      <HeaderTitle onClick={handleInitialPage}>CLUB CLOTHING</HeaderTitle>
      <HeaderItems>
        <HeaderItem onClick={handleExploreClick}>Explorar</HeaderItem>
        {!isAuthenticated && (
          <>
            <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
            <HeaderItem onClick={handleSignupClick}>Criar conta</HeaderItem>
          </>
        )}

        {isAuthenticated && (
          <HeaderItem onClick={() => signOut(auth)}>Sair</HeaderItem>
        )}

        <HeaderItemContainer onClick={toggleCart}>
          <BsCart3 size={20} />
          <HeaderItemText>5</HeaderItemText>
        </HeaderItemContainer>
      </HeaderItems>
    </HeaderContainer>
  )
}

export default Header
