import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import MisPagosScreen from "../screens/MisPagosScreen";
import HistorialScreen from "../screens/HistorialScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />

      <Stack.Screen name="MisPagos" component={MisPagosScreen} />

      <Stack.Screen name="Historial" component={HistorialScreen} />
    </Stack.Navigator>
  );
}
