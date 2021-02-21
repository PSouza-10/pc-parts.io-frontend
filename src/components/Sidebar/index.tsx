import { Container, Item, Overlay, Toggle } from './style'
import { items } from './items'
import { useState } from 'react'
export function Sidebar() {
	const [isOpen, setOpen] = useState(false)

	const toggle = () => {
		setOpen(!isOpen)
	}
	return (
		<>
			<Overlay visible={isOpen} onClick={toggle} />
			<Toggle onClick={toggle} />
			<Container open={isOpen}>
				{items.map(({ texto, tipo, image, accentColor }) => (
					<Item accentColor={accentColor}>
						<span className='icon-wrapper'>{image}</span>
						<h2 className='text'>{texto}</h2>
					</Item>
				))}
			</Container>
		</>
	)
}
