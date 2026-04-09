import { BsGoogle } from 'react-icons/bs'

// COMPONENTS
import Header from '../../components/header/header-components'
import CustomButton from '../../components/custom-button/custom-button.components'

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
          <CustomButton startIcon={<BsGoogle size={18} />}>
            Entrar com o Google
          </CustomButton>
          <LoginSubtitle>ou entre com o seu e-mail</LoginSubtitle>
          <LoginInputContainer></LoginInputContainer>
          <LoginInputContainer></LoginInputContainer>
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default LoginPage
