import { Container } from './styles'
import { MoneyIcon, GearIcon, PlusIcon, EyeIcon } from '../icons'

export function List() {
	return (
		<Container>
			<ul>
				<li>
					<MoneyIcon />
					Minhas vendas
				</li>

				<li>
					<GearIcon />
					Configurações de conta
				</li>

				<li>
					<PlusIcon />
					Adicionar produto pra venda
				</li>
			</ul>
		</Container>
	)
}
