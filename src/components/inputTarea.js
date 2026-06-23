import React, { useState, useContext } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { Controlador } from "../controler/Controlador";

// Componente InputTarea que permite al usuario agregar nuevas tareas
export default function InputTarea() {
  // Estado local para manejar el texto del input
  const [text, setText] = useState("");
  // Accede a la función addTarea desde el contexto
  const { addTarea } = useContext(TareaContext);

  // Función para manejar la adición de una nueva tarea
  const handleAdd = () => {
    addTarea(text); // Llama a la función addTarea del contexto para agregar la tarea
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
