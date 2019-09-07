

import React, { Component } from 'react';
import {NavigationActions} from 'react-navigation';
import { Text, View, StyleSheet, Image, TouchableOpacity, AsyncStorage } from 'react-native'
import jwt from "react-native-pure-jwt";
export default class SideBar extends Component {
    state={
        token:'',
    }
    navigateToScreen = ( route ) =>(
        () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    })

    componentDidMount(){
        let data=''
        AsyncStorage.getItem('user', (error, result) => {
            if (result) {
                this.setState({
                    token:result
                })
                console.log("data = ", data )
            }else{
                this.setState({
                    token:''
                })
                console.log("AsyncStorage1 = Kosong", result )
            }
        })
        
        const {token} = this.state
        const secret = 'SECRET_KUY'
        if(token.length>0){
            jwt
            .decode(
                token, // the token
                secret, // the secret
                {
                skipValidation: true // to skip signature and exp verification
                }
            )
        }
    }
  render() {
    const {token} = this.state

    const url='https://facebook.github.io/react-native/img/tiny_logo.png'

    return (
        <View style={styles.container}>
          {token.length>0
          ?<View style={styles.container}>
                <View style={styles.containerHead}>
                    <Image style={styles.img} source={require('../assets/images/logo.png')}/>
                </View>

                <View style={styles.containerBody}>
                    <TouchableOpacity onPress={this.navigateToScreen('Profile')} style={{flexDirection:'row', borderStyle:'solid', borderBottomWidth:1,height:'15%', justifyContent:'space-around'}}>
                        <View style={{width:'50%', justifyContent:'center'}}>
                            <Image source={require('../assets/images/profile.png')} style={{height:50, width:50 , alignSelf:'center'}}/>
                        </View>
                        <View style={{width:'50%', justifyContent:'center'}}>
                            <Text style={{fontSize:22, alignSelf:'center'}}>PROFILE</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity  onPress={this.navigateToScreen('Home')}
                        style={{flexDirection:'row', borderStyle:'solid', borderBottomWidth:1,height:'15%', justifyContent:'space-around'}}>
                        <View style={{width:'50%', justifyContent:'center'}}>
                            <Image source={require('../assets/images/donate.png')} style={{height:50, width:50 , alignSelf:'center'}}/>
                        </View>
                        <View style={{width:'50%', justifyContent:'center'}}>
                            <Text style={{fontSize:22, alignSelf:'center'}}>DONATE</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.navigateToScreen('Register')} style={{flexDirection:'row', borderStyle:'solid', borderBottomWidth:1,height:'15%', justifyContent:'space-around'}}>
                        <View style={{width:'50%', justifyContent:'center'}}>
                            <Image source={require('../assets/images/history.png')} style={{height:50, width:50 , alignSelf:'center'}}/>
                        </View>
                        <View style={{width:'50%', justifyContent:'center'}}>
                            <Text style={{fontSize:22, alignSelf:'center'}}>HISTORY</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{
                        AsyncStorage.clear()
                        this.navigateToScreen('Register')}}
                         style={{flexDirection:'row', borderStyle:'solid', borderBottomWidth:1,height:'15%', justifyContent:'space-around'}}>
                        <View style={{width:'50%', justifyContent:'center'}}>
                            <Image source={require('../assets/images/logout.png')} style={{height:50, width:50 , alignSelf:'center'}}/>
                        </View>
                        <View style={{width:'50%', justifyContent:'center'}}>
                            <Text style={{fontSize:22, alignSelf:'center'}}>LOG OUT</Text>
                        </View>
                    </TouchableOpacity>
                    
                </View>
          </View>
          :
          <View style={styles.container}>
          <View style={styles.containerHead}>
              <Image style={styles.img} source={require('../assets/images/logo.png')}/>
          </View>

          <View style={styles.containerBody}>
              <TouchableOpacity onPress={this.navigateToScreen('Login')} style={{flexDirection:'row', borderStyle:'solid', borderBottomWidth:1,height:'15%', justifyContent:'space-around'}}>
                  <View style={{width:'50%', justifyContent:'center'}}>
                      <Image source={require('../assets/images/login.png')} style={{height:50, width:50 , alignSelf:'center'}}/>
                  </View>
                  <View style={{width:'50%', justifyContent:'center'}}>
                      <Text style={{fontSize:22, alignSelf:'center'}}>LOGIN</Text>
                  </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.navigateToScreen('Register')} style={{flexDirection:'row', borderStyle:'solid', borderBottomWidth:1,height:'15%', justifyContent:'space-around'}}>
                  <View style={{width:'50%', justifyContent:'center'}}>
                      <Image source={require('../assets/images/register.png')} style={{height:50, width:50 , alignSelf:'center'}}/>
                  </View>
                  <View style={{width:'50%', justifyContent:'center'}}>
                      <Text style={{fontSize:22, alignSelf:'center'}}>REGISTER</Text>
                  </View>
              </TouchableOpacity>
              
          </View>
    </View>
          }

        </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    containerHead:{
        borderWidth:1,
        borderStyle:'solid',
        flex:1,
    },
    containerBody:{
        borderWidth:1,
        borderStyle:'solid',
        flex:2
    },
    img:{
        height:'100%',
        width:'100%', 
        resizeMode:'stretch'
    }
});