import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Controlador } from "../controler/Controlador";

// Componente Tarea que representa una tarea individual
export default function Tarea({ Tarea }) {
  // Accede a las funciones completeTarea y deleteTarea desde el contexto
  const { completeTarea, deleteTarea } = useContext(Controlador);

  return (
    <View>
      <Text>{Tarea.text}</Text>
      {/* Muestra un botón para completar la tarea si no está completada, o un
      botón para eliminarla si ya está completada */}
      {!Tarea.completed ? (
        <TouchableOpacity onPress={() => completeTarea(Tarea.id)}>
          <Text>Completar</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => deleteTarea(Tarea.id)}>
          <Text>Eliminar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
