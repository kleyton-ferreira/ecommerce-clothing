// STYLES
import { InputErrorMessageContainer } from './input-error.style'

import { FunctionComponent } from 'react'

interface InputErrorMessageProps {
  children: string
}

const InputErrorMessage: FunctionComponent<InputErrorMessageProps> = ({
  children
}) => {
  return <InputErrorMessageContainer> {children} </InputErrorMessageContainer>
}

export default InputErrorMessage
