import styled from 'styled-components'

export const Container = styled.ul<{ color?: string }>`
	display: flex;
	flex-direction: column;

	height: 100%;
	font-size: 0.9rem;
`

export interface ListItemProps
	extends React.DetailedHTMLProps<
		React.LiHTMLAttributes<HTMLLIElement>,
		HTMLLIElement
	> {
	icon?: JSX.Element
	label?: any
	bottom?: boolean
	color?: string
}

export const ListItem = styled.li<ListItemProps>`
	display: flex;
	align-items: center;
	justify-content: flex-start;

	padding: 0.3em;
	transition: background-color 0.2s;
	&,
	& > * {
		cursor: pointer;
	}

	&:hover {
		background-color: var(--white-fade);
	}
	label {
		font-size: 1.3em;
	}
	svg {
		flex-shrink: 0;
		height: 2em;
		width: 2em;
		fill: ${({ color }) => (color ? color : 'var(--icon)')};
		margin-right: 1em;
	}

	${({ bottom }) => bottom && 'margin-top:auto'};
`
