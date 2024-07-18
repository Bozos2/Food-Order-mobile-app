import { useEffect } from "react";
import { SplashScreen, Stack, Tabs } from "expo-router";
import { useFonts } from "expo-font";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Merienda-Black": require("../assets/fonts/Merienda-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Merienda-Bold.ttf"),
    "Merienda-ExtraBold": require("../assets/fonts/Merienda-ExtraBold.ttf"),
    "Merienda-Light": require("../assets/fonts/Merienda-Light.ttf"),
    "Merienda-Medium": require("../assets/fonts/Merienda-Medium.ttf"),
    "Merienda-Regular": require("../assets/fonts/Merienda-Regular.ttf"),
    "Merienda-Semibold": require("../assets/fonts/Merienda-SemiBold.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
