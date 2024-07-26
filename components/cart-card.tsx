import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import AntDesign from "@expo/vector-icons/AntDesign";

interface CartCardProps {
  image: any;
  title: string | undefined;
  price: number | undefined;
  ingredients?: string[];
  amount: number;
}

const CartCard = ({
  image,
  title,
  price,
  ingredients,
  amount,
}: CartCardProps) => {
  const [quantity, setQuantity] = useState<number>(amount);

  const increaseQuantity = () => {
    if (quantity < 5) {
      setQuantity((prev) => prev + 1);
    }
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <View className="rounded-xl p-3 bg-white h-36">
      <View className="flex flex-row gap-2">
        <Image
          source={image}
          className="w-[120px] h-[120px] rounded-xl"
          resizeMode="contain"
        />
        <View className="flex-1">
          <Text className="text-2xl font-msemibold text-secondary">
            {title}
          </Text>
          <Text className="text-2xl font-semibold text-primary">
            €{price}.00
          </Text>
          <View className="flex flex-row flex-wrap mt-2">
            <Text
              className="text-secondary/80 font-semibold"
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {ingredients?.join(", ")}
            </Text>
          </View>
        </View>
        <View className="flex flex-col items-center justify-around rounded-3xl">
          <TouchableOpacity
            onPress={increaseQuantity}
            className={`p-1.5 rounded-xl ${
              quantity >= 5 ? "bg-background" : "bg-primary"
            }`}
          >
            <AntDesign name="plus" size={26} color="black" />
          </TouchableOpacity>
          <Text className="text-xl">{quantity}</Text>
          <TouchableOpacity
            onPress={decreaseQuantity}
            className={`p-1.5 rounded-xl ${
              quantity <= 1 ? "bg-background" : "bg-primary"
            }`}
          >
            <AntDesign name="minus" size={26} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartCard;
