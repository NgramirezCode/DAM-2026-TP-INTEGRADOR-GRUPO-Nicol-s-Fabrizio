import react from "react";
import { View, Text, Pressable } from "react-native";
import ViewTarea from "../components/ViewTarea";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      {/* Muestra el componente ViewTarea en la pantalla de inicio */}
      <ViewTarea />
      <Pressable onPress={() => navigation.navigate("MisPagos")}>
        <Text>Ir a Mis Pagos</Text>
      </Pressable>
    </View>
  );
}
