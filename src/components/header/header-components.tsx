import { useNavigate } from 'react-router-dom'

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

  const handleMainClick = () => {
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
      <HeaderTitle onClick={handleMainClick}>CLUB CLOTHING</HeaderTitle>
      <HeaderItems>
        <HeaderItem onClick={handleMainClick}>Explorar</HeaderItem>
        <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
        <HeaderItem onClick={handleSignupClick}>Criar conta</HeaderItem>
        <HeaderItemContainer>
          <BsCart3 size={20} />
          <HeaderItemText>5</HeaderItemText>
        </HeaderItemContainer>
      </HeaderItems>
    </HeaderContainer>
  )
}

export default Header
