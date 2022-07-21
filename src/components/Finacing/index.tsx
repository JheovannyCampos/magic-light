import React from "react";
import bv from "./assets/bv.png";
import santander from "./assets/santander.png";
import caixa from "./assets/caixa.png";
import {
  Container,
  TextContainer,
  Title,
  Subtitle,
  ImageContainer,
  Image,
} from "./styles";

interface Props {
  id: string;
}

const Financing = (Props: Props) => {
  const { id } = Props;
  return (
    <Container id={id}>
      <TextContainer>
        <Title>Financiamentos</Title>
        <Subtitle>
          Oferecemos aos nossos clientes, energia limpa, sustentável e com
          financiamento facilitado
        </Subtitle>
      </TextContainer>
      <ImageContainer>
        <Image src={bv} />
        <Image src={santander} />
        <Image src={caixa} />
      </ImageContainer>
    </Container>
  );
};
export default Financing;
