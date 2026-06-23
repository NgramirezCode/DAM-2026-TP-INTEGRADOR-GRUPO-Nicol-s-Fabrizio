import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TaskContext } from "../context/TaskContext";

// Componente Tarea que representa una tarea individual
export default function Tarea({ task }) {
  // Accede a las funciones completeTask y deleteTask desde el contexto
  const { completeTask, deleteTask } = useContext(TaskContext);

  return (
    <View>
      <Text>{task.text}</Text>
      {/* Muestra un botón para completar la tarea si no está completada, o un
      botón para eliminarla si ya está completada */}
      {!task.completed ? (
        <TouchableOpacity onPress={() => completeTask(task.id)}>
          <Text>Completar</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => deleteTask(task.id)}>
          <Text>Eliminar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
