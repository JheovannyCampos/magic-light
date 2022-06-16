import React, { ButtonHTMLAttributes } from "react";
import { Container, Title } from "./styles";

interface ButtonHeaderProps extends React.HTMLProps<HTMLButtonElement> {
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
