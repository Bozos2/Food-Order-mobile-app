import { Stack } from "expo-router";
import { View, Text } from "react-native";
import CustomButton from "../../components/custom-button";

const DetailLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="[id]" options={{ headerShown: false }} />
      </Stack>
      <View className="bottom-0 left-0 relative h-24 bg-background">
        <CustomButton
          title="Add to cart"
          onPress={() => console.log("heheh")}
          containerStyles="w-72 h-14 mx-auto mt-3"
          textStyles="font-mbold text-2xl"
        ></CustomButton>
      </View>
    </>
  );
};

export default DetailLayout;
