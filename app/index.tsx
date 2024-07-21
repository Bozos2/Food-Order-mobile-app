import { Image, View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import landing from "../assets/images/landing-image.png";
import burger from "../assets/images/burger-landing.png";
import pizza from "../assets/images/pizza-landing.png";

import { Link, router } from "expo-router";
import CustomButton from "../components/custom-button";

const HomePage = () => {
  return (
    <SafeAreaView className="h-full flex flex-col  bg-background">
      <View className="w-full flex flex-col mt-12">
        <View className="relative w-full">
          <Image
            source={landing}
            className="w-[370px] h-[350px]"
            resizeMode="contain"
          />
          <View className="absolute -left-16 top-52">
            <Image
              source={burger}
              className="w-[120px] h-[120px]"
              resizeMode="contain"
            />
          </View>
          <View className="absolute -right-16 top-0">
            <Image
              source={pizza}
              className="w-[120px] h-[120px]"
              resizeMode="contain"
            />
          </View>
          <View className="w-full flex flex-col items-center  mt-8">
            <Text className="text-secondary text-3xl font-mblack text-center px-4">
              Order your favorite food on easiest way!
            </Text>
            <CustomButton
              title="Order Now"
              onPress={() => router.push("/pizza")}
              containerStyles="w-64 mt-6 h-16"
              textStyles="text-2xl font-msemibold"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
