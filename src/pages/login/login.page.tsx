import { useForm } from 'react-hook-form'
import validator from 'validator'
import {
  AuthError,
  AuthErrorCodes,
  signInWithEmailAndPassword
} from 'firebase/auth'
import { auth, db } from '../../config/firebase.config'

// ICONS
import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'

// COMPONENTS
import Header from '../../components/header/header-components'
import CustomButton from '../../components/custom-button/custom-button.components'
import CustomInput from '../../components/custom-input/custom-input.components'
import InputErrorMessage from '../../components/input-error-message/input-error-message'
import InputLabel from '../../components/input-label/input-label-components'

// STYLES
import {
  LoginContainer,
  LoginContent,
  LoginHeadLine,
  LoginInputContainer,
  LoginSubtitle
} from './login.style'
import { addDoc, collection } from 'firebase/firestore'

interface LoginPageForm {
  password: string
  email: string
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<LoginPageForm>()

  const handleSubmitPress = async (data: LoginPageForm) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )
      console.log({ userCredential })
    } catch (error) {
      const _error = error as AuthError
      if (_error.code === 'auth/invalid-login-credentials') {
        setError('password', {
          type: 'manual'
        })
      }
    }
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
            <InputLabel label='E-mail' />
            <CustomInput
              type='email'
              hasError={!!errors?.email}
              placeholder='Digite seu email'
              {...register('email', {
                required: true,
                validate: (value) => {
                  return validator.isEmail(value)
                }
              })}
            />
            {errors?.email?.type === 'required' && (
              <InputErrorMessage> O email e obrigatório. </InputErrorMessage>
            )}
            {errors?.email?.type === 'validate' && (
              <InputErrorMessage>
                Por favor insira um e-mail válido.
              </InputErrorMessage>
            )}
          </LoginInputContainer>

          <LoginInputContainer>
            <InputLabel label='Senha' />
            <CustomInput
              type='password'
              hasError={!!errors?.password}
              placeholder='Digite sua senha'
              {...register('password', { required: true })}
            />
            {errors?.password?.type === 'required' && (
              <InputErrorMessage> O senha e obrigatória. </InputErrorMessage>
            )}

            {errors?.password?.type === 'manual' && (
              <InputErrorMessage> Senha ou email inválido. </InputErrorMessage>
            )}
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
