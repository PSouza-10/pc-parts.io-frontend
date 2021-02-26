import { Container, Item, Overlay, Toggle } from './style'
import { items } from './items'
import { useState, useContext } from 'react'
import { MdMenu } from 'react-icons/md'
import Dropdown from '../Dropdown'
import { SelectedContext } from '../../Context/SelectedParts'
export function Sidebar() {
	const [isOpen, setOpen] = useState(false)

	const toggle = () => {
		setOpen(!isOpen)
		document.body.style.overflowY = !isOpen ? 'hidden' : 'initial'
	}
	const { component, setComponent } = useContext(SelectedContext)

	return (
		<>
			<Overlay visible={isOpen} onClick={toggle} />
			<Toggle onClick={toggle}>
				<MdMenu className='toggle-icon' />
			</Toggle>
			<Container open={isOpen}>
				{items.map(({ texto, tipo, image, accentColor }, idx) => (
					<Item
						accentColor={accentColor}
						key={idx}
						onClick={() => setComponent(tipo)}
						selected={component === tipo}
					>
						<span className='icon-wrapper'>{image}</span>
						<h2 className='text'>{texto}</h2>
					</Item>
				))}
			</Container>
		</>
	)
}
