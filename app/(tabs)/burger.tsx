import { Image, View, Text, FlatList } from "react-native";
import React from "react";
import { router } from "expo-router";

import { SafeAreaView } from "react-native-safe-area-context";

import BurgerBanner from "../../assets/images/burger-banner.png";
import CustomButton from "../../components/custom-button";

import MealCard from "../../components/meal-card";
import { burgerData } from "../../lib/meals-data";

const Burger = () => {
  return (
    <SafeAreaView className="flex-1 pt-16 px-4 bg-background w-full">
      <Text className="text-4xl font-mbold">Burgers menu</Text>
      <View className="relative mt-5">
        <Image
          source={BurgerBanner}
          className="max-w-[360px] w-full h-[150px]"
          resizeMode="contain"
        />
        <View className="absolute left-3 bottom-4">
          <CustomButton
            title="Try Now"
            onPress={() => router.push("/")}
            textStyles="font-msemibold"
            containerStyles="w-32"
          />
        </View>
      </View>
      <FlatList
        data={burgerData}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <MealCard
            title={item.title}
            description={item.description}
            image={item.image}
            price={item.price}
            onPress={() => router.push(`/details/${item.id}`)}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Burger;
