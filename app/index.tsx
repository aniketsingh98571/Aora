import { Link } from "expo-router";
import { Text, View } from "react-native";
export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-primary text-2xl font-psemibold">Aora</Text>
      <Link href="/home">
        <Text className="text-blue-500 text-2xl font-psemibold">Home</Text>
      </Link>
    </View>
  );
}
