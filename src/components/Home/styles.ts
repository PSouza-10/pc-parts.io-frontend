import styled, { css } from 'styled-components'

export const Container = styled.div`
	margin-left: 50px;
	display: flex;

	.container {
		margin-top: 4.43rem;

		/* padding-left: 25vw; */
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

    @media (max-width: ${sm}) {
      margin-left: 0;
      width: 100%;
      display:flex
      flex-direction:column;
   
       .container {
         width: 100%;
        padding: 0 5vw;
        
        .card{
           width:100%;
         }
        grid-template-columns: 1fr;
        grid-gap: 3rem 2rem;

      }
    }
  `}
`
