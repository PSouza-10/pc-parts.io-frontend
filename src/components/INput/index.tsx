import React from "react"
import { InputContainer } from "./style"

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: any
  icon?: React.DetailedReactHTMLElement<any, HTMLElement>
  [x: string]: any
}

export const TextInput: React.FC<InputProps> = ({
  onChange,
  label,
  icon,
  ...props
}) => {
  return (
    <InputContainer>
      <span className='icon-wrapper'>{icon}</span>
      <label htmlFor={props.name}>{label}</label>
      <input {...props} />
    </InputContainer>
  )
}
