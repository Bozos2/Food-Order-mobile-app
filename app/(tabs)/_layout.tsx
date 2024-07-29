import { Image, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Tabs } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const TabIcon = ({ color, name, focused }: any) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <Text
        className={`${focused ? "font-semibold" : "font-regular"} text-base`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "#ff8c42",
          tabBarInactiveTintColor: "#bdbdd6",
          tabBarShowLabel: false,
          tabBarStyle: {
            display: route.name === "cart" ? "none" : "flex",
            backgroundColor: "#f1f1f1",
            borderTopWidth: 1,
            borderTopColor: "#bdbdd6",
            height: 94,
          },
        })}
      >
        <Tabs.Screen
          name="pizza"
          options={{
            title: "Pizza",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <>
                <FontAwesome5 name="pizza-slice" size={24} color={color} />
                <TabIcon color={color} name="Pizza" focused={focused} />
              </>
            ),
          }}
        />
        <Tabs.Screen
          name="burger"
          options={{
            title: "Burger",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <>
                <FontAwesome5 name="hamburger" size={24} color={color} />
                <TabIcon color={color} name="Burger" focused={focused} />
              </>
            ),
          }}
        />

        <Tabs.Screen
          name="ice-cream"
          options={{
            title: "Ice Cream",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <>
                <Ionicons name="ice-cream" size={24} color={color} />
                <TabIcon color={color} name="Ice Cream" focused={focused} />
              </>
            ),
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: "Cart",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <>
                <Entypo name="shopping-cart" size={24} color={color} />
                <TabIcon color={color} name="Cart" focused={focused} />
              </>
            ),
          }}
        />
      </Tabs>
      <StatusBar backgroundColor="#161622" style="dark" />
    </>
  );
};

export default TabsLayout;
