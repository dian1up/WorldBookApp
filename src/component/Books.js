import React,{Component} from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import Star from "../component/star";
export default class Books extends Component{

    navigateToScreen = ( route ) =>(
        () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    })

    render(){
        let statut=''
        if(this.props.status.status1==1){
            statut=require('../assets/images/avail.png')
        }else{
            statut=require('../assets/images/notavail.png')
        }
        console.log('data props = ',this.props.status );
        
        return(
            <View 
            style={style.container}>
                <View style={style.body}>
                    <View style={style.bodyBook}>
                    <Image source={statut} style={style.imgBook2} />
                    <Image source={{uri:this.props.status.image}} style={style.imgBook} />
                    </View>
                    <View style={{alignItems:'flex-start'}}>
                        <Text numberOfLines={1} style={{ width: 100, fontSize:10, color:'#f1f0cf'}}>
                            Jk.Howling
                        </Text>
                    </View>
                    <View style={{alignItems:'flex-start'}}>
                        <Text numberOfLines={1} style={{ width: 100, marginVertical: 2 }}>
                            {this.props.status.title}
                        </Text>
                    </View>
                    <View style={{alignItems:'flex-start'}} >
                        <Star rating='3.5'/>
                    </View>
                </View>
            </View>
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