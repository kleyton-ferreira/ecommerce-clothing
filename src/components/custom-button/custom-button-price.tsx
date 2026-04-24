import React, { FunctionComponent, ButtonHTMLAttributes } from 'react'

// STYLES
import { CustomButtonContainers, IconContainers } from './ custom.button'

interface CustomButtomProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  startIcon?: React.ReactNode
}

const CustomButtonPrice: FunctionComponent<CustomButtomProps> = ({
  children,
  startIcon,
  ...rest
}) => {
  return (
    <>
      <CustomButtonContainers {...rest}>
        {startIcon && <IconContainers> {startIcon} </IconContainers>}
        {children}
      </CustomButtonContainers>
    </>
  )
}

export default CustomButtonPrice
