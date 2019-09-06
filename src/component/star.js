import React,{Component} from "react";
import { View, StyleSheet, Image, Text } from "react-native";
export default class Books extends Component{
    render(){
        var data=[]
        const input=this.props.rating;
        let set=0
        let path=''
        for (let index = 1; index <=5; index++) {
            if(index>input && index-input>0 && index-input<1){
                console.log('pecahan');
                path=require('../assets/images/Star/setengahStar.png')
            }
            else if(set=1 && input<index){
                console.log('kosong');
                path=require('../assets/images/Star/unfillStar.png')  
            }
            else{
                console.log('bulat');
                path=require('../assets/images/Star/fillStar.png')
            }
            data.push((<Image style={style.image} source={path}/>))
        }

        return(
            <View style={style.container}>
                {data}
            </View>
        )
    }
}

const style = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center'
    },
    image: {
     width: 10,
     height: 10
    }
})