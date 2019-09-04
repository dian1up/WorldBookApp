import React from 'react'
import { 
    Image,
    StyleSheet,
    
    View,
    ImageBackground
 } from "react-native";
import { Container, Text, Button, Label, Item, Form, Input } from "native-base";

export class Login extends React.Component{

    constructor(props){
        super(props);
        this.state={
            Username:"",
            Password:"",
        }
    }

    static navigationOptions={
        header: null,
    }

    render(){
        return(
        <ImageBackground style={style.backgroundImages} source={require('../src/assets/images/bg.png')}>
        <View style={{flex:2, justifyContent:'center',padding:20}}>
            <Image source={require('../src/assets/images/logo.png')} style={{width:250,height:200,alignSelf:'center'}}/>
            <Text style={{alignSelf:'center'}}>WORLD BOOK APPS</Text>
        </View>
        <View style={{flex:2, justifyContent:'flex-start'}}>
            <View style={{paddingRight:20, paddingLeft:20}}>
            <Item floatingLabel>
                <Label>Username</Label>
                <Input />
            </Item>
            <Item floatingLabel>
                <Label>Password</Label>
                <Input secureTextEntry={true}/>
            </Item>

            </View>
            <View style={{marginTop:20, paddingRight:20, paddingLeft:20}}>
            <Button style={{justifyContent:'center'}}>
                <Text >Log In</Text>
            </Button>
                <View style={{flexDirection:'row', justifyContent:'center', marginTop:10}}>
                    <Text style={{color:'#e7d3a4'}}>Not Registered?</Text>
                    <Text 
                    onPress={()=>this.props.navigation.navigate('Register')}
                    style={{color:'#54b948', marginLeft:5}}>Register</Text>
                </View>
            </View>
        </View>
        </ImageBackground>

       
        //     <ImageBackground style={style.backgroundImages} source={require('../src/assets/images/bg.png')}>

        //     {/* <Image style={{ba}} source={require('../src/assets/images/bg.png')}/> */}
        //     <Form style={style.backgroundImage}>
        //         <View style={{alignItems:'center', marginBottom:50}}>
        //             <Image source={require('../src/assets/images/bg.png')}/>
        //         </View>
        //         <Item floatingLabel>
        //             <Label>Username</Label>
        //             <Input />
        //         </Item>
        //         <Item floatingLabel>
        //             <Label>Password</Label>
        //             <Input secureTextEntry={true} />
        //         </Item>
        //     <View style={style.Buttons} >
        //         <Button bordered style={{justifyContent:'center'}}>
        //             <Text>Log In</Text>
        //         </Button>
        //         <Button transparent style={{justifyContent:'center'}}>
        //             <Text>Register</Text>
        //         </Button>
        //     </View>
            
   
            
        //     </Form>
        // </ImageBackground>
        )
    }
}

const style=StyleSheet.create({
    container:{
        flex:1,    
    },
    backgroundImages: {
        flex:1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    Buttons:{
        paddingLeft:20,
        paddingRight:20,
        paddingTop:20,
        marginTop:20,
    },
    backgroundImage: {
        flex:1,
        justifyContent: 'center',
        resizeMode: 'cover', // or 'stretch'
    },
    input:{
        borderRadius: 50,
        borderStyle: 'solid',
        borderWidth: 1,
        width: 300,
        height: 40,
        textAlign: 'center',
        alignSelf: 'center',
        padding: 5,
        marginTop: 10,
    },
    centerPath:{
        
    }
})
