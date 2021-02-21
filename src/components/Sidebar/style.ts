import styled from 'styled-components'
import { MdMenu } from 'react-icons/md'
export const Container = styled.ul<{ open: boolean }>`
	position: fixed;
	left: 0;
	top: 0;
	bottom: 0;

	display: flex;
	flex-direction: column;

	background-color: var(--box-color);
	transition: max-width 0.3s ease;
	overflow: hidden;
	white-space: nowrap;
	z-index: 3;
	@media (max-width: 768px) {
		max-width: ${({ open }) => (open ? '100%' : '0')};
	}
`
interface ItemProps {
	selected?: boolean
	accentColor?: string
}

export const Item = styled.li<ItemProps>`
	display: flex;
	cursor: pointer;
	.icon-wrapper {
		width: 50px;
		height: 50px;
		padding: 5px 5px;
		.icon {
			height: 40px;
			width: 40px;
			fill: var(--icon);
		}
	}

	.text {
		padding: 10px;
		font-size: 1.1rem;
	}
	transition: all 0.2s ease;
	&:hover {
		background-color: var(--white-fade);

		.icon {
			fill: ${({ accentColor }) => `var(--${accentColor})`};
		}
	}
`
export const Overlay = styled.div<{ visible: boolean }>`
	visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
	background-color: #0008;
	position: fixed;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
`
export const Toggle = styled(MdMenu)`
	visibility: hidden;
	position: fixed;
	left: 15px;
	top: 15px;
	height: 35px;
	width: 35px;
	@media (max-width: 768px) {
		visibility: visible;
	}
`
