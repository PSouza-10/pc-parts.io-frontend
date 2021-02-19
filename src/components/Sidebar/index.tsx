import { Container, Item } from './style'
import * as Icons from '../icons'

export function Sidebar() {
	const items = [
		{
			texto: 'Processador',
			tipo: 'processador',
			image: <Icons.Processor className='icon' />,
			accentColor: 'red',
		},
		{
			texto: 'Placa Mãe',
			tipo: 'placa_mae',
			image: <Icons.MotherBoard className='icon' />,
			accentColor: 'green',
		},
		{
			texto: 'Placa de Video',
			tipo: 'placa_de_video',
			image: <Icons.GPU className='icon' />,
			accentColor: 'blue',
		},
		{
			texto: 'Mémoria RAM',
			tipo: 'memoria_ram',
			image: <Icons.RAM className='icon' />,
			accentColor: 'pink',
		},
		{
			texto: 'Fonte',
			tipo: 'fonte',
			image: <Icons.PowerSupply className='icon' />,
			accentColor: 'purple',
		},
		{
			texto: 'Gabinete',
			tipo: 'gabinete',
			image: <Icons.Case className='icon' />,
			accentColor: 'yellow',
		},
	]

	return (
		<Container>
			{items.map(({ texto, tipo, image, accentColor }) => (
				<Item accentColor={accentColor}>
					<span className='icon-wrapper'>{image}</span>
					<h2 className='text'>{texto}</h2>
				</Item>
			))}
		</Container>
	)
}
