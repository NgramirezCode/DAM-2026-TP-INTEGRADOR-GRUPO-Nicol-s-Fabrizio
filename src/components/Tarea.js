import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TaskContext } from "../context/TaskContext";

export default function Tarea({ task }) {
  const { completeTask, deleteTask } = useContext(TaskContext);

  return (
    <View>
      <Text>{task.text}</Text>

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
