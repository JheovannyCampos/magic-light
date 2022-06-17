import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  align-items: flex-end;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 4rem;
  margin-right: 6rem;
  color: #ffd000;
`;

export const TextContainer = styled.div`
  max-width: 45rem;
`;

export const Text = styled.h2`
  font-weight: 300;
  color: #8f8d8d;
  margin-right: 2rem;
  text-align: justify;
`;

export const Image = styled.picture`
  width: 800px;
  height: auto;
  /* position: relative;
  border-radius: 5px;
  z-index: 10;
  bottom: 4rem;*/
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
