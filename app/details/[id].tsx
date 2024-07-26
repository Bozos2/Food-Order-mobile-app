import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { combinedData } from "../../lib/meals-data";
import { useAppContext } from "../../context/global-provider";
import CustomButton from "../../components/custom-button";

import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();
  const { addToCart } = useAppContext();
  const [quantity, setQuantity] = useState(1);

  const selectedItem = combinedData.find((item) => item.id === id);

  const ingredientNames = selectedItem?.ingredients.map(
    (ingredient) => ingredient.name
  );

  const dataToCart = {
    id: selectedItem?.id!,
    title: selectedItem?.title,
    image: selectedItem?.image,
    price: selectedItem?.price,
    amount: quantity,
    ingredients: ingredientNames,
  };

  const handleAddToCart = () => {
    addToCart(dataToCart);
    Alert.alert("Success", "Item added to cart!");
  };

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  if (!selectedItem) {
    return (
      <SafeAreaView className="h-full bg-background justify-center items-center">
        <Text>Item not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      className="h-full relative bg-background"
      edges={["left", "right"]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => router.back()}
          activeOpacity={0.7}
          className="absolute top-16 left-4 z-50 rounded-full p-2.5 bg-white shadow-lg"
        >
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <View className="relative flex items-center pt-12 bg-primary/70 pb-4 rounded-b-[48px]">
          <Image
            source={selectedItem.image}
            className="w-[320px] h-[320px]"
            resizeMode="contain"
          />
        </View>
        <View className="px-4">
          <Text className="text-3xl font-msemibold mt-4">
            {selectedItem.title}
          </Text>
          <View className="flex flex-row justify-between">
            <Text className="text-2xl text-primary font-mregular">
              {selectedItem.price}.00 €
            </Text>
            <View className="flex flex-row items-center bg-primary/60 rounded-3xl">
              <TouchableOpacity
                onPress={decreaseQuantity}
                className="p-2 rounded-full bg-primary"
              >
                <AntDesign name="minus" size={24} color="black" />
              </TouchableOpacity>
              <Text className="mx-4 text-xl">{quantity}</Text>
              <TouchableOpacity
                onPress={increaseQuantity}
                className="p-2 rounded-full bg-primary"
              >
                <AntDesign name="plus" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex flex-row mt-4">
            <View className="flex flex-row gap-1 items-center mr-4">
              <MaterialCommunityIcons name="fire" size={36} color="orange" />
              <Text className="text-center text-lg font-semibold">
                {selectedItem.calories} Kcal
              </Text>
            </View>
            <View className="w-0.5  h-full bg-[#bdbdd6] mr-4" />
            <View className="flex flex-row gap-1 items-center">
              <FontAwesome6 name="clock" size={34} color="red" />
              <Text className="text-center text-lg font-semibold">
                {selectedItem.time} min
              </Text>
            </View>
          </View>
          <Text className="text-2xl font-semibold mt-10">Ingredients</Text>
          <View className="flex flex-row gap-4 flex-wrap mt-0.5">
            {selectedItem.ingredients.map((item, index) => (
              <View className="flex flex-col items-center" key={index}>
                <View
                  key={index}
                  className="flex items-center bg-white p-1.5 rounded-full"
                >
                  <Image
                    source={item.image}
                    className="w-10 h-10"
                    resizeMode="contain"
                  />
                </View>
                <Text className="text-sm mt-1 font-semibold">{item.name}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <View className="bottom-0 left-0 relative h-24 bg-background">
        <CustomButton
          title="Add to cart"
          onPress={handleAddToCart}
          containerStyles="w-72 h-14 mx-auto mt-3"
          textStyles="font-mbold text-2xl"
        />
      </View>
    </SafeAreaView>
  );
}
