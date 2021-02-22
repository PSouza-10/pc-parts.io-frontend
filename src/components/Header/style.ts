import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: flex-end;
  padding-top: 1rem;
  align-items: center;
  .search-bar {
    height: 2.3rem;
    flex: 1;
    margin-right: 1rem;
    background-color: var(--box-color);
    border-radius: 1.2em;
    border: none;
    padding: 0.3rem 1rem;
  }
  .ball {
    margin-right: 1rem;
    border-radius: 50%;
    height: 2.6rem;
    width: 2.6rem;
    background-color: #fff;
  }
`;
