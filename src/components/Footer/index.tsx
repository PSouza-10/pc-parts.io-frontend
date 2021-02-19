import { Container } from './styles'
import { useState } from 'react'
import { SelectedParts } from '../SelectedParts'
import { ArrowUp } from '../icons'
export function Footer() {
	const [isOpen, setOpen] = useState(false)
	const handleOpen = () => setOpen(!isOpen)
	return (
		<Container open={isOpen}>
			<SelectedParts />

			<span className='footer-bar'>
				<h2>Preço Total</h2>
				<button className='confirm'></button>

				<button className='open-selected' onClick={handleOpen}>
					<ArrowUp />
				</button>
			</span>
		</Container>
	)
}
