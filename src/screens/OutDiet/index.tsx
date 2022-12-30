import { Container, Title, Subtitle, Image } from "./styles";

import outDiet from "../../assets/outDiet.png";
import { Button } from "@components/Button";

export const OutDiet = () => {
  return (
    <Container>
      <Title>Que pena!</Title>
      <Subtitle>
        Você saiu da dieta dessa vez, mas continue se esforçando e não desista!
      </Subtitle>
      <Image source={outDiet} />
      <Button title="Ir para a página inicial" style={{ width: 200 }} />
    </Container>
  );
};
