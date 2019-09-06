
import React from 'react'
import {View} from 'react-native'
import { Register } from "./Pages/Register";
import  Login  from './Pages/Login';
import  Home  from './Pages/Home';
import  Details  from './Pages/Details';
import  Sidebar  from './src/component/sidebar';
import  Card  from './src/component/category';
import  Books  from './src/component/Books';
import  Profile  from './Pages/Profile';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer  } from "react-navigation";
import { createDrawerNavigator  } from "react-navigation-drawer";
import {Provider} from 'react-redux';
import store from './Redux/store';
// const data=1
const AppNavigator = createDrawerNavigator({
  // Books: Books,
  Home: Home,
  Sidebar:Sidebar,
  Login:  Login,
  Register: Register,
  Details:Details,
  Profile:Profile,

  // Books: Books,
},{
  contentComponent: Sidebar
})


const AppContainer  = createAppContainer(AppNavigator);
class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}
export default App

// export default class App extends React.Component{
//   render(){
//     return(
//       <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
//         <Loading show={true}/>
//       </View>
      
//     )
//   }
// }