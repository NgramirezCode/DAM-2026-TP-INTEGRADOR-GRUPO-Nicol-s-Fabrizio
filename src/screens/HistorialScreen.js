{
  /** Pantalla Terciaria (Muestra solo el Historial) */
}

import React, { useContext } from "react";
import { View, Text, Pressable } from "react-native";

import { TaskContext } from "../context/TaskContext";
import ListaTarea from "../components/ListaTarea";

export default function HistorialScreen() {
  // usa directamente la variable guardada
  const { pendingTasks } = useContext(TaskContext); // Deja de analizar el array.

  return (
    <View>
      <Text>Historial de Completadas</Text>
      <View>
        <ListaTarea
          data={pendingTasks}
          emptyMessage="Aún no has completado ninguna tarea."
        />
      </View>
    </View>
  );
}
