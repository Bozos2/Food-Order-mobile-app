import { Image, View, Text, Alert, TextInput, Modal } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import landing from "../assets/images/landing-image.png";
import burger from "../assets/images/burger-landing.png";
import pizza from "../assets/images/pizza-landing.png";

import { router } from "expo-router";
import CustomButton from "../components/custom-button";
import { useAppContext } from "../context/global-provider";

const HomePage = () => {
  const { tableNumber, setTableNumber } = useAppContext();
  const [modalVisible, setModalVisible] = useState(false);

  const handleOrderNow = () => {
    setModalVisible(true);
  };

  const handleConfirm = () => {
    if (tableNumber.trim()) {
      setModalVisible(false);
      router.push("/pizza");
    } else {
      Alert.alert("Error", "Please enter a table number");
    }
  };

  return (
    <SafeAreaView className="h-full flex flex-col bg-background">
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
          <View className="w-full flex flex-col items-center mt-8">
            <Text className="text-secondary text-3xl font-mblack text-center px-4">
              Order your favorite food on easiest way!
            </Text>
            <CustomButton
              title="Order Now"
              onPress={handleOrderNow}
              containerStyles="w-64 mt-6 h-16"
              textStyles="text-2xl font-msemibold"
            />
          </View>
        </View>
      </View>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-background/50 ">
          <View className="bg-white p-8 rounded-lg w-80">
            <Text className="text-2xl font-mbold text-center mb-4">
              Enter Table Number
            </Text>
            <TextInput
              value={tableNumber}
              onChangeText={setTableNumber}
              placeholder="Table Number"
              keyboardType="numeric"
              className="border p-2 rounded mb-4"
            />
            <View className="flex flex-row justify-between">
              <CustomButton
                title="Cancel"
                onPress={() => setModalVisible(false)}
                containerStyles="w-[120px] h-12"
                textStyles="text-lg font-msemibold"
              />
              <CustomButton
                title="Confirm"
                onPress={handleConfirm}
                containerStyles="w-[120px] h-12"
                textStyles="text-lg font-msemibold"
              />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default HomePage;
