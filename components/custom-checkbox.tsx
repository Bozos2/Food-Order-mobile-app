import React from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface CustomCheckboxProps {
  img: any;
  label: string;
  checked: boolean;
  onChange: () => void;
}

const CustomCheckbox = ({
  img,
  label,
  checked,
  onChange,
}: CustomCheckboxProps) => {
  return (
    <TouchableOpacity
      onPress={onChange}
      className={`flex flex-row items-center mb-2 p-2 rounded-xl ${
        checked ? "bg-primary" : "bg-primary/60"
      }`}
    >
      <View
        className={`w-6 h-6 justify-center items-center mr-2 ${
          checked ? "flex" : "hidden"
        }`}
      >
        {checked && <MaterialIcons name="check" size={24} color="white" />}
      </View>
      <View className="flex flex-row gap-0.5 items-center">
        <Image source={img} className="w-8 h-8" resizeMode="contain" />
        <Text className={`text-lg ${checked ? "font-semibold" : ""}`}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomCheckbox;
