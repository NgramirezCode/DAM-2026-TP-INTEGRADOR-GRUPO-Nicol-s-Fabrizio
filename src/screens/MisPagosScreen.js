import react from "react";
import { View, Text, Pressable } from "react-native";

export default function MisPagosScreen({ navigation }) {
  return (
    <View>
      <Text>Pantalla Mis Pagos</Text>

      <Pressable onPress={() => navigation.navigate("Historial")}>
        <Text>Ir a Historial</Text>
      </Pressable>
    </View>
  );
}
