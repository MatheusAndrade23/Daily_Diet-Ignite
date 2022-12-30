import {
  Container,
  Header,
  ReturnButton,
  StatsText,
  StatsTitle,
  ReturnIcon,
  Stats,
  StatsSubtitle,
  InfoBlock,
  InfoTitle,
  InfoView,
} from "./styles";

import { useNavigation } from "@react-navigation/native";

export const GeneralStats = () => {
  const { navigate } = useNavigation();

  const handleReturnHome = () => {
    navigate("home");
  };

  return (
    <Container>
      <Header>
        <StatsTitle>30,21%</StatsTitle>
        <StatsText>das refeições dentro da dieta</StatsText>
        <ReturnButton onPress={handleReturnHome}>
          <ReturnIcon />
        </ReturnButton>
      </Header>

      <Stats>
        <StatsSubtitle>Estatísticas Gerais</StatsSubtitle>

        <InfoBlock>
          <InfoTitle>4</InfoTitle>
          <InfoView>melhor sequência de pratos dentro da dieta</InfoView>
        </InfoBlock>

        <InfoBlock>
          <InfoTitle>109</InfoTitle>
          <InfoView>refeições registradas</InfoView>
        </InfoBlock>

        <InfoBlock>
          <InfoTitle>32</InfoTitle>
          <InfoView>refeições dentro da dieta</InfoView>
        </InfoBlock>

        <InfoBlock>
          <InfoTitle>77</InfoTitle>
          <InfoView>refeições fora da dieta</InfoView>
        </InfoBlock>
      </Stats>
    </Container>
  );
};
