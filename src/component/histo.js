import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default class Histo extends React.Component{
    render(){
        return(
            <TouchableOpacity >
            <View style={{height:'15%', borderWidth:1, borderStyle:'solid', marginVertical:10, flexDirection:'row'}}>
                <View style={{height:'100%', width:'20%',  borderWidth:1, borderStyle:'solid', padding:2}}>
                    <Image source={{uri:'value.image'}} style={{height:'100%', width:"100%", resizeMode:'contain'}}/>
                </View>
                <View style={{height:'100%', width:'60%',  borderWidth:1, borderStyle:'solid', padding:2}}>
                    <View style={{height:'50%', width:'100%',  borderWidth:1, borderStyle:'solid',justifyContent:'center'}}>
                        <Text numberOfLines={1}>{'value.title'}</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',height:'50%', width:'100%',  borderWidth:1, borderStyle:'solid'}}>
                        <Text style={{alignSelf:'flex-end'}}>{'value.date_borrow'}</Text>
                        <Text style={{alignSelf:'flex-end'}} >haiiii</Text>
                    </View>
                </View>
                <View style={{height:'100%', width:'20%',  borderWidth:1, borderStyle:'solid', padding:4}}>
                    <Image source={require('../assets/images/go.png')} style={{width:'100%', height:'100%', resizeMode:'contain'}} />
                </View>
            </View>
            </TouchableOpacity>
        )
    }
}

const style = StyleSheet.create({
    container:{
        flex:1,
        margin:10,
    },
    body:{
        height:230,
        width:130,
    },
    bodyBook:{
        height:'80%',
        width:'100%',
        borderStyle:'solid',
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center'
        
    },
    imgBook:{
        height:'100%',
        width:'100%',
        position:'absolute',
        resizeMode:'stretch',

    },
    imgBook2:{
        height:50,
        width:150,
        position:'relative',
        resizeMode:'stretch',
        zIndex:2,
        transform:[{rotate:'-45deg'}],
        borderRadius:20
    },
    icon:{
        
    }
})