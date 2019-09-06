import React from 'react'
import { ScrollView, Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default class Detail extends React.Component{
    render(){
        const { goBack } = this.props.navigation;
        const Param = this.props.navigation.getParam('item');
        console.log("hasil props = ",Param);
        
        return(
            <View style={style.container}>
                <View style={style.bodyBooks}>
                    <View style={{height:'100%'}}>
                        <Image source={{uri:Param.image}} style={style.ImageBack}/>
                        <View style={{height:'100%',justifyContent:'flex-end', marginRight:20}}>
                        <Image source={{uri:Param.image}} style={style.ImageFont}/>
                        </View>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')} style={{height:'10%', width:'10%', margin:10, position:'absolute',zIndex:1}}>
                            <Image source={require('../src/assets/images/back.png')} style={style.ImageButton}/>
                        </TouchableOpacity>
                        
                    </View>
                </View>

                <View style={style.bodyDetail}>
                <ScrollView>
                    <Text>
                        {Param.description}
                    </Text>
                    </ScrollView>
                </View>

                <View style={style.bodyButton}>
                    <TouchableOpacity style={{backgroundColor:'rgba(0,0,0,0.5)',borderWidth:1,height:50,width:100,borderRadius:50,justifyContent:'center'}}>
                        <Text style={{alignSelf:'center'}}>RENT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const style=StyleSheet.create({
    container:{
        flex:1,
    },
    bodyBooks:{
        flex:2,
        borderStyle:'solid',
      
    },
    bodyButton:{
        flex:0.4,
        borderStyle:'solid',
        alignItems:'center',
    },
    bodyDetail:{
        flex:1.5,
        padding:10,
        
    },
    ImageBack:{
        resizeMode:'stretch',
        height:'90%', 
        width:'100%', 
        borderBottomLeftRadius:3, 
        borderBottomRightRadius:3, 
        position:'absolute'
    },
    ImageFont:{
        resizeMode:'stretch',
        height:'40%', 
        width:'25%', 
        position:'absolute',
        zIndex:1, 
        justifyContent:'flex-end', 
        alignSelf:'flex-end'
    },
    ImageButton:{
        resizeMode:'stretch',
        height:'100%',
        width:'100%'
    },
})