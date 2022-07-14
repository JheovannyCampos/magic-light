import styled from "styled-components";

export const ContainerMenu = styled.div`
  display: flex;
  margin-right: 8rem;

  @media screen and (max-width: 876px) {
    flex-direction: row;
    margin-right: 1rem;
  }

  @media screen and (max-width: 400px) {
    flex-direction: column;
    margin-right: 1rem;
  }
`;
