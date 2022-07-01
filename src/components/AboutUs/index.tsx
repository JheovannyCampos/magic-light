import React from "react";
import workingWebp from "./assets/working.webp";

import {
  Container,
  Title,
  TextContainer,
  Text,
  Content,
  Image,
} from "./styles";

interface AboutUsProps {
  title: string;
  id: string;
}

const AboutUs = (Props: AboutUsProps) => {
  const { title, id } = Props;
  return (
    <Container id={id}>
      <Content>
        <Image src={workingWebp} />
        <TextContainer>
          <Text>
            <Title>{title}</Title>
            {`A Magic Light é uma empresa, comprometida com a democratização da energia solar no Brasil, através de investimentos e ações de transformação social e econômica, nas localidades onde atua.`}
            <br />
            <br />
            {`A equipe Magic Light é reconhecida pelo seu elevado conhecimento e comprometimento, e por isso temos todos muito orgulho de fazer parte dessa família e da história que estamos escrevendo.`}
          </Text>
        </TextContainer>
      </Content>
    </Container>
  );
};
export default AboutUs;
