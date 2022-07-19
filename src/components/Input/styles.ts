import styled from "styled-components";

export const InputForm = styled.input`
  width: 20rem;
  height: 3rem;
  border: 2px solid #e5e5e5;
  border-radius: 5px;
  margin: 1rem;
  font-family: Roboto;
  font-weight: 300;
  font-size: 18px;

  @media screen and (max-width: 1280px) {
    font-size: 15px;
    margin-bottom: 0.5rem;
    width: 14rem;
    height: 2rem;
  }
  @media screen and (max-width: 1080px) {
    font-size: 15px;
    margin-bottom: 0.5rem;
    width: 10rem;
    height: 2rem;
  }
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    font-size: 15px;
    margin-bottom: 0.5rem;
    width: 15rem;
    height: 2rem;
  }
`;
