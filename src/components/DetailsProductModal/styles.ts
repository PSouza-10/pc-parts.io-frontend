import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	height: 100%;
	padding: 20px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export const LeftSide = styled.div`
	h2 {
		&::before {
			content: '->  ';
			color: var(--action-blue);
			font-size: 1.7rem;
		}
		margin-bottom: 1rem;
	}

	.DescriptionContainer {
		h3 {
			font-weight: 600;
			font-size: 1.5rem;
		}

		p {
			margin: 0.5rem;
		}
	}

	.ProfileContainer {
		background-color: #404040;
		border-radius: 0.5rem;

		display: flex;
		align-items: center;
		justify-content: flex-start;

		.ProfileImage {
			border-radius: 50%;
			height: 3.6rem;
			width: 3.6rem;
			margin: 0.5rem 1rem;
		}

		.username {
		}
	}
`

export const RightSide = styled.div`
	.AboutContainer {
	}
`
