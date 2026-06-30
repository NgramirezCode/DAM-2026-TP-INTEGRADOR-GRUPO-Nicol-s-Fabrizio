import React from "react";
import { FlatList, View, Text } from "react-native";

import Tarea from "./Tarea";

// Componente ListaTarea que recibe una lista de tareas y un mensaje para mostrar cuando la lista está vacía
export default function ListaTarea({ data, emptyMessage }) {
  return (
    // Renderiza una lista de tareas usando FlatList
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Tarea task={item} />}
      ListEmptyComponent={<Text>{emptyMessage}</Text>}
    />
  );
}
