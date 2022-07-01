import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 15rem;
  background-color: #0992bb;
  justify-content: space-around;
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const AddressText = styled.h3`
  color: white;
  font-family: Roboto;
  font-weight: 300;
  margin-bottom: 0;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const ContactText = styled.h2`
  color: white;
  font-family: Roboto;
  font-weight: 300;
  margin-bottom: 0;
  cursor: pointer;
`;

export const FooterMenu = styled.div`
  display: flex;
  flex-direction: column;
`;
