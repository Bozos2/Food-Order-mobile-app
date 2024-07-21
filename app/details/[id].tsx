import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { combinedData } from "../../lib/meals-data";

import AntDesign from "@expo/vector-icons/AntDesign";

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();

  const selectedItem = combinedData.find((item) => item.id === id);

  const [quantity, setQuantity] = useState(1);

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
    <SafeAreaView className="h-full bg-background px-4">
      <View className="relative flex items-center pt-10">
        <Image
          source={selectedItem.image}
          className="w-[320px] h-[320px]"
          resizeMode="contain"
        />
      </View>
      <Text className="text-3xl font-msemibold mt-4">{selectedItem.title}</Text>
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
      <View className="flex flex-row justify-between">
        <View></View>
      </View>
    </SafeAreaView>
  );
}
