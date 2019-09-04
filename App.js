/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Register } from "./Pages/Register";
import { Login } from "./Pages/Login";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import  Home  from "./Pages/Home";
// const AppNavigator = createStackNavigator({
//   Login:Login,
//   Register:Register,
// })


// export default createAppContainer(AppNavigator);

class App extends React.Component{
  render(){
    return(
      <Home/>
    )
  }
}
export default App
