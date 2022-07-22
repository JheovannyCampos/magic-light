import styled from "styled-components";

export const ContainerMenu = styled.div`
  margin-right: 8rem;

  @media screen and (max-width: 910px) {
    margin-right: 1rem;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const MenuDropdown = styled.div`
  @media screen and (min-width: 480px) {
    display: none;
  }
`;
