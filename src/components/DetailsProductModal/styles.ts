import styled, { css } from 'styled-components'

export const Container = styled.div`
	width: 100%;
	height: 100%;
	padding: 20px;

	display: flex;
	justify-content: space-between;

	&::-webkit-scrollbar {
		background-color: transparent;
		width: 5px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: var(--action-blue);
		border-radius: 0.3rem;
	}

	${({ theme: { xl, lg, md, sm } }) => css`
		@media (max-width: ${lg}) {
			flex-direction: column;
			overflow: auto;
		}
	`}
`

export const LeftSide = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;

	padding-right: 2rem;

	.UserWrapper {
		display: flex;

		padding: 0.5rem 1rem;

		background-color: #404040;
		border-radius: 0.5rem;

		img {
			margin-right: 1rem;
		}

		.ProfileContainer {
			display: flex;
			flex-direction: column;
			padding-top: 1rem;

			span {
				display: flex;
				align-items: center;
				margin-bottom: 1rem;

				.ProfileImage {
					border-radius: 50%;
					height: 3.6rem;
					width: 3.6rem;
				}

				h1 {
					font-size: 1.5rem;
					font-weight: bold;
				}
			}
			h2,
			h3 {
				font-size: 1rem;
				font-weight: 500;
				color: var(--icon);
			}
		}
	}

	.Description {
		margin-top: 1.5rem;

		h3 {
			font-size: 2.5rem;
			font-weight: bold;
		}

		p {
			font-size: 1.25rem;
			font-weight: 500;
			color: var(--icon);
		}
	}

	${({ theme: { xl, lg, md, sm } }) => css`
		@media (max-width: ${lg}) {
			padding-right: 0;

			.UserWrapper {
				.ProfileContainer {
					h1 {
						font-size: 1.2rem;
					}
					}
					h2,
					h3 {
						font-size: 0.75rem;
					}
				}
			}

			.Description {
				margin-bottom: 1rem;

				h3 {
					font-size: 2rem;
				}

				p {
					font-size: 1.1rem;
				}
			}
		}

		@media (max-width: ${md}) {
			
			.UserWrapper {
				flex-direction: column;
				align-items: center;

				img {
					margin-right: 0;
				}

				.ProfileContainer {
					justify-content: center;
					align-items: center;

					span {
						justify-content: center;

						.ProfileImage {
							margin-right: 0.5rem;
						}

						h1 {
							font-size: 1.15rem;
						}
					}
				}
			}
		}
	`}
`

export const RightSide = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;

	border-left: 2px solid #404040;
	border-radius: 5px;
	padding-left: 1rem;
	padding-bottom: 1rem;

	h2 {
		&::before {
			content: '->  ';
			color: var(--action-blue);
			font-size: 1.7rem;
		}
		margin-bottom: 1rem;
	}

	.AboutContainer {
		h3 {
			font-size: 2rem;
			font-weight: bold;
		}

		p {
			font-size: 1rem;
			font-weight: 500;
			color: var(--icon);
		}

		h2 {
			margin-top: 0.5rem;
			font-size: 1rem;
			font-weight: 400;
		}
	}

	${({ theme: { xl, lg, md, sm } }) => css`
		@media (max-width: ${lg}) {
			border-left: 0;
			padding-left: 0;
		}

		@media (max-width: ${md}) {
		}
	`}
`
