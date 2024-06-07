import React, {Component} from "react";
import StackNavigator from "./components/StackNavigator";
import {NavigationContainer} from "@react-navigation/native"
export default class App extends Component {
  render(){
    return (
      <NavigationContainer independent={true} >

        <StackNavigator/>
      </NavigationContainer>
      
    );
  }
}


