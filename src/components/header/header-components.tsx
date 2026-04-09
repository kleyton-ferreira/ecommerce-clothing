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
  return (
    <HeaderContainer>
      <HeaderTitle>CLUB CLOTHING</HeaderTitle>
      <HeaderItems>
        <HeaderItem>Explorar</HeaderItem>
        <HeaderItem>Login</HeaderItem>
        <HeaderItem>Criar conta</HeaderItem>
        <HeaderItemContainer>
          <BsCart3 size={20} />
          <HeaderItemText>5</HeaderItemText>
        </HeaderItemContainer>
      </HeaderItems>
    </HeaderContainer>
  )
}

export default Header
