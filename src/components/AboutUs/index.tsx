import React from "react";
import { Container, Title, TextContainer, Text } from "./styles";

interface AboutUsProps {
  title: string;
  id: string;
}

const AboutUs = (Props: AboutUsProps) => {
  const { title, id } = Props;
  return (
    <Container id={id}>
      <Title>{title}</Title>
      <TextContainer>
        <Text>
          A Magic Light é uma empresa, comprometida com a democratização da
          energia solar no Brasil, através de investimentos e ações de
          transformação social e econômica, nas localidades onde atua. <br></br>{" "}
          <br></br> A equipe Magic Light é reconhecida pelo seu elevado
          conhecimento e comprometimento, e por isso temos todos muito orgulho
          de fazer parte dessa família e da história que estamos escrevendo.
          <br></br> <br></br>{" "}
        </Text>
      </TextContainer>
    </Container>
  );
};
export default AboutUs;
