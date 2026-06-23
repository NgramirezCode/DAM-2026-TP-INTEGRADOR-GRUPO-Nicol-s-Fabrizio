import React, { createContext, useState } from "react";

// Crea un contexto para manejar las tareas
export const TaskContext = createContext();

// Componente proveedor de contexto que envuelve a los componentes hijos y proporciona el estado y las funciones para manejar las tareas
export const TaskProvider = ({ children }) => {
  // Estado local para almacenar la lista de tareas
  const [tasks, setTasks] = useState([]);

  // Agregar nueva tarea
  const addTask = (text) => {
    if (text.trim() === "") return;
    const newTask = {
      id: Date.now().toString(),
      text: text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // Marcar como completada
  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task,
      ),
    );
  };

  // Eliminar tarea
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Proporciona el estado y las funciones a los componentes hijos a través del contexto
  return (
    <TaskContext.Provider value={{ tasks, addTask, completeTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
