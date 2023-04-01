import { Alert } from "react-native";
import { Button } from "@components/Button";
import { Footer } from "@components/Footer";
import { Container, Title, Subtitle, Input, Bg } from "./styles";

export function Home() {
  function handlePressBtn() {
    Alert.alert("Olá", "Bem-vindo!");
  }

  return (
    <Bg source={require("@assets/bg.jpg")} resizeMode="cover">
      <Container>
        <Title>Olá, tudo bem?</Title>
        <Subtitle>Bem-vindo(a) a melhor plataforma de estudos.</Subtitle>

        <Input placeholder="Usuário ou e-mail cadastrado" />
        <Input placeholder="Senha" secureTextEntry />

        <Button title="Acessar minha conta" onPress={() => handlePressBtn()} />

        <Footer title="2023 &copy; FDR Digital v1.0" />
      </Container>
    </Bg>
  );
}
