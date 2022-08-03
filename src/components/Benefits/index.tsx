import React from "react";
import benefits from "./assets/benefits.jpg";
import mariana from "./assets/mariana.jpg";
import { BsSun } from "react-icons/bs";
import { ContainerTop, Title, SubTitle, Image, CardText, Text } from "./styles";

interface BenefitsProps {
  title: string;
}

const Benefits = (Props: BenefitsProps) => {
  const { title } = Props;
  return (
    <ContainerTop id="benefits">
      <Title>{title}</Title>
      <SubTitle>
        Veja abaixo um comparativo que apresenta todas as vantagens em ser um
        cliente Magic Light.
      </SubTitle>
      <Image src={benefits} />
      <CardText>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <BsSun
            style={{ fontSize: "28px", color: "#ffd000", marginRight: "10px" }}
          />
          <Text>Previsibilidade anual dos custos com energia!</Text>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <BsSun
            style={{ fontSize: "28px", color: "#ffd000", marginRight: "10px" }}
          />
          <Text>Ajustável a qualquer orçamento!</Text>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <BsSun
            style={{ fontSize: "28px", color: "#ffd000", marginRight: "10px" }}
          />
          <Text>Compartilhar os custos e créditos gerados!</Text>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <BsSun
            style={{ fontSize: "28px", color: "#ffd000", marginRight: "10px" }}
          />
          <Text>Monitoramento pela Internet!</Text>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <BsSun
            style={{ fontSize: "28px", color: "#ffd000", marginRight: "10px" }}
          />
          <Text>Valorização do seu imóvel!</Text>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <BsSun
            style={{ fontSize: "28px", color: "#ffd000", marginRight: "10px" }}
          />
          <Text>Energia limpa e sustentável!</Text>
        </div>
      </CardText>
    </ContainerTop>
  );
};
export default Benefits;
