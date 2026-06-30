import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import MisPagosScreen from "../screens/MisPagosScreen";
import HistorialScreen from "../screens/HistorialScreen";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />

        <Tab.Screen name="Carga de Tareas" component={MisPagosScreen} />

        <Tab.Screen name="Historial" component={HistorialScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
