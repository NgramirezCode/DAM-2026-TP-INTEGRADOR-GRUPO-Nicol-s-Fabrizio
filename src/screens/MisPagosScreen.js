import { View, Text } from "react-native";

export default function MisPagosScreen() {
  return (
    <View>
      <Text>Pantalla Mis Pagos</Text>

      <Button
        title="Ir a Historial"
        onPress={() => navigation.navigate("Historial")}
      />
    </View>
  );
}
