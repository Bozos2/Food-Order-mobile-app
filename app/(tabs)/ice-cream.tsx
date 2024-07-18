import { Image, View, Text } from "react-native";
import React from "react";
import { router } from "expo-router";

import iceCreamBanner from "../../assets/images/ice-cream-banner.png";
import CustomButton from "../../components/custom-button";

const IceCream = () => {
  return (
    <View className="flex flex-col mt-16 h-full px-4">
      <Text className="text-4xl font-bold">Ice Cream</Text>
      <View className="relative mt-5">
        <Image
          source={iceCreamBanner}
          className="w-[340px] h-[150px]"
          resizeMode="contain"
          width={340}
          height={150}
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
    </View>
  );
};

export default IceCream;
