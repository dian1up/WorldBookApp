import React from 'react'
import {Text, View, StyleSheet, Image} from 'react-native'
export default class Category extends React.Component{
    render(){
        console.log('uriiiiiiiiiiiiiiii = ',this.props.url);
        const input=this.props.data
        return(
            <View style={style.container}>
                <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color:'blue'}}>{input.genre}</Text>
                </View>
                <View style={{flex:1, justifyContent:'center', alignItems:'center', }}>
                        <Image style={{ width:'80%', height:'80%', resizeMode:'contain'}} source={{uri:input.image}}/>
                </View>
            </View>
        )
    }
}

const style= StyleSheet.create({
    container:{
        width: 241,
        height: 116,
        marginHorizontal:10,
        borderRadius:20,
        backgroundColor:'rgba(0,255,0,0.3)',
        flex:1,
        flexDirection:'row'
    },
})