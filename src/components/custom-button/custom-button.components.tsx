import React, { FunctionComponent, ButtonHTMLAttributes } from 'react'

// STYLES
import { CustomButtonContainer, IconContainer } from './ custom.button'

interface CustomButtomProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  startIcon?: React.ReactNode
}

const CustomButton: FunctionComponent<CustomButtomProps> = ({
  children,
  startIcon,
  ...rest
}) => {
  return (
    <>
      <CustomButtonContainer {...rest}>
        {startIcon && <IconContainer> {startIcon} </IconContainer>}
        {children}
      </CustomButtonContainer>
    </>
  )
}

export default CustomButton
