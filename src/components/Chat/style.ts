import styled, { css } from 'styled-components'
export const Container = styled.button`
	width: 5rem;
	height: 5rem;

	position: fixed;
	z-index: 10;
	bottom: 16px;
	right: 26px;
	background-color: #6e83cf;
	display: flex;
	align-items: center;
	justify-content: center;

	svg {
		width: 2.5em;
		height: 2.5em;

		fill: #fff;
	}

	border-radius: 50%;
	transition: all 0.2s ease;

	&:hover {
		transform: translateY(-2px);
		filter: brightness(80%);

		svg {
			filter: brightness(110%);
		}
	}

	${({ theme: { xl, lg, md, sm } }) => css`
		@media (max-width: ${sm}) {
			width: 3rem;
			height: 3rem;
			bottom: 15px;
			right: 20px;
			svg {
				width: 1.25rem;
				height: 1.25rem;
			}
		}

		@media (max-width: ${md}) {
			width: 2.5rem;
			height: 2.5rem;

			svg {
				width: 1.25rem;
				height: 1.25rem;
			}
		}
	`}
`

export const Header = styled.div`
	margin: 1rem;
	color: var(--text-primary);

	textarea {
		background-color: var(--box-color);
		font-size: 1.3rem;
		border-color: var(--action-blue);
		border-radius: 0.4em;
		resize: none;

		margin: 1rem 0rem;
		padding: 1rem;

		width: 100%;
		height: 30rem;
	}

	.buttonContainer {
		display: flex;
		justify-content: space-between;

		.confirmButton,
		.denyButton {
			padding: 0.5rem;
			font-size: 1.2rem;
			text-transform: uppercase;
			width: 100rem;
			letter-spacing: 0.2rem;
			border: 2px solid var(--action-blue);
			color: var(--action-blue);
			margin: auto;
			margin: 1rem;

			cursor: pointer;

			&:hover {
				background-color: var(--action-blue);
				color: white;
			}
			transition: all 0.3s ease;
		}

		.denyButton {
			border: 2px solid var(--action-red);
			color: var(--action-red);

			&:hover {
				background-color: var(--action-red);
				color: white;
			}
		}
	}
`

export const MessageHeader = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;

	margin: 1rem;

	img {
		border-radius: 50%;
		width: 4.5rem;
		height: 4.5rem;
	}
`

export const Input = styled.div``
export const EmojiIcon = styled.div``
export const MessageContainer = styled.div``
export const Badges = styled.div``
export const SendIcon = styled.div``
