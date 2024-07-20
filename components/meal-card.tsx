import { Image, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface MealCardProps {
  image: any;
  title: string;
  description: string;
  price: number;
  onPress: () => void;
  isLoading?: boolean;
}

const MealCard = ({
  image,
  title,
  description,
  price,
  onPress,
  isLoading,
}: MealCardProps) => {
  return (
    <View className="flex flex-col  bg-white drop-shadow-3xl rounded-xl h-52  justify-between max-w-[48%] w-full mt-12">
      <View className="relative flex justify-center items-center -top-6">
        <Image
          source={image}
          className="w-[120px] h-[120px]"
          resizeMode="contain"
        />
      </View>
      <Text className="text-xl font-msemibold text-center truncate -mt-6">
        {title}
      </Text>
      <Text className="font-mlight text-xs px-2">{description}</Text>
      <View className="flex flex-row justify-between px-2 mb-2">
        <Text className="text-xl font-mregular">{price}.00 €</Text>
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.7}
          className={`bg-primary rounded-full flex flex-row justify-center items-center p-1 ${
            isLoading ? "opacity-50" : ""
          }`}
          disabled={isLoading}
        >
          <MaterialCommunityIcons name="shopping" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MealCard;
