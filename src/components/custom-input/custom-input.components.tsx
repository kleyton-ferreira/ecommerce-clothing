import React, { FunctionComponent, InputHTMLAttributes } from 'react'

// STYLE
import { CustomInputContainer } from './custom-input.style'

interface CustomInputsProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

const CustomInput: FunctionComponent<CustomInputsProps> = React.forwardRef(
  (props, ref) => {
    return (
      <>
        <CustomInputContainer {...props} ref={ref as any} />
      </>
    )
  }
)

CustomInput.displayName = 'CustomInput'

export default CustomInput
