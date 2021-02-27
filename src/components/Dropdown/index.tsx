import { useState } from 'react'
import { Container, Selected, List, ListItem } from './styles'
import { ArrowDown } from '../icons'
import { FlattenSimpleInterpolation } from 'styled-components'
interface DropDownitems {
	selected?: boolean
	itemId?: number | string
	content: any
	[x: string]: any
}

interface DropdownProps {
	items: DropDownitems[]
	selected?: string | number
	setSelected?: (newValue?: any) => any
	CSS?: FlattenSimpleInterpolation
}

const Dropdown: React.FC<DropdownProps> = ({
	items,
	selected,
	setSelected,
	CSS,
}) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleDropdown = () => setIsOpen(!isOpen)
	const selectedItem = items.find(({ itemId }) => itemId === selected)
	return (
		<Container CSS={CSS}>
			<Selected
				open={isOpen}
				onClick={handleDropdown}
				className='currently-selected'
			>
				<label className='label'>{selectedItem?.content}</label>
				<ArrowDown className='arrow' />
			</Selected>
			<List open={isOpen} className='dropdown-list'>
				{items.map((item, idx) => (
					<ListItem
						key={idx}
						{...item}
						onClick={() => {
							setSelected && setSelected(item.itemId)
							handleDropdown()
						}}
						className='dropdown-item'
					>
						{item.content}
					</ListItem>
				))}
			</List>
		</Container>
	)
}
export default Dropdown