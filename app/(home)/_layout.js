import { Stack } from "expo-router";
import { Provider } from "react-redux";
import Store from "../../Store";


export default function Layout() {
  return (
    <Provider store={Store}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="hotel" />
        <Stack.Screen name="cart" />
        <Stack.Screen name="order" />
      </Stack>
    </Provider>
  );
}