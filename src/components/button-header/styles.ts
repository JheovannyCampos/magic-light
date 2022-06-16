import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
  width: fit-content;
  margin: 1rem;
  cursor: pointer;
`;

export const Title = styled.span`
  font-family: roboto;
  font-size: 22px;
  color: #8f8d8d;
  margin: 0 auto;

  :hover {
    display: block;
    content: "";
    color: #0286ad;
    border-bottom: 2px solid #ffd000;
  }
`;
