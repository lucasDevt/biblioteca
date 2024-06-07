import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from "./BottomTabNavigator";
import LoginScreen from "../screens/Login"


const Stack = createStackNavigator();

const StackNavigator=()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}


export default StackNavigator