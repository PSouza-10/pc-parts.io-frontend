import { Container, ConfigOptions, LogoutIcon } from './styles'
import { List, ListItemProps } from '../../List'
import { useState, useContext } from 'react'
import { MoneyIcon, GearIcon, PlusIcon } from '../../icons'
import { AuthContext } from '../../../Context/Auth'
import { Forms } from '../Forms'
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

	return (
		<Container>
			<List
				items={listItems}
				className='optionList'
				action={(e, item) => handleListClick(e, item)}
			/>
			<ConfigOptions>
				<section className='form-wrapper'>{Forms[selectedTab]}</section>
				<div className='save'>
					<button className='save-button'> Salvar</button>
				</div>
			</ConfigOptions>
		</Container>
	)
}
