import { Image, View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { router } from "expo-router";

import pizzaBanner from "../../assets/images/pizza.png";
import CustomButton from "../../components/custom-button";

import MealCard from "../../components/meal-card";
import { pizzaData } from "../../lib/meals-data";

const Pizza = () => {
  return (
    <SafeAreaView
      className="flex-1 pt-16 px-4 bg-background w-full"
      edges={["left", "right", "top"]}
    >
      <Text className="text-4xl font-mbold">Pizza menu</Text>
      <View className="relative mt-5">
        <Image
          source={pizzaBanner}
          className="max-w-[360px] w-full h-[150px]"
          resizeMode="contain"
        />
        <View className="absolute left-3 bottom-4">
          <CustomButton
            title="Try Now"
            onPress={() => router.push("/create-pizza")}
            textStyles="font-msemibold"
            containerStyles="w-32"
          />
        </View>
      </View>

      <FlatList
        data={pizzaData}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ paddingBottom: 20 }}
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

export default Pizza;
