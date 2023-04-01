import { StatusBar } from "react-native";
import { Home } from "@screens/Home";
import { Error } from "@screens/Error";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  return (
    <>
      <StatusBar
        translucent
        hidden
        barStyle="light-content"
        backgroundColor="transparent"
      />
      {fontsLoaded ? <Home /> : <Error />}
    </>
  );
}
