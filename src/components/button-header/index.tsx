import React, { ButtonHTMLAttributes } from "react";
import { Container, Title } from "./styles";

interface ButtonHeaderProps extends React.HTMLProps<HTMLButtonElement> {
  title: string;
  id: string;
  isFooter?: boolean;
}

const ButtonHeader = (Props: ButtonHeaderProps) => {
  const { title, id, isFooter } = Props;
  const scrollTo = (id: any) => {
    const ref = document.getElementById(id);
    ref?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container onClick={() => scrollTo(id)}>
      <Title isFooter={isFooter}>{title}</Title>
    </Container>
  );
};
export default ButtonHeader;
