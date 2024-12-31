import { View, Text, Image, ImageSourcePropType } from "react-native";
import { Tabs, Redirect } from "expo-router";
import { icons } from "../../constants";

const TabIcon = ({
  color,
  size,
  focused,
  source,
  title,
}: {
  color: string;
  size: number;
  focused: boolean;
  source: ImageSourcePropType;
  title: string;
}) => {
  return (
    <View className="items-center justify-center py-2">
      <Image
        resizeMode="contain"
        source={source}
        tintColor={color}
        className="w-6 h-6 mb-1"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color }}
      >
        {title}
      </Text>
    </View>
  );
};

export default function RootLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 70,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            elevation: 0,
            paddingVertical: 10,
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ color, size, focused }) => (
              <TabIcon
                color={color}
                size={size}
                focused={focused}
                source={icons.home}
                title="Home"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            headerShown: false,
            title: "Bookmark",
            tabBarIcon: ({ color, size, focused }) => (
              <TabIcon
                color={color}
                size={size}
                focused={focused}
                source={icons.bookmark}
                title="Bookmark"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            headerShown: false,
            title: "Create",
            tabBarIcon: ({ color, size, focused }) => (
              <TabIcon
                color={color}
                size={size}
                focused={focused}
                source={icons.plus}
                title="Create"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            headerShown: false,
            title: "Profile",
            tabBarIcon: ({ color, size, focused }) => (
              <TabIcon
                color={color}
                size={size}
                focused={focused}
                source={icons.profile}
                title="Profile"
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
