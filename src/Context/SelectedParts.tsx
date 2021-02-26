import { createContext, useState } from 'react'

interface ISelected {
	component: string
	setComponent: React.Dispatch<React.SetStateAction<string>>
}
export const SelectedContext = createContext<ISelected>({
	component: '',
	setComponent: () => '',
})

const SelectedProvider: React.FC = ({ children }) => {
	const [component, setComponent] = useState('processador')

	return (
		<SelectedContext.Provider
			value={{
				component,
				setComponent,
			}}
		>
			{children}
		</SelectedContext.Provider>
	)
}
export default SelectedProvider
