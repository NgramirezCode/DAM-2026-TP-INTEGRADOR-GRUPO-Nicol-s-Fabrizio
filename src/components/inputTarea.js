import React, { useState, useContext } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";

import { TaskContext } from "../context/TaskContext";

// Componente InputTarea que permite al usuario agregar nuevas tareas
export default function InputTarea() {
  // Estado local para manejar el texto del input
  const [text, setText] = useState("");
  // Accede a la función addTask desde el contexto
  const { addTask } = useContext(TaskContext);

  // Función para manejar la adición de una nueva tarea
  const handleAdd = () => {
    addTask(text); // Llama a la función addTask del contexto para agregar la tarea
    setText(""); // Limpia el input tras agregar
  };

  return (
    <View>
      <TextInput
        placeholder="Ej: Pagar luz, Comprar insumos..."
        placeholderTextColor="#888"
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity onPress={handleAdd}>
        <Text>AGREGAR</Text>
      </TouchableOpacity>
    </View>
  );
}
