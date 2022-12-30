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

import { useNavigation } from "@react-navigation/native";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { MealCard } from "@components/MealCard";

export const Home = () => {
  const { navigate } = useNavigation();

  const handleAddNewMeal = () => {
    navigate("new-meal");
  };

  const handleShowStats = () => {
    navigate("general-stats");
  };

  return (
    <Container>
      <Header />

      <StatsCard>
        <StatsTitle>90,86%</StatsTitle>
        <StatsText>das refeições dentro da dieta</StatsText>
        <StatsButton onPress={handleShowStats}>
          <StatsIcon />
        </StatsButton>
      </StatsCard>

      <Meals>
        <MealsTitle>Refeições</MealsTitle>
        <Button title="Nova Refeição" icon="plus" onPress={handleAddNewMeal} />

        <MealCard time="20:00" text="X-Burguer" />
      </Meals>
    </Container>
  );
};
