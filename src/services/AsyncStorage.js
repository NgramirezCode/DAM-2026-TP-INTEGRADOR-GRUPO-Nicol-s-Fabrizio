{
  /** Persistencia de Tareas **/
}

import AsyncStorage from "@react-native-async-storage/async-storage";

const TASKS_KEY = "@mis_pagos_tasks";

// Guarda los datos
export const saveTasks = async (tasks) => {
  try {
    const jsonValue = JSON.stringify(tasks);
    await AsyncStorage.setItem(TASKS_KEY, jsonValue);
  } catch (e) {
    console.error("Error guardando las tareas en el teléfono: ", e);
  }
};

// Carga los datos
export const loadTasks = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(TASKS_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error("Error leyendo las tareas del teléfono: ", e);
    return [];
  }
};
