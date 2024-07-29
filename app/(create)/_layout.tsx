import { Stack } from "expo-router";
import { View, Text } from "react-native";
import CustomButton from "../../components/custom-button";
import { router, usePathname } from "expo-router";

import { useAppContext } from "../../context/global-provider";
import customImg from "../../assets/images/custom-meal.png";

const CreateLayout = () => {
  const { price, addToCart, ingredients, cart } = useAppContext();
  const pathname = usePathname();

  const handleAddToCart = () => {
    addToCart({
      id: (cart.length + 50).toString(),
      title: getTitle(),
      price,
      ingredients,
      image: customImg,
      amount: 1,
    });
    router.push("/cart");
  };

  const getTitle = () => {
    switch (pathname) {
      case "/create-pizza":
        return "Custom Pizza";
      case "/create-burger":
        return "Custom Burger";
      case "/create-ice-cream":
        return "Custom Ice Cream";
      default:
        return "Custom Meal";
    }
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
