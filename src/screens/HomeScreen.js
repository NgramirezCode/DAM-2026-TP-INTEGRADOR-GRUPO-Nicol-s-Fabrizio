import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>

      <Button
        title="Ir a Mis Pagos"
        onPress={() => navigation.navigate("MisPagos")}
      />
    </View>
  );
}
