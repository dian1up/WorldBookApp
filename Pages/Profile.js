import React from 'react'
import { View, StyleSheet, Image, Text, AsyncStorage } from 'react-native';
import {connect} from 'react-redux'; // higher order component HOC
import jwt from "react-native-pure-jwt";
class Profile extends React.Component{
    state={
        token:'',
        jwt:[],
        name:'',
    }
    componentDidMount(){
        AsyncStorage.getItem('user', (error, result) => {
            if (result) {
                this.setState({
                    token:result
                })
                console.log("data22 = ", this.state.token )
            }else{
                this.setState({
                    token:''
                })
                console.log("AsyncStorage1 = Kosong", result )
            }
        })
    }
    render(){

        const {token} = this.state
        const secret = 'SECRET_KUY'
        const {user} = this.props
        console.log('data token = ',token);
        if(token.length>0){
            jwt
            .decode(
                token, // the token
                secret, // the secret
                {
                skipValidation: true // to skip signature and exp verification
                }
            )
            .then(result=>{
                let dt=result.payload.name
                let txt = dt.toUpperCase()
                this.setState({
                    jwt:result.payload,
                    name:txt
                })
                console.log('hasil baca = ',result.payload);
            }) // already an object. read below, exp key note
            .catch(console.error);
        }
        


        return(
            <View style={style.container}>
                <View style={style.contanHead}>
                <View style={style.contanHead1}>
                    <Image style={{width:'100%',height:'100%'}} source={require('../src/assets/images/head1.png')}/>
                </View>

                <View style={style.contanHead1}>
                    <Image style={{width:'100%',height:'100%'}}  source={require('../src/assets/images/head2.png')}/>
                </View>
                <View style={{height:'100%',width:'100%',position:'absolute',justifyContent:'center',zIndex:1}}>
                    <View style={{alignSelf:'center', borderWidth:1,borderStyle:'solid',height:'55%',width:'40%',borderRadius:100,shadowOpacity:100, marginBottom:20}}>
                        <Image source={{uri:this.state.jwt.image}} style={{borderRadius:100,resizeMode:'cover',width:'100%',height:'100%',shadowColor:'red',shadowRadius:100,shadowOpacity:100}}/> 
                    </View>
                    <Text style={{alignSelf:'center', fontSize:22,}}>{this.state.name}</Text>
                </View>
                </View>
                    {/* <Image source={require('../src/assets/images/head2.png')}/> */}
                <View style={style.containBody}>
                    <View style={{justifyContent:'space-between',flexDirection:'row',margin:5,borderStyle:'solid', height:'15%', borderBottomWidth:1}}>
                        <View style={{alignSelf:'center', flexDirection:'row'}}>
                            <Image source={require('../src/assets/images/gmail.png')} style={{height:50, width:50}}/>
                            <Text style={{alignSelf:'center', marginLeft:10, fontWeight:'bold', fontSize:22}}>Email</Text>
                        </View>
                        <View style={{alignSelf:'center'}}>
                            <Text>{this.state.jwt.email}</Text>
                        </View>
                    </View>

                    <View style={{justifyContent:'space-between',flexDirection:'row',margin:5,borderStyle:'solid', height:'15%', borderBottomWidth:1}}>
                        <View style={{alignSelf:'center', flexDirection:'row'}}>
                            <Image source={require('../src/assets/images/donate.png')} style={{height:50, width:50}}/>
                            <Text style={{alignSelf:'center', marginLeft:10, fontWeight:'bold', fontSize:22}}>Donate</Text>
                        </View>
                        <View style={{alignSelf:'center'}}>
                            <Text>0</Text>
                        </View>
                    </View>

                    
                </View>
            </View>
        )
    }
}
const mapStateToProps = state =>{
    return{
      Userlogin: state.login
    }
  }
export default connect(mapStateToProps)(Profile);

const style=StyleSheet.create({
    container:{
        flex:1
    },
    contanHead:{
        flex:1.5,
        // borderWidth:1,
        // borderStyle:'solid'
    },
    contanHead1:{
        flex:1,
        // borderWidth:1,
        // borderStyle:'solid'
    },
    contanHead2:{
        flex:1,
        // borderWidth:1,
        // borderStyle:'solid'
    },
    containBody:{
        flex:2,
        borderWidth:1,
        borderStyle:'solid'
    }
})