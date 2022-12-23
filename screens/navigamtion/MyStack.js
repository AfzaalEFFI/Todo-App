import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../login/Login";
import Home from "../home/Home";
import Welcome from "../Welcome";
import Singupp from "../Singupp";
import Loginn from "../Loginn";
import AddTodo from "../AddTodo";
import TaskManager from "../TaskList";
import { ToastProvider } from "react-native-toast-notifications";
// import Toast from "react-native-toast-message";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <ToastProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Toast ref={(ref) => Toast.setref(ref)} /> */}
          <Stack.Screen
            name="welcom"
            component={Welcome}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="loginn"
            component={Loginn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="singup"
            component={Singupp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="todo"
            component={AddTodo}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="taskManager"
            component={TaskManager}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ToastProvider>
  );
};
export default MyStack;
