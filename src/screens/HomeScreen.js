import react from "react";
import { View, Text, Pressable } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>

      <Pressable onPress={() => navigation.navigate("MisPagos")}>
        <Text>Ir a Mis Pagos</Text>
      </Pressable>
    </View>
  );
}
