import styled from 'styled-components'

export const Container = styled.ul`
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

	max-width: 50px;

	&:hover {
		max-width: 100%;
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
		font-size: 1.3rem;
	}
	transition: all 0.2s ease;
	&:hover {
		background-color: var(--white-fade);

		.icon {
			fill: ${({ accentColor }) => `var(--${accentColor})`};
		}
	}
`
