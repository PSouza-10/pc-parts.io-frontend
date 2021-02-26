import styled, { FlattenSimpleInterpolation } from 'styled-components'

export const Container = styled.div<{ CSS?: FlattenSimpleInterpolation }>`
	position: relative;
	display: flex;
	flex-direction: column;

	min-height: 36px;
	height: 2rem;
	width: 90%;
	margin: 0 auto;
	background-color: var(--base-color);
`

export const Selected = styled.div<{ open?: boolean }>`
	flex: 1;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 0.5rem;
	display: flex;
	justify-content: space-between;
	cursor: pointer;
	display: flex;
	align-items: center;
	&:hover {
		background-color: var(--white-fade);
	}
	.label {
		flex: 1;
		font-size: 1.2rem;
		cursor: pointer;
	}
	.arrow {
		height: 1em;
		width: 1em;
		transform: ${({ open }) => `rotate(${open ? '180deg' : '0deg'})`};
		fill: white;
		transition: all 0.2s ease;
	}
`
export const List = styled.ul<{ open: boolean }>`
	position: absolute;
	visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
	max-height: ${({ open }) => (open ? '1000%' : '0')};
	transition: all 0.2s ease;
	background-color: var(--base-color);
	overflow: hidden;
	right: 0;
	left: 0;
	top: 100%;

	display: flex;
	flex-direction: column;
`
interface IListItem {
	isSelected?: boolean
	onClick?: () => any
}
export const ListItem = styled.li<IListItem>`
	min-height: 2rem;
	cursor: pointer;
	color: ${({ isSelected }) => (isSelected ? 'var(--action-blue)' : 'white')};
	font-size: 0.9rem;
	&:hover {
		background-color: var(--white-fade);
	}
	padding: 0.5em;
`
