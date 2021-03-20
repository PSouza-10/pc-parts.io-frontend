import React from 'react'
import { InputContainer } from './style'
import { IoMdEye } from 'react-icons/io'

interface InputProps
	extends React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	label?: string
	icon?: JSX.Element
	[x: string]: any
}

export const TextInput: React.FC<InputProps> = ({
	onChange,
	label,
	icon,
	...props
}) => {
	return (
		<InputContainer className='input-wrapper'>
			<span className='icon-wrapper'>{icon}</span>
			<input onChange={onChange} {...props} />
			<label htmlFor={props.name}>{label}</label>
		</InputContainer>
	)
}
