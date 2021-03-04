import { TextInput } from '../../Input'
import Dropdown, { DropDownitems } from '../../Dropdown'
import { useState, useEffect } from 'react'
import axios from 'axios'

export const Settings: React.FC = () => {
	const [states, setStates] = useState<DropDownitems[]>([])

	const [settingsData, setData] = useState({
		greeting: 'Olá! Obrigado por me contatar, já respondo',
		estado: 1,
	})

	const handleChange = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| { target: { name: string; value: any } }
	) => {
		const { name, value } = e.target

		setData({
			...settingsData,
			[name]: value,
		})
	}

	useEffect(() => {
		const getStates = async () => {
			const { data } = await axios.get(
				'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
			)
			const estados = data.map(
				({ nome, id }: { [x: string]: number | string }) => {
					return {
						content: nome,
						itemId: id,
						selected: false,
					}
				}
			)
			return estados
		}
		//Se vc ler isso tu é retardado
		getStates().then((names) => {
			setStates(names)
		})
	}, [])

	return (
		<>
			<TextInput
				label='Resposta automatizada'
				value={settingsData.greeting}
				onChange={handleChange}
				name='greeting'
			/>
			{states.length > 0 ? (
				<Dropdown
					items={states}
					selected={settingsData.estado}
					setSelected={(newVal) =>
						handleChange({
							target: { name: 'estado', value: newVal },
						})
					}
				/>
			) : null}
		</>
	)
}
