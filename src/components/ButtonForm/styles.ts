import styled from "styled-components";

export const Button = styled.button`
  /* position: relative; */
  width: 10rem;
  height: 3rem;
  border: 2px solid;
  border-radius: 50px;
  border-color: #ffd000;
  background-color: #ffffff;
  font-family: Roboto;
  font-weight: 500;
  font-size: 20px;
  color: #ffd000;
  transition-duration: 0.3s;
  cursor: pointer;

  /* :hover {
    transition-duration: 0.3s;
    width: 11.5rem;
    font-size: 23px;
  } */

  :active {
    background-color: #ffd000;
    color: #ffffff;
  }
`;
