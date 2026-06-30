{
  /** Pantalla Secundaria (Carga de Tareas) */
}

import react from "react";
import { View, Text, Pressable } from "react-native";

import InputTarea from "../components/InputTarea";

export default function MisPagosScreen() {
  return (
    <View>
      <Text>Ingreso de Tareas</Text>
      <View>
        <Text>Cargar Nuevo Pago/Tarea</Text>
        <InputTarea />
      </View>
    </View>
  );
}
