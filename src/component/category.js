import React from 'react'
import {Text, View, StyleSheet, Image} from 'react-native'
export default class Category extends React.Component{
    render(){
        return(
            <View style={style.container}>
                <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Text>Action</Text>
                </View>
                <View style={{flex:1, justifyContent:'center', alignItems:'center', }}>
                    <Image style={{ width:'80%', height:'80%', resizeMode:'contain'}} source={{uri:this.props.url}}/>
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
        backgroundColor:'#28BFDB',
        flex:1,
        flexDirection:'row'
    },
})