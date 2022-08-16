import styled from "styled-components";

export const TextAreaForm = styled.textarea`
  width: 42.5rem;
  height: 7rem;
  resize: none;
  border: 2px solid #e5e5e5;
  border-radius: 5px;
  margin: 1rem;
  flex-wrap: nowrap;
  font-family: Roboto;
  font-weight: 300;
  font-size: 18px;

  @media screen and (max-width: 1280px) {
    font-size: 15px;
    margin-bottom: 0.5rem;
    width: 30.5rem;
    height: 5rem;
  }
  @media screen and (max-width: 1080px) {
    font-size: 15px;
    margin-bottom: 0.5rem;
    width: 22.5rem;
    height: 5rem;
  }

  @media screen and (max-width: 480px) {
    width: 20rem;
    height: 5rem;
  }
`;
