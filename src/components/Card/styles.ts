import styled from 'styled-components'
import { AiOutlineEye } from 'react-icons/ai'

export const Container = styled.div`
	width: 13.59rem;
	height: 21.63rem;

	border: 0.0625rem solid var(--card-border-color);
	border-radius: 0px 0px 10px 10px;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	img {
		width: 100%;
		height: 12.5rem;
	}

	h4 {
		font-size: 17px;
		opacity: 0.7;
	}

	h3 {
		&::before {
			content: '->';
			color: var(--action-blue);
			font-size: 1.7rem;
		}
	}

	.text {
		margin-left: 10px;
		margin-top: auto;
	}

	.button-container {
		display: flex;

		flex-wrap: nowrap;
		height: 13%;

		button:not(.eye-button) {
			flex: 1;
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

	@media (max-width: ${({ theme: { sm } }) => sm}) {
		min-height: 70vh;
		img {
			flex: 0.9;
		}
	}
`
export const EyeIcon = styled(AiOutlineEye)`
	height: 22px;
	width: 22px;
	margin: 0 auto;
`
