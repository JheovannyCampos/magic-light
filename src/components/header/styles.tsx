import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #ffff;
  border-bottom: 10px solid #ffd000;
`;

export const Image = styled.img`
  width: 263px;
  margin-left: 7rem;

  @media screen and (max-width: 1200px) {
    width: 200px;
    margin-left: 0.5rem;
  }
`;
export const ButtonArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
