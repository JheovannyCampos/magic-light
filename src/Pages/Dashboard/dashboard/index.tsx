import React from "react";
import principalImg from "../../../assets/principal.jpg";
import { Container, Title, ImageContainer, SubTitle, AboutUs } from "./styles";

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
            filter: "contrast(70%)",
          }}
        />
      </ImageContainer>
      <AboutUs>
        <AboutUsTitle>Somos Magic Light</AboutUsTitle>
      </AboutUs>
    </Container>
  );
};

export default Dashboard;
