import { useForm } from 'react-hook-form'

// ICONS
import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'

// COMPONENTS
import Header from '../../components/header/header-components'
import CustomButton from '../../components/custom-button/custom-button.components'
import CustomInput from '../../components/custom-input/custom-input.components'

// STYLES
import {
  LoginContainer,
  LoginContent,
  LoginHeadLine,
  LoginInputContainer,
  LoginSubtitle
} from './login.style'

interface LoginPageForm {
  password: string
  email: string
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginPageForm>()

  const handleSubmitPress = (data: any) => {
    console.log({ data })
  }

  console.log({ errors })

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

          <LoginInputContainer>
            <p>E-mail</p>
            <CustomInput
              type='email'
              hasError={!!errors?.email}
              placeholder='Digite seu email'
              {...register('email', { required: true })}
            />
          </LoginInputContainer>

          <LoginInputContainer>
            <p>Senha</p>
            <CustomInput
              type='password'
              hasError={!!errors?.password}
              placeholder='Digite sua senha'
              {...register('password', { required: true })}
            />
          </LoginInputContainer>

          <CustomButton
            startIcon={<FiLogIn size={18} />}
            onClick={() => handleSubmit(handleSubmitPress)()}
          >
            Entrar
          </CustomButton>
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default LoginPage
