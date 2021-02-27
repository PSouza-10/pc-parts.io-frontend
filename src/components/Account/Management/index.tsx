import { Container, ConfigOptions, LogoutIcon } from './styles'
import { List, ListItemProps } from '../../List'
import { useState, useContext } from 'react'
import { MoneyIcon, GearIcon, PlusIcon } from '../../icons'
import { AuthContext } from '../../../Context/Auth'
interface Options {
	[x: string]: any
}

export default function Management() {
	const [selectedTab, setTab] = useState('minhas_vendas')
	const { logout } = useContext(AuthContext)
	const handleListClick = (
		e: React.MouseEvent<HTMLLIElement, MouseEvent>,
		item?: ListItemProps
	) => {
		if (item?.id) {
			if (item.id === 'logout') {
				logout()
			}
			if (item?.id) {
				setTab(item.id)
			}
		}
	}

	const listItems = [
		{
			id: 'minhas_vendas',
			icon: <MoneyIcon />,
			label: 'Minhas Vendas',
		},
		{
			id: 'configuracoes',
			icon: <GearIcon />,
			label: 'Configurações',
		},
		{
			id: 'logout',
			bottom: true,
			icon: <LogoutIcon />,
			label: 'Sair',
			color: '#c44',
		},
	]

	const options: Options = {
		minhas_vendas: <h1> Minhas Vendas </h1>,
		configuracoes: <h1> Configurações de conta </h1>,
		logout: <h1> Logout </h1>,
	}

	return (
		<Container>
			<List
				items={listItems}
				className='optionList'
				action={(e, item) => handleListClick(e, item)}
			/>
			<ConfigOptions>
				<section className='form-wrapper'>
					{options[selectedTab]}
				</section>
				<div className='save'>
					<button className='save-button'> Salvar</button>
				</div>
			</ConfigOptions>
		</Container>
	)
}
