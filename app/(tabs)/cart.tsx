import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { useAppContext } from "../../context/global-provider";

import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import CartCard from "../../components/cart-card";

import emptyCart from "../../assets/images/empty-cart.png";

import Ionicons from "@expo/vector-icons/Ionicons";
import CustomButton from "../../components/custom-button";

const Cart = () => {
  const { cart, resetCart } = useAppContext();

  const price = cart.reduce((acc, val) => {
    return acc + (val.price ?? 0) * val.amount;
  }, 0);
  const vatRate = 0.1;
  const vatAmount = price * vatRate;
  const totalAmount = price + vatAmount;

  const handleOrder = () => {
    resetCart();
    Alert.alert("Order placed", "Your food has been ordered!");
  };

  return (
    <SafeAreaView className="px-4 pt-6 h-full" edges={["left", "right", "top"]}>
      <View className="flex flex-row items-center">
        <TouchableOpacity
          onPress={() => router.back()}
          activeOpacity={0.7}
          className="rounded-full p-1.5 bg-white shadow-lg"
        >
          <Ionicons name="arrow-back-outline" size={36} color="black" />
        </TouchableOpacity>
        <View className="flex-1 items-center">
          <Text className="text-3xl font-mbold">Cart</Text>
        </View>
        <View className="w-9" />
      </View>
      <Text className="text-2xl font-mbold pt-4 pb-2">There is your list:</Text>
      {cart.length < 1 ? (
        <View className="flex flex-col justify-center items-center">
          <Text className="text-2xl font-bold pt-24 text-primary">
            Your cart is still empty
          </Text>
          <Image
            source={emptyCart}
            className="w-[320] h-[320px]"
            resizeMode="contain"
          />
        </View>
      ) : (
        <>
          <FlatList
            data={cart}
            numColumns={1}
            contentContainerStyle={{ paddingBottom: 20, gap: 10 }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <CartCard
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                ingredients={item.ingredients}
                amount={item.amount}
              />
            )}
          />
          <View className="flex flex-col pb-8 pt-2 left-0">
            <View className="space-y-1.5">
              <View className="flex flex-row justify-between">
                <Text className="text-xl text-secondary font-msemibold">
                  Price:
                </Text>
                <Text className="text-xl text-primary font-msemibold">
                  {price}.00 €
                </Text>
              </View>
              <View className="flex flex-row justify-between">
                <Text className="text-xl text-secondary font-msemibold">
                  VAT (10%):
                </Text>
                <Text className="text-xl text-primary font-msemibold">
                  {vatAmount.toFixed(2)} €
                </Text>
              </View>
              <View className="h-0.5 bg-secondary/60 w-full" />
              <View className="flex flex-row justify-between">
                <Text className="text-2xl text-secondary font-mbold">
                  Total price:
                </Text>
                <Text className="text-2xl text-primary font-mbold">
                  {totalAmount} €
                </Text>
              </View>
            </View>
            <CustomButton
              title="Order your food"
              onPress={handleOrder}
              containerStyles="w-full h-14 mt-4"
              textStyles="font-mbold text-2xl"
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default Cart;
