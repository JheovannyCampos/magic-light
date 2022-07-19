import styled from "styled-components";

export const ContainerMenu = styled.div`
  margin-right: 8rem;

  @media screen and (max-width: 876px) {
    flex-direction: row;
    margin-right: 1rem;
  }

  @media screen and (max-width: 480px) {
    margin-right: 1rem;
  }
`;
