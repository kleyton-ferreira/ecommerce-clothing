import { FunctionComponent, InputHTMLAttributes } from 'react'

// STYLE
import { CustomInputContainer } from './custom-input.style'

interface CustomInputsProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

const CustomInput: FunctionComponent<CustomInputsProps> = ({
  hasError,
  ...rest
}) => {
  return (
    <>
      <CustomInputContainer hasError={hasError} {...rest} />
    </>
  )
}

export default CustomInput
