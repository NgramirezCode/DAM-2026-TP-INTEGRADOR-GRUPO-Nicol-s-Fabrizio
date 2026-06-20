// crear lista de tareas
import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";

export default function Tarea() {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const agregarTarea = () => {
    if (tarea.trim() !== "") {
      setTareas([...tareas, tarea]);
      setTarea("");
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Ingrese una tarea"
        value={tarea}
        onChangeText={setTarea}
      />
      <Button title="Agregar" onPress={agregarTarea} />
      <FlatList
        data={tareas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
}
