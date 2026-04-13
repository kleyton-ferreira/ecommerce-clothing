import { FunctionComponent } from 'react'

import { LabelText } from './input-label-style'

interface InputLabelProps {
  label: string
}

const InputLabel: FunctionComponent<InputLabelProps> = ({ label }) => {
  return (
    <>
      <LabelText> {label} </LabelText>
    </>
  )
}

export default InputLabel
