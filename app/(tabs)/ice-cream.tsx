import { Image, View, Text, FlatList } from "react-native";
import React from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import iceCreamBanner from "../../assets/images/ice-cream-banner.png";
import CustomButton from "../../components/custom-button";

import MealCard from "../../components/meal-card";
import { IceCreamData } from "../../lib/meals-data";

const IceCream = () => {
  return (
    <SafeAreaView
      className="flex-1 pt-6 px-4 bg-background w-full"
      edges={["left", "right", "top"]}
    >
      <Text className="text-4xl font-mbold">Ice Cream menu</Text>
      <View className="relative mt-5">
        <Image
          source={iceCreamBanner}
          className="max-w-[360px] w-full h-[150px]"
          resizeMode="contain"
        />
        <View className="absolute left-3 bottom-4">
          <CustomButton
            title="Try Now"
            onPress={() => router.push("/create-ice-cream")}
            textStyles="font-msemibold"
            containerStyles="w-32"
          />
        </View>
      </View>
      <FlatList
        data={IceCreamData}
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

export default IceCream;
