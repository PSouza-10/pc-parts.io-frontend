import styled from 'styled-components'
import { AiOutlineEye } from 'react-icons/ai'

export const Container = styled.div`
	width: 15.5rem;
	height: fit-content;
	border: 0.0625rem solid var(--card-border-color);
	border-radius: 0px 0px 10px 10px;
	cursor: pointer;
	display: flex;
	flex-direction: column;

	transition: 0.2s;

	.img-wrapper {
		width: 100%;
		max-width: 100%;
		img {
			width: 100%;
		}
	}

	h4 {
		font-size: 17px;
		opacity: 0.7;
	}

	h3 {
		&::before {
			content: '->  ';
			color: var(--action-blue);
			font-size: 1.7rem;
		}
	}

	.text {
		margin: auto 0;
		margin-left: 10px;
	}

	.button-container {
		display: flex;

		flex-wrap: nowrap;
		height: 40px;

		button:not(.eye-button) {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: center;

			background-color: var(--action-dark-blue);
			border-radius: 0px 0px 0px 10px;
			transition: 0.3s;
			font-weight: 18px;
			font-size: 16px;

			&:hover {
				opacity: 0.7;
			}
		}

		.eye-button {
			flex-basis: 40%;
			background-color: transparent;
			display: flex;
			align-items: center;
			border-radius: 0px 0px 10px 0px;
			transition: 0.3s;

			&:hover {
				opacity: 0.8;
				background-color: var(--white-fade);
			}
		}
	}

	svg {
		height: 1.3rem;
		width: 1.3rem;
		margin: 0 auto;
	}

	&:hover {
		opacity: 0.8;
		transform: scale(1.01);
	}

	@media (max-width: ${({ theme: { sm } }) => sm}) {
		min-height: 50vh;
	}
`
