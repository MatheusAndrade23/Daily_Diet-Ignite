import {
  Container,
  MealInfo,
  MealName,
  MealDescription,
  DateTitle,
  Date,
} from "./styles";

import { Button } from "@components/Button";
import { MealTag } from "@components/MealTag";
import { SecondaryHeader } from "@components/SecondaryHeader";

export const Meal = () => {
  return (
    <Container>
      <SecondaryHeader title="Refeição" />

      <MealInfo>
        <MealName>Sanduíche</MealName>
        <MealDescription>
          Sanduíche de pão integral com atum e salada de alface e tomate.
        </MealDescription>
        <DateTitle>Data e Hora</DateTitle>
        <Date>12/08/2022 às 16:00</Date>
        <MealTag isInDiet />

        <Button
          title="Editar refeição"
          icon="pencil"
          style={{ marginTop: "auto" }}
        />
        <Button title="Excluir refeição" icon="trash" type="secondary" />
      </MealInfo>
    </Container>
  );
};
