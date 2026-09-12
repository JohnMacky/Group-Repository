import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#8d706d" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Order Coffee" }} />
      <Stack.Screen name="receipt" options={{ title: "Receipt" }} />
    </Stack>
  );
}