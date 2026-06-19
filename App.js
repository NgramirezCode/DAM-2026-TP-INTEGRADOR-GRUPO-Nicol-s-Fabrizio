import { NavigationContainer } from "@react-navigation/native";

import navigator from "./src/navigation/navigator";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
