import styled, { css } from 'styled-components'

export const Container = styled.div`
	display: flex;
	overflow-y: scroll;
	max-height: 90vh;
	&::-webkit-scrollbar {
		background-color: #0000;
		width: 12px;
	}
	&::-webkit-scrollbar-thumb {
		background-color: var(--action-blue);
		border-radius: 0.3em;
	}
	.container {
		margin-top: 4.43rem;

		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 2.5rem 2rem;
	}
	${({ theme: { xl, lg, md, sm } }) => css`
    @media (max-width: ${xl}) {
      .container {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media (max-width: ${lg}) {
      .container {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (max-width: ${md}){
      .container {
        margin-left: 0;
      }
    }

    @media (max-width: ${sm}) {
      margin-left: 0;
      width: 100%;
      display:flex
      flex-direction:column;
       .container {
      padding: 0 5vh;
         width: 100%;
        
        
        .card{
           width:100%;
         }
        grid-template-columns: 1fr;
        grid-gap: 3rem 2rem;

      }
    }
  `}
`
