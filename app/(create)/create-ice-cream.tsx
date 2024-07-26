import { Image, View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import CustomCheckbox from "../../components/custom-checkbox";
import { useAppContext } from "../../context/global-provider";

import Ionicons from "@expo/vector-icons/Ionicons";
import paper from "../../assets/images/paper.png";

import { iceCreamIngredients } from "../../constants/checkbox-ingredients";

const CreateIceCream = () => {
  const { setPrice, setIngredients, ingredients } = useAppContext();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  useEffect(() => {
    const newPrice = 4 + selectedOptions.length;
    setPrice(newPrice);
    setIngredients(selectedOptions);
  }, [selectedOptions, setPrice]);

  const handleCheckboxChange = (label: string) => {
    setSelectedOptions((prev) =>
      prev.includes(label)
        ? prev.filter((optionLabel) => optionLabel !== label)
        : [...prev, label]
    );
  };

  return (
    <SafeAreaView
      className="px-4 h-full bg-background"
      edges={["left", "right", "top"]}
    >
      <View className="pt-6 flex flex-row gap-6 items-center">
        <TouchableOpacity onPress={() => router.back()} activeOpacity={0.7}>
          <Ionicons name="arrow-back-outline" size={36} color="black" />
        </TouchableOpacity>
        <Text className="text-2xl font-bold text-secondary">
          Custom your Ice Cream!
        </Text>
      </View>
      <View className="relative flex items-center mt-4">
        <Image
          source={paper}
          className="w-[380px] h-[400px]"
          resizeMode="contain"
        />
        <View className="absolute left-16 top-12 h-full w-[250px]">
          <Text className="font-msemibold mt-2 text-2xl text-center mb-2">
            Your list:
          </Text>
          {selectedOptions.length < 1 ? (
            <>
              <Text className="text-lg font-msemibold text-center mt-12 text-primary">
                Your list is empty!
              </Text>
            </>
          ) : (
            <View className="gap-2 flex flex-row flex-wrap">
              {selectedOptions.map((item, i) => (
                <Text className="text-xl font-msemibold text-primary" key={i}>
                  {item},
                </Text>
              ))}
            </View>
          )}
        </View>
      </View>
      <Text className="text-xl font-bold mb-4">Select Ingredients:</Text>
      <ScrollView>
        <View className="flex flex-row flex-wrap">
          {iceCreamIngredients.map((item) => (
            <View className="mr-2" key={item.id}>
              <CustomCheckbox
                img={item.img}
                key={item.id}
                label={item.label}
                checked={selectedOptions.includes(item.label)}
                onChange={() => handleCheckboxChange(item.label)}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateIceCream;
