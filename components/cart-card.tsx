import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  PanResponder,
} from "react-native";
import React, { useState, useRef } from "react";
import { useAppContext } from "../context/global-provider";

import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

interface CartCardProps {
  id: string;
  image: any;
  title: string | undefined;
  price: number | undefined;
  ingredients?: string[];
  amount: number;
}

const CartCard = ({
  id,
  image,
  title,
  price,
  ingredients,
  amount,
}: CartCardProps) => {
  const [quantity, setQuantity] = useState<number>(amount);
  const { removeFromCart, updateCartItemAmount } = useAppContext();

  const translateX = useRef(new Animated.Value(0)).current;
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, state) => {
        if (state.dx < 0) {
          translateX.setValue(state.dx);
        }
      },
      onPanResponderRelease: (_, state) => {
        if (state.dx < -50) {
          Animated.spring(translateX, {
            toValue: -100,
            useNativeDriver: true,
          }).start();
        } else {
          Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  const increaseQuantity = () => {
    if (quantity < 5) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      updateCartItemAmount(id, newQuantity);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateCartItemAmount(id, newQuantity);
    }
  };

  return (
    <View className="rounded-xl p-3 bg-white h-36">
      <Animated.View
        style={{
          transform: [{ translateX: translateX }],
        }}
      >
        <View className="flex flex-row gap-2" {...panResponder.panHandlers}>
          <Image
            source={image}
            className="w-[120px] h-[120px] rounded-xl"
            resizeMode="contain"
          />
          <View className="flex-1">
            <Text
              className="text-2xl font-msemibold text-secondary"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
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
        <TouchableOpacity
          className="bg-rose-200 absolute right-[-100px] top-0 bottom-0 w-16 flex items-center justify-center rounded-xl"
          onPress={() => removeFromCart(id)}
        >
          <FontAwesome5 name="trash" size={28} color="red" />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default CartCard;
