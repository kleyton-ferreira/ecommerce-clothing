// COMPONENTS
import Header from '../../components/header/header-components'

// STYLES
import {
  LoginContainer,
  LoginContent,
  LoginHeadLine,
  LoginInputContainer,
  LoginSubtitle
} from './login.style'

const LoginPage = () => {
  return (
    <>
      <Header />
      <LoginContainer>
        <LoginContent>
          <LoginHeadLine>Entre com a sua conta</LoginHeadLine>
          {/* BUTTON */}
          <LoginSubtitle>ou entre com o seu e-mail</LoginSubtitle>
          <LoginInputContainer></LoginInputContainer>
          <LoginInputContainer></LoginInputContainer>
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default LoginPage
