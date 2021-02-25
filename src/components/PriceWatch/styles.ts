import styled from 'styled-components'

export const Container = styled.button`
	margin-right: 1rem;

	height: 2.6rem;
	width: 2.6rem;

	transition: background-color 0.2s;

	&:hover {
		background-color: #ffffff96;
	}
	svg {
		height: 100%;
		width: 100%;
	}
	img {
		border-radius: 50%;
	}
`

export const LoginContainer = styled.section`
	display: flex;
	flex-direction: column;
	flex: 1;
	.google-icon {
		display: flex;
		padding: 3rem 0;
		justify-content: center;
		svg {
			width: 10rem;
			height: 10rem;
		}
	}
	.google-login {
		padding: 0.5rem;
		font-size: 1.2rem;
		text-transform: uppercase;
		letter-spacing: 0.2rem;
		border: 2px solid var(--action-blue);
		color: var(--action-blue);
		margin: auto;
		&:hover {
			background-color: var(--action-blue);
			color: white;
		}
		transition: all 0.3s ease;
	}
`
