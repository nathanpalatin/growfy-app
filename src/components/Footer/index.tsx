import { Container, Text } from "./styles";

type Props = {
  title: string;
};

export function Footer({ title }: Props) {
  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  );
}
