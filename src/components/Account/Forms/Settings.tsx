import { TextInput } from '../../Input'
import Dropdown, { DropDownitems } from '../../Dropdown'
import { useState, useEffect } from 'react'
import axios from 'axios'
interface SettingsData {
	cidade: number
	greeting: string
	estado: number
}
export const Settings: React.FC = () => {
	const [states, setStates] = useState<DropDownitems[]>([])
	const [cities, setCities] = useState<DropDownitems[]>([])

	const [settingsData, setData] = useState<SettingsData>({
		greeting: 'Olá! Obrigado por me contatar, já respondo',
		estado: 1,
		cidade: 0,
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

		getStates().then((names) => {
			setStates(names)
			setData({
				...settingsData,
				estado: names[0].itemId,
			})
		})
	}, [])

	useEffect(() => {
		const getCities = async () => {
			const { data } = await axios.get(
				`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${settingsData.estado}/municipios`
			)
			const cidades = data.map(
				({ nome, id }: { [x: string]: number | string }) => {
					return {
						content: nome,
						itemId: id,
						selected: false,
					}
				}
			)
			return cidades
		}

		getCities().then((cidades) => {
			if (cidades.length > 0) {
				setCities(cidades)

				setData({
					...settingsData,
					cidade: cidades[0].itemId || 0,
				})
			}
		})
	}, [settingsData.estado])

	return (
		<>
			<h2>Escolha uma resposta automática para seus clientes </h2>
			<TextInput
				label='Resposta automatizada'
				value={settingsData.greeting}
				onChange={handleChange}
				name='greeting'
			/>
			<h2>Em que estado você mora?</h2>

			{states.length > 0 ? (
				<Dropdown
					items={states}
					selected={settingsData.estado}
					setSelected={(newVal) =>
						handleChange({
							target: { name: 'estado', value: newVal },
						})
					}
					layer={2}
				/>
			) : null}
			<h2>Em que cidade você mora?</h2>
			{cities.length > 0 ? (
				<Dropdown
					items={cities}
					selected={settingsData.cidade}
					setSelected={(newVal) =>
						handleChange({
							target: { name: 'cidade', value: newVal },
						})
					}
					layer={1}
				/>
			) : null}
		</>
	)
}
