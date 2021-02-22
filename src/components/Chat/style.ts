import styled, { css } from 'styled-components'
export const Container = styled.button`
	width: 5rem;
	height: 5rem;

	position: fixed;
	z-index: 10;
	bottom: 64px;
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
			width: 2.5rem;
			height: 2.5rem;

			svg {
				width: 1.25rem;
				height: 1.25rem;
			}
		}

		@media (max-width: ${md}) {
			top: 15px;
			right: 15px;

			width: 2.5rem;
			height: 2.5rem;

			svg {
				width: 1.25rem;
				height: 1.25rem;
			}
		}
	`}
`
