import React from 'react'
import { 
    Image,
    StyleSheet,
    Alert,
    View,
    ImageBackground,
    AsyncStorage
 } from "react-native";
import { Container, Text, Button, Label, Item, Form, Input } from "native-base";
import {connect} from 'react-redux'
import {Userlogin} from '../Redux/Actions/Login'
import  Loading  from '../src/component/Loading';
class Login extends React.Component{

    constructor(props){
        super(props);
        this.state={
            Username:"",
            Password:"",
            StateLogin:[],
            stateFatch:false,
            name:'',
            login:[]
        }
    }

    static navigationOptions={
        header: null,
    }

    handleSubmit = async(e) =>{
        e.preventDefault();
        this.setState({
            stateFatch:true
        })
        this.state.StateLogin.push({
            email: this.state.Username,
            password: this.state.Password
        })
        console.log(this.state.StateLogin[0]);
        this.props.dispatch(Userlogin(this.state.StateLogin[0]))
        .then(result=>{
            const status=result.value.data.status
            console.log("oka = ",result.value.data.jwtToken)
            if(status==200){
                console.log("okaasdawd " )
                this.setState({
                    Username:'',
                    Password:'',
                    StateLogin:[],
                    stateFatch:false
                })
                AsyncStorage.setItem('user',result.value.data.jwtToken)
                // const data = await AsyncStorage.getItem('user')
               AsyncStorage.getItem('user', (error, result) => {
                    if (result) {
                        this.setState({
                            login:result
                        })
                        console.log("AsyncStorage = ", result )
                    }else{
                        console.log("AsyncStorage = Kosong", result )
                    }
                })
                this.props.navigation.navigate('Home') 
            }else{
                setTimeout(function(){

                    //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
                    Alert.alert('Login Failed','Email Or Password Wrong!!!')
              
                  }, 500);
                this.setState({
                    Username:'',
                    Password:'',
                    StateLogin:[],
                    stateFatch:false
                })
                  
            }
             
        })
        // this.props.dispatch(Userlogin(this.state.userlogin[0]))
        // .then(result=>console.log(result)) 
        // .catch(()=>{console.log('xxxxxxxxxxxxxxxxxx')})
    }

 
    render(){
        return(
        // <Loading show={this.state.stateFatch}/>
        <ImageBackground style={style.backgroundImages} source={require('../src/assets/images/bg.png')}>
        
        <View style={{flex:2, justifyContent:'center',padding:20}}>
            
            <Image source={require('../src/assets/images/logo.png')} style={{width:250,height:200,alignSelf:'center'}}/>
            <Text style={{alignSelf:'center'}}>WORLD BOOK APPS</Text>
        </View>
        <View style={{flex:2, justifyContent:'flex-start'}}>
            <View style={{paddingRight:20, paddingLeft:20}}>
            <Item floatingLabel>
                <Label>Username</Label>
                <Input 
                onChangeText={(e)=>this.setState({Username:e})}
                value={this.state.Username}/>
            </Item>
            <Loading show={this.state.stateFatch}/>
            <Item floatingLabel>
                <Label>Password</Label>
                <Input 
                onChangeText={(e)=>this.setState({Password:e})}
                secureTextEntry={true}
                value={this.state.Password}/>
            </Item>

            </View>
            <View style={{marginTop:20, paddingRight:20, paddingLeft:20}}>
            <Button style={{justifyContent:'center'}} onPress={this.handleSubmit}>
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
const mapStateToProps = state =>{
    return{
      Userlogin: state.login
    }
  }
  export default connect(mapStateToProps)(Login);

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
