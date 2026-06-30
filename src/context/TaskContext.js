{
  /* Manejo de la logica del estado */
}

import React, { createContext, useState, useEffect, useMemo } from "react";
import { saveTasks, loadTasks } from "../services/AsyncStorage";

// Eliminar, Completar y Crear Tareas

const logicAddTask = (currentTasks, text) => {
  if (text.trim() === "") return currentTasks; // Evita tareas vacías

  const newTask = {
    id: Date.now().toString(),
    text: text,
    completed: false,
  };

  return [...currentTasks, newTask]; // Retorna el nuevo arreglo inmutable
};

const logicCompleteTask = (currentTasks, taskId) => {
  return currentTasks.map((task) =>
    task.id === taskId ? { ...task, completed: true } : task,
  );
};

const logicDeleteTask = (currentTasks, taskId) => {
  return currentTasks.filter((task) => task.id !== taskId);
};

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [isReady, setIsReady] = useState(false); // Previene la sobrescritura del disco

  // Lee la memoria local al iniciar la app
  useEffect(() => {
    loadTasks().then((savedTasks) => {
      setTasks(savedTasks);
      setIsReady(true); // Habilita el guardado solo después de cargar con éxito
    });
  }, []);

  // Guarda en el disco cada vez que tasks cambia
  useEffect(() => {
    if (isReady) {
      saveTasks(tasks);
    }
  }, [tasks, isReady]);

  // Carga el estado actual
  const addTask = (text) => setTasks((prev) => logicAddTask(prev, text));
  const completeTask = (id) => setTasks((prev) => logicCompleteTask(prev, id));
  const deleteTask = (id) => setTasks((prev) => logicDeleteTask(prev, id));

  // Uso de Memo para evitar recalcular innecesariamente
  const pendingTasks = useMemo(
    () => tasks.filter((t) => !t.completed),
    [tasks],
  );
  const completedTasks = useMemo(
    () => tasks.filter((t) => t.completed),
    [tasks],
  );

  return (
    <TaskContext.Provider
      value={{
        tasks,
        pendingTasks,
        completedTasks,
        addTask,
        completeTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
