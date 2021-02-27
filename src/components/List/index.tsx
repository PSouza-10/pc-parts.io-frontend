import { Container, ListItem, ListItemProps } from './styles'

interface ListProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLUListElement>,
		HTMLUListElement
	> {
	items: ListItemProps[]
	action?: (
		event: React.MouseEvent<HTMLLIElement, MouseEvent>,
		item?: ListItemProps
	) => any
}

export const List: React.FC<ListProps> = ({
	className,
	items,
	action = () => '',
}) => {
	return (
		<Container className={className}>
			{items.map(({ label, icon, bottom, color }, idx) => (
				<ListItem
					color={color}
					bottom={bottom}
					onClick={(e) => action(e, items[idx])}
				>
					{icon}
					<label>{label}</label>
				</ListItem>
			))}
		</Container>
	)
}

export type { ListItemProps } from './styles'
