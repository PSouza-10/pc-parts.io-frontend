import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

export const Overlay = styled.div<{ visible: boolean }>`
	position: fixed;

	z-index: 199;
	visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
	background-color: var(--modal-overlay);
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
`
export interface IModalSize {
	top?: string
	bottom?: string
	left?: string
	right?: string
}
interface IModalProps {
	visible: boolean
	size: IModalSize
	headerCSS?: FlattenSimpleInterpolation | string
	transition?: 'bottom' | 'left' | 'right' | 'top' | ''
}
const position = (transition: string, visible: boolean) => {
	const relPos = visible ? '0%' : '200%'
	const prefix = ['left', 'top'].includes(transition) ? '-' : ''
	switch (transition) {
		case 'top':
		case 'bottom':
			return `translateY(${prefix + relPos})`
		case 'right':
		case 'left':
			return `translateX(${prefix + relPos})`
	}
}
export const ModalContainer = styled.div<IModalProps>`
	position: fixed;
	background-color: var(--base-color);
	z-index: 200;
	visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
	opacity: ${({ visible }) => (visible ? '1' : '0')};

	transition: all 0.4s ease;
	${({ theme: { md }, size: { top, bottom, left, right } }) => css`
		top: ${top};
		bottom: ${bottom};
		right: ${left};
		left: ${right};

		@media (max-width: ${md}) {
			top: 5vh;
			bottom: 5vh;
			right: 5vw;
			left: 5vw;
		}
	`}

	${({ transition, visible }) =>
		transition &&
		css`
			transform: ${position(transition, visible)};
		`}
	display: flex;
	flex-direction: column;

	.modal-header {
		height: 50px;
		display: flex;
		border-bottom: 2px solid var(--action-blue);
		.modal-header-title {
			margin-left: 1rem;
			font-size: 1.5rem;
		}

		.modal-header-close {
			margin-left: auto;
			padding: 5px;
			svg {
				width: 40px;
				height: 40px;
			}
			&:hover {
				background-color: var(--white-fade);
				svg {
					fill: var(--action-blue);
				}
			}
		}

		${({ headerCSS, theme }) => headerCSS || theme.headerCSS || ''}
	}
`
