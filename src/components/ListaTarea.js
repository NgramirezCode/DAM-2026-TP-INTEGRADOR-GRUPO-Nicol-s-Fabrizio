import React from "react";
import { FlatList, View, Text } from "react-native";
import Tarea from "./Tarea";

export default function ListaTarea({ data, emptyMessage }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Tarea task={item} />}
      ListEmptyComponent={<Text>{emptyMessage}</Text>}
      contentContainerStyle={{ paddingBottom: 20 }}
    />
  );
}
