import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import MisPagosCreen from "./src/screens/MisPagosScreen";
import HistorialScreen from "./src/screens/HistorialScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="MisPagos" component={MisPagosScreen} />

        <Stack.Screen name="Historial" component={HistorialScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
