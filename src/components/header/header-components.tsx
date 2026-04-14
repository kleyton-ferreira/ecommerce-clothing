import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebase.config'

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

const Header = () => {
  const navigate = useNavigate()

  const handleInitialPage = () => {
    navigate('/')
  }

  const handleLoginClick = () => {
    navigate('/login')
  }

  const handleSignupClick = () => {
    navigate('/signup')
  }

  return (
    <HeaderContainer>
      <HeaderTitle onClick={handleInitialPage}>CLUB CLOTHING</HeaderTitle>
      <HeaderItems>
        <HeaderItem>Explorar</HeaderItem>
        <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
        <HeaderItem onClick={handleSignupClick}>Criar conta</HeaderItem>
        <HeaderItem onClick={() => signOut(auth)}>Sair</HeaderItem>
        <HeaderItemContainer>
          <BsCart3 size={20} />
          <HeaderItemText>5</HeaderItemText>
        </HeaderItemContainer>
      </HeaderItems>
    </HeaderContainer>
  )
}

export default Header
