import { Container, Text, Time, Indicator } from "./styles";

import { MealTypeStyleProps } from "./styles";

type MealCardProps = {
  text: String;
  time: String;
  type?: MealTypeStyleProps;
};

export const MealCard = ({
  text,
  time,
  type = "primary",
  ...rest
}: MealCardProps) => {
  return (
    <Container {...rest}>
      <Time>{time}</Time>
      <Text>{text}</Text>
      <Indicator type={type}></Indicator>
    </Container>
  );
};
