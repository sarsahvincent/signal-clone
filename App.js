import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import Home from "./screens/HomeScreen";
import AddChat from "./screens/AddChat";
import ChatScreen from "./screens/ChatScreen";


const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#2C6BED" },
  headerTintColor: "white",
  headerTitleStyle: { color: "white" },
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen
          options={{
            title: "Sign In",
          }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{
            title: "Let Sign Up",
            headerTitleAlign: "center",
          }}
          name="Register"
          component={RegisterScreen}
        />
          <Stack.Screen
          options={{
            title: "Add a new Chat",
            headerTitleAlign: "center",
          }}
          name="AddChat"
          component={AddChat}
        />
           <Stack.Screen
          options={{
            title: "Start Chat",
            headerTitleAlign: "center",
          }}
          name="Chat"
          component={ChatScreen}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
