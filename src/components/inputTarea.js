// src/components/InputTarea.js
import React, { useState, useContext } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { TaskContext } from "../context/TaskContext";

export default function InputTarea() {
  const [text, setText] = useState("");
  const { addTask } = useContext(TaskContext);

  const handleAdd = () => {
    addTask(text);
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
