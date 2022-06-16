import React from "react";
import principalImg from "../../../assets/principal.jpg";
import AboutUs from "../../../components/AboutUs";
import { Container, Title, ImageContainer, SubTitle } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Title>Reduza os custos de energia</Title>
      <SubTitle>
        Procuramos garantir o acesso à energia limpa e sustentável
      </SubTitle>
      <ImageContainer>
        <img
          src={principalImg}
          style={{
            maxWidth: "100%",
            height: "70%",
            filter: "contrast(75%)",
          }}
        />
      </ImageContainer>
      <AboutUs title="Somos Magic Light" />
    </Container>
  );
};

export default Dashboard;
