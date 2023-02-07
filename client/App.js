import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/Screens/HomeScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import SettingScreen from "./src/Screens/SettingScreen";
import RegisterScreen from "./src/Screens/RegisterScreen";
import EditStudent from "./src/Component/EditStudent";
import ViewStudent from "./src/Component/ViewStudent";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#333",
          },
          title: "Vasooli System",
          headerTitleStyle: {
            color: "#C9DFFF",
            fontWeight: "bold",
            fontSize: 20,
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="EditStudent" component={EditStudent} />
        <Stack.Screen name="ViewStudent" component={ViewStudent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
