import React from 'react'
import { AsyncStorage, ScrollView, Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import {connect} from 'react-redux'
import {cekRentItem} from '../Redux/Actions/books'
import Histo from "../src/component/histo";
import jwt from "react-native-pure-jwt";
class History extends React.Component{
    state={
        token:'',
        secret:'SECRET_KUY',
        jwt:[],
        data:[],
        books:[]
    }
    componentDidMount(){
        AsyncStorage.getItem('user', (error, result) => {
            if (result) {
                this.setState({
                    token:result
                })
                console.log('hasil token = ',this.state.token.length);
                
                if(this.state.token.length>0){
                    console.log('hasil ok');
                    jwt
                    .decode(
                        this.state.token, // the token
                        this.state.secret, // the secret
                        {
                        skipValidation: true // to skip signature and exp verification
                        }
                    )
                    .then(result=>{
                        this.setState({
                            jwt:result.payload,
                        })
                        this.state.data.push({
                            id_user:this.state.jwt.id,
                            token:this.state.token
                          })
                        console.log('hasil baca = ',this.state.data);
                        this.props.dispatch (cekRentItem(this.state.data[0]))
                          .then(result=>{
                              this.setState({
                                  books:result.value.data
                              })
                              console.log('data',this.state.books)
                          })
                    }) // already an object. read below, exp key note
                    .catch(console.error);
                }
            }
            
        })
    }
    render(){
        const {books} =this.state
        console.log('buku',books);
        
        return(
            <View >
                {books.length>0
                ?
                <View style={{flex:1}}>
                {books.map((value,index)=>{
                    return(
                        <Histo/>
                    )
                })}

                </View>


                :
                null
                }
            </View>

        )
    }
}
const mapStateToProps = state => {
    return {
        Borrow: state.books,
    };
  };
  
  export default connect (mapStateToProps) (History);

const style=StyleSheet.create({
    container:{
        flex:1,
        margin:10
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