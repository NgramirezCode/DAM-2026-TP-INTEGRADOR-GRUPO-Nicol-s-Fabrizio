import React, { createContext, useState } from "react";

// Crea un contexto para manejar las tareas
export const TareaContext = createContext();

// Componente proveedor de contexto que envuelve a los componentes hijos y proporciona el estado y las funciones para manejar las tareas
export const Controlador = ({ children }) => {
  // Estado local para almacenar la lista de tareas
  const [tarea, setTarea] = useState([]);

  // Agregar nueva tarea
  const addTarea = (text) => {
    if (text.trim() === "") return;
    const newTask = {
      id: Date.now().toString(),
      text: text,
      completed: false,
    };
    setTarea([...tarea, newTask]);
  };

  // Marcar como completada
  const completeTarea = (id) => {
    setTarea(
      tarea.map((tarea) =>
        tarea.id === id ? { ...tarea, completed: true } : tarea,
      ),
    );
  };

  // Eliminar tarea
  const deleteTarea = (id) => {
    setTarea(tarea.filter((tarea) => tarea.id !== id));
  };

  // Proporciona el estado y las funciones a los componentes hijos a través del contexto
  return (
    <TareaContext.Provider
      value={{ tarea, addTarea, completeTarea, deleteTarea }}
    >
      {children}
    </TareaContext.Provider>
  );
};
