import React from 'react'
import { View, Image, Alert, Animated, Modal } from 'react-native'
export default class Loading extends React.Component{
    constructor(props){
        super(props);

        this.LoadingOpacity = new Animated.Value(0)
    }

    fadeAnimation(){
        Animated.sequence([
            Animated.timing(
                this.LoadingOpacity,
                {
                    toValue:1,
                    duration:500
                }
            ),
            Animated.timing(
                this.LoadingOpacity,
                {
                    toValue:0,
                    duration:500
                }
            )
        ]).start(()=> this.fadeAnimation());
    }

    componentDidMount(){
        this.fadeAnimation();
        console.log('anim = ',this.LoadingOpacity);
        
    }

    render(){
        const putar=this.LoadingOpacity.interpolate({
            inputRange:[0,1],
            outputRange:['0deg','360deg']
        })
        return(
            <View style={{opacity: (this.props.show) ? 1 : 0,flex:1,alignContent:'center',alignItems:'center' , justifyContent:'center', alignItems:'center', alignSelf:'center'}}>
                <Animated.Image source={require('../assets/images/loading.png')} style={{width:250,height:200,alignSelf:'center', resizeMode:'contain', transform: [{rotate:putar}]}}/>
                <Animated.Text  style={{opacity: this.LoadingOpacity}}>LOADING</Animated.Text>

            </View>

        ) 
    }
}