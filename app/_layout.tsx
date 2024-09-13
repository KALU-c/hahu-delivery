import { SplashScreen, Stack } from "expo-router"
import { useFonts } from "expo-font"
import { useEffect } from "react";
import { StatusBar } from "react-native";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Sen-Bold": require("@/assets/fonts/Sen-Bold.ttf"),
    "Sen-ExtraBold": require("@/assets/fonts/Sen-ExtraBold.ttf"),
    "Sen-Medium": require("@/assets/fonts/Sen-Medium.ttf"),
    "Sen-Regular": require("@/assets/fonts/Sen-Regular.ttf"),
    "Sen-SemiBold": require("@/assets/fonts/Sen-SemiBold.ttf")
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
    </>
  )
}

export default RootLayout