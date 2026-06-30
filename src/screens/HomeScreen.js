{
  /** Pantalla Principal */
}

import React, { useContext } from "react";
import { View, Text, Pressable } from "react-native";

import { TaskContext } from "../context/TaskContext";
import ListaTarea from "../components/ListaTarea";

// Componente HomeScreen que representa la pantalla de inicio de la aplicación
export default function HomeScreen() {
  // usa directamente la variable guardada
  const { pendingTasks } = useContext(TaskContext); // Deja de analizar el array.

  return (
    <View>
      <Text>Tareas Pendientes</Text>
      <View>
        <ListaTarea
          data={pendingTasks}
          emptyMessage="¡Todo al día! No hay tareas pendientes."
        />
      </View>
    </View>
  );
}
