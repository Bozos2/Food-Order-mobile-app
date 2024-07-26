import { Stack } from "expo-router";
import { View, Text, Alert } from "react-native";
import CustomButton from "../../components/custom-button";
import { router } from "expo-router";

import { useAppContext } from "../../context/global-provider";
import customImg from "../../assets/images/custom-meal.png";

const CreateLayout = () => {
  const { price, addToCart, ingredients, cart } = useAppContext();

  const handleAddToCart = () => {
    addToCart({
      id: (cart.length + 50).toString(),
      title: "Custom Meal",
      price,
      ingredients,
      image: customImg,
      amount: 1,
    });
    Alert.alert("Success", "Item added to cart!");
    router.push("/cart");
  };

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
        <Text className="text-3xl font-msemibold self-center">
          €{price.toFixed(2)}
        </Text>
        <CustomButton
          title="Add to cart"
          onPress={handleAddToCart}
          containerStyles="w-44 h-14 mt-3"
          textStyles="font-mbold text-2xl"
        />
      </View>
    </>
  );
};

export default CreateLayout;
