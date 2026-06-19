import react from "react";
import { View, Text, Pressable } from "react-native";

export default function HistorialScreen({ navigation }) {
  return (
    <View>
      <Text>Pantalla Historial</Text>

      <Pressable onPress={() => navigation.navigate("Home")}>
        <Text>Volver a Home</Text>
      </Pressable>
    </View>
  );
}
