import React from "react";
import { Container, Title } from "./styles";

interface ButtonHeaderProps {
  title: string;
}

const ButtonHeader = (Props: ButtonHeaderProps) => {
  const { title } = Props;
  return (
    <Container onClick={() => {}} id="Container">
      <Title>{title}</Title>
    </Container>
  );
};
export default ButtonHeader;
