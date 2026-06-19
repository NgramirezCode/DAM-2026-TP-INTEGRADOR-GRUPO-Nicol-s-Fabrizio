import { View, Text, Button } from "react-native";

export default function HistorialScreen() {
  return (
    <View>
      <Text>Pantalla Historial</Text>

      <Button
        title="Volver a Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}
