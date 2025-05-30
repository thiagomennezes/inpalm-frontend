import "react-native-reanimated";
import { ScrollView } from "react-native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { componentStyle } from "../shared/components/styles";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <ScrollView style={componentStyle.containerBgColor}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="protected" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{ headerShown: false }} />
      </Stack>
    </ScrollView>
  );
}
