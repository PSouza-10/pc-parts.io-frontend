import styled, { css } from 'styled-components'

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
interface IModalSize {
	top: string | '5vh'
	bottom: string | '5vh'
	left: string | '5vw'
	right: string | '5vw'
}
export const ModalContainer = styled.div<{
	visible: boolean
	size: IModalSize
}>`
	position: fixed;
	background-color: var(--base-color);
	z-index: 200;
	visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
	opacity: ${({ visible }) => (visible ? '1' : '0')};

	transition: all 0.2s ease;
	${({ size: { top, bottom, left, right } }) => css`
		top: ${top};
		bottom: ${bottom};
		right: ${left};
		left: ${right};
	`}

	display: flex;
	flex-direction: column;

	span {
		font-weight: 300;
		font-size: 14px;
	}
`
