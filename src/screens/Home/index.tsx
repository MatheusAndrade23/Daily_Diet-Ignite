import {
  Container,
  StatsCard,
  StatsButton,
  StatsTitle,
  StatsText,
  StatsIcon,
  Meals,
  MealsTitle,
} from "./styles";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { MealCard } from "@components/MealCard";

export const Home = () => {
  return (
    <Container>
      <Header />

      <StatsCard>
        <StatsTitle>90,86%</StatsTitle>
        <StatsText>das refeições dentro da dieta</StatsText>
        <StatsButton>
          <StatsIcon />
        </StatsButton>
      </StatsCard>

      <Meals>
        <MealsTitle>Refeições</MealsTitle>
        <Button title="Nova Refeição" icon="plus" />

        <MealCard time="20:00" text="X-Burguer" />
      </Meals>
    </Container>
  );
};
