import styled from "styled-components";

export const Container = styled.div`
  display: flex !important;
  flex-direction: row !important;
  align-items: center;
  justify-content: space-between;
  background-color: #ffff;
  border-bottom: 10px solid #ffd000;

  @media screen and (max-width: 480px) {
    display: flex !important;
    flex-direction: row !important;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const Image = styled.img`
  width: 263px;
  margin-left: 7rem;

  @media screen and (max-width: 1200px) {
    width: 200px;
    margin-left: 0.5rem;
  }
  @media screen and (max-width: 480px) {
    width: 260px;
    margin-left: 0.5rem;
  }
`;
export const ButtonArea = styled.div`
  align-items: center;
  justify-content: space-around;
`;
