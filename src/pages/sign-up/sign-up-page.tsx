import { useForm } from 'react-hook-form'

// STYLES
import {
  SignUpContainer,
  SignUpContent,
  SignUpHeadline,
  SignUpInputContainer
} from './sign-up-style'

// COMPONENTS
import Header from '../../components/header/header-components'
import CustomInput from '../../components/custom-input/custom-input.components'
import InputLabel from '../../components/input-label/input-label-components'
import CustomButton from '../../components/custom-button/custom-button.components'
import { FiLogIn } from 'react-icons/fi'
import InputErrorMessage from '../../components/input-error-message/input-error-message'
import validator from 'validator'

interface SignupForm {
  name: string
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

  const handleSignupClick = (data: any) => {
    console.log({ data })
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
              hasError={!!errors?.name}
              placeholder='Digite seu nome'
              {...register('name', {
                required: true
              })}
            />
            {errors?.name?.type === 'required' && (
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
