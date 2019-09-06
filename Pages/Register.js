import React from 'react'
import { 
    Image,
    StyleSheet,
    
    View,
    ImageBackground
 } from "react-native";
import { Container, Text, Button, Label, Item, Form, Input } from "native-base";

export class Register extends React.Component{

    constructor(props){
        super(props);
        this.state={
            Email:"",
            Username:"",
            Password:"",
            StateRegister:[],
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static navigationOptions={
        header: null,
    }

    handleSubmit = e =>{
        e.preventDefault();
        this.state.StateRegister.push({
            name: this.state.Username,
            email: this.state.Email,
            password: this.state.Password
        })
        console.log(this.state.StateRegister);
        
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
                <Label>Email</Label>
                <Input 
                    onChangeText={(e)=>{
                        this.setState({Email:e})
                    }}/>
            </Item>
            <Item floatingLabel>
                <Label>Username</Label>
                <Input
                    onChangeText={(e)=>{
                        this.setState({Username:e})
                    }}    
                />
            </Item>
            <Item floatingLabel>
                <Label>Password</Label>
                <Input
                    secureTextEntry={true}
                    onChangeText={(e)=>{
                        this.setState({Password:e})
                    }}    
                />
            </Item>

            </View>
            <View style={{marginTop:20, paddingRight:20, paddingLeft:20}}>
            <Button style={{justifyContent:'center'}} onPress={this.handleSubmit}>
                <Text >Log In</Text>
            </Button>
            <View style={{flexDirection:'row', justifyContent:'center', marginTop:10}}>
                <Text style={{color:'#e7d3a4'}}>Already Registered?</Text>
                <Text onPress={()=>this.props.navigation.navigate('Login')} style={{color:'#54b948', marginLeft:5}}>Log In</Text>
            </View>
            </View>
            <Text>{this.state.Password}</Text>
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
