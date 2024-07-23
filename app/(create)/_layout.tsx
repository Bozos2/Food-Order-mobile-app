import { Stack } from "expo-router";
import { View, Text } from "react-native";
import CustomButton from "../../components/custom-button";

const CreateLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="create-pizza" options={{ headerShown: false }} />
        <Stack.Screen name="create-burger" options={{ headerShown: false }} />
        <Stack.Screen
          name="create-ice-cream"
          options={{ headerShown: false }}
        />
      </Stack>
      <View className="bottom-0 left-0 relative h-24 bg-background flex flex-row justify-around mb-2">
        <Text className="text-3xl font-msemibold self-center">€14.00</Text>
        <CustomButton
          title="Add to cart"
          onPress={() => console.log("heheh")}
          containerStyles="w-44 h-14 mt-3"
          textStyles="font-mbold text-2xl"
        />
      </View>
    </>
  );
};

export default CreateLayout;
