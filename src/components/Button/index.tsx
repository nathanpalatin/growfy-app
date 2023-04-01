import { TouchableOpacityProps } from "react-native";
import { Container, Text } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
};

export function Button({ title }: Props) {
  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  );
}
