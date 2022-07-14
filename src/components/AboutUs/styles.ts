import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 3rem;
  color: #ffd000;
`;

export const TextContainer = styled.div`
  width: 45rem;

  @media screen and (max-width: 400px) {
    width: 385px;
    margin-bottom: 20px;
  }
`;

export const Text = styled.h2`
  font-weight: 300;
  color: #8f8d8d;
  margin-right: 2rem;
  text-align: justify;

  @media screen and (max-width: 400px) {
    text-align: center;
    font-size: 18px;
    margin: 0;
  }
`;

export const Image = styled.img`
  width: 100%;
  margin: 3rem 1rem 3rem 5rem;
  border-radius: 10px;

  @media screen and (max-width: 400px) {
    width: 100%;
    height: 100%;
    margin: 0;
    border-radius: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 400px) {
    flex-direction: column-reverse;
  }
`;
