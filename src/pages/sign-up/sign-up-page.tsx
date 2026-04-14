import { useForm } from 'react-hook-form'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import validator from 'validator'

// STYLES
import {
  SignUpContainer,
  SignUpContent,
  SignUpHeadline,
  SignUpInputContainer
} from './sign-up-style'

// BUTTONS
import { FiLogIn } from 'react-icons/fi'

// COMPONENTS
import Header from '../../components/header/header-components'
import CustomInput from '../../components/custom-input/custom-input.components'
import InputLabel from '../../components/input-label/input-label-components'
import CustomButton from '../../components/custom-button/custom-button.components'
import InputErrorMessage from '../../components/input-error-message/input-error-message'
import { auth, db } from '../../config/firebase.config'

interface SignupForm {
  Firstname: string
  lastName: string
  email: string
  password: string
  passwordConfirmation: string
}

const SignUpPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch
  } = useForm<SignupForm>()

  const watchPassword = watch('password')

  const handleSignupClick = async (data: SignupForm) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )

      await addDoc(collection(db, 'users'), {
        id: userCredentials.user.uid,
        email: userCredentials.user.email,
        firstName: data.Firstname,
        lastName: data.lastName
      })

      console.log({ userCredentials })
    } catch (error) {
      console.log(error)
    }
  }

  console.log({ errors })

  return (
    <>
      <Header />
      <SignUpContainer>
        <SignUpContent>
          <SignUpHeadline>Crie a sua conta</SignUpHeadline>

          <SignUpInputContainer>
            <InputLabel label='Nome' />
            <CustomInput
              type='text'
              hasError={!!errors?.Firstname}
              placeholder='Digite seu nome'
              {...register('Firstname', {
                required: true
              })}
            />
            {errors?.Firstname?.type === 'required' && (
              <InputErrorMessage>O nome e obrigatório.</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <InputLabel label='Sobrenome' />
            <CustomInput
              type='text'
              hasError={!!errors?.lastName}
              placeholder='Digite seu sobrenome'
              {...register('lastName', {
                required: true
              })}
            />
            {errors?.lastName?.type === 'required' && (
              <InputErrorMessage>O sobrenome e obrigatório.</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <InputLabel label='E-mail' />
            <CustomInput
              type='email'
              hasError={!!errors?.email}
              placeholder='Digite seu e-mail.'
              {...register('email', {
                required: true,
                validate: (value) => {
                  return validator.isEmail(value)
                }
              })}
            />
            {errors?.email?.type === 'required' && (
              <InputErrorMessage>O e-mail e obrigatório.</InputErrorMessage>
            )}

            {errors?.email?.type === 'validate' && (
              <InputErrorMessage>
                Por favor insira um e-mail válido.
              </InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <InputLabel label='Senha' />
            <CustomInput
              type='password'
              hasError={!!errors?.password}
              placeholder='Digite sua senha.'
              {...register('password', { required: true })}
            />
            {errors?.password?.type === 'required' && (
              <InputErrorMessage>A senha e obrigatório.</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <InputLabel label='Confirmaçao de senha' />
            <CustomInput
              type='password'
              hasError={!!errors?.passwordConfirmation}
              placeholder='Comfirme sua senha.'
              {...register('passwordConfirmation', {
                required: true,
                validate: (value) => {
                  return value === watchPassword
                }
              })}
            />
            {errors?.passwordConfirmation?.type === 'required' && (
              <InputErrorMessage>
                A confirmação de senha e obrigatório.
              </InputErrorMessage>
            )}

            {errors?.passwordConfirmation?.type === 'validate' && (
              <InputErrorMessage>Senhas não conferem.</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <CustomButton
            startIcon={<FiLogIn size={18} />}
            onClick={() => handleSubmit(handleSignupClick)()}
          >
            Criar Conta
          </CustomButton>
        </SignUpContent>
      </SignUpContainer>
    </>
  )
}

export default SignUpPage
