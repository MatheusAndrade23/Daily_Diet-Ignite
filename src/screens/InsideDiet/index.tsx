import { Container, Title, Subtitle, Image } from "./styles";

import insideDiet from "../../assets/insideDiet.png";
import { Button } from "@components/Button";

export const InsideDiet = () => {
  return (
    <Container>
      <Title>Continue assim!</Title>
      <Subtitle>Você continua dentro da dieta! Muito bem!</Subtitle>
      <Image source={insideDiet} />
      <Button title="Ir para a página inicial" style={{ width: 200 }} />
    </Container>
  );
};
