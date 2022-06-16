import React, { ButtonHTMLAttributes } from "react";
import { Container, Title } from "./styles";

interface ButtonHeaderProps extends React.HTMLProps<HTMLButtonElement> {
  title: string;
  id: string;
}

const ButtonHeader = (Props: ButtonHeaderProps) => {
  const { title, id } = Props;
  const scrollTo = (id: any) => {
    const ref = document.getElementById(id);
    ref?.scrollIntoView();
  };

  return (
    <Container onClick={() => scrollTo(id)}>
      <Title>{title}</Title>
    </Container>
  );
};
export default ButtonHeader;
