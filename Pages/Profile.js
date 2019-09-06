import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native';

export default class Profile extends React.Component{
    render(){
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
                        <Image source={{uri:'https://cdn0-production-images-kly.akamaized.net/2Sr4_IgZ4EVApX_JbCljXD_ympY=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2714564/original/034635400_1548654389-Dx95B_oUUAANtWV.jpg'}} style={{borderRadius:100,resizeMode:'cover',width:'100%',height:'100%',shadowColor:'red',shadowRadius:100,shadowOpacity:100}}/>
                        
                    </View>
                    <Text style={{alignSelf:'center', fontSize:22,}}>RADIN DIAN ZETA</Text>
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
                            <Text>awdwad</Text>
                        </View>
                    </View>

                    <View style={{justifyContent:'space-between',flexDirection:'row',margin:5,borderStyle:'solid', height:'15%', borderBottomWidth:1}}>
                        <View style={{alignSelf:'center', flexDirection:'row'}}>
                            <Image source={require('../src/assets/images/donate.png')} style={{height:50, width:50}}/>
                            <Text style={{alignSelf:'center', marginLeft:10, fontWeight:'bold', fontSize:22}}>Donate</Text>
                        </View>
                        <View style={{alignSelf:'center'}}>
                            <Text>awdwad</Text>
                        </View>
                    </View>

                    
                </View>
            </View>
        )
    }
}

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