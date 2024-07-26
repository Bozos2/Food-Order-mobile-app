import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import { useAppContext } from "../../context/global-provider";

import { SafeAreaView } from "react-native-safe-area-context";

import CartCard from "../../components/cart-card";

import emptyCart from "../../assets/images/empty-cart.png";

const Cart = () => {
  const { cart } = useAppContext();

  return (
    <SafeAreaView className="px-4 pt-6 h-full" edges={["left", "right", "top"]}>
      <Text className="text-4xl font-mbold">Cart</Text>
      <Text className="text-2xl font-mbold pt-2 mb-6">There is your list:</Text>
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
        <FlatList
          data={cart}
          numColumns={1}
          contentContainerStyle={{ paddingBottom: 20, gap: 10 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <CartCard
              title={item.title}
              image={item.image}
              price={item.price}
              ingredients={item.ingredients}
              amount={item.amount}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default Cart;
