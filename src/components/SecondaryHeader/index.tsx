import { Container, ReturnIcon, Title, ReturnButton } from "./styles";

type SecondaryHeaderProps = {
  title: String;
};

export const SecondaryHeader = ({ title }: SecondaryHeaderProps) => {
  return (
    <Container>
      <ReturnButton>
        <ReturnIcon />
      </ReturnButton>
      <Title>{title}</Title>
    </Container>
  );
};
