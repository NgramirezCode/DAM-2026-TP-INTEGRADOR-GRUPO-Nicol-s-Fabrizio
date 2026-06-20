import react from "react";
import { View, Text, Pressable } from "react-native";
import Tarea from "../components/tarea";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      {/* Muestra el componente Tarea en la pantalla de inicio */}
      <Tarea />
      <Pressable onPress={() => navigation.navigate("MisPagos")}>
        <Text>Ir a Mis Pagos</Text>
      </Pressable>
    </View>
  );
}
