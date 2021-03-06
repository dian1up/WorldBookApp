import React from 'react'
import {View, Text, TextInput, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native'
import Categori from '../src/component/category';
import Card from '../src/component/card';
import Books from '../src/component/Books';
import Loading from '../src/component/LoadingGet';
import { Button, Input } from 'native-base';
import {connect} from 'react-redux'; // higher order component HOC
import {getItem, getGenre} from '../Redux/Actions/books';

class Home extends React.Component{
    static navigationOptions={
        header: null,
    }   
    constructor(){
        super()
        this.state={
            origin:[],
            getItems:[],
            getGenre:[],
            stateFatch:false,
            search:''
        }
    }

    componentDidMount =  () =>{
         this.props.dispatch(getItem())
            .then(result => {
                this.setState({
                    origin:result.value.data,
                    getItems:result.value.data
                })
                this.props.dispatch(getGenre())
                .then(result => {
                    this.setState({
                        getGenre:result.value.data
                    })
                    console.log('data genre ',this.state.getGenre);
                    
                })
            })
    }

    handleSearch=()=>{
        let input = this.state.search
        let newData = this.state.origin.filter(function (params) {
            key1 = params.description.toLowerCase()
            key2 = params.title.toLowerCase()
            input =  input.toLowerCase()
            hasil1 = key1.includes(input) 
            hasil2 = key2.includes(input) 
            hasil = hasil1+hasil2
            return hasil
        })
        console.log('search = ', newData);
        this.setState({
            getItems:newData
        })
    }

    handleGenre=(e)=>{
        console.log('cok',e);
        let newData = this.state.origin.filter(function(params) {
            return params.genre1 == e.tag
        })
        console.log('cok hoi = ',newData);
        this.setState({
            getItems:newData
        })
        console.log('ccccccccccccc = ',this.state.getItems);
    }
    render(){
        const {origin} = this.state
        const {getItems} = this.state
        console.log('aaaaaaaaaaaa = ',getItems);
        
        let getItem = getItems
        const {getGenre} = this.state
        console.log('adwawdawdaw ',getItem);
        const data =['https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500','https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80']
        return(
        <View style={style.container}>
            <View style={{flexShrink:1, flexDirection:'row', backgroundColor:'#f8f8f8', padding:5,alignItems:'center', justifyContent:'space-between'}}>
                <Button transparent  onPress={()=>this.props.navigation.openDrawer()}>
                    <Image  source={require('../src/assets/images/menu.png')} style={style.iconMenu} />
                </Button>
                
                <View style={{padding:1 ,justifyContent:'center', alignItems:'center',flexDirection:'row', borderStyle:'solid', borderWidth:1, maxHeight:50, maxWidth:200, borderRadius:50}}>
                    <TextInput 
                    onChangeText={(e)=>{this.setState({search:e})}}
                    placeholder='Search' 
                    style={{height:'100%', width:'80%', borderRadius:50}}/>
                    <Button transparent onPress={this.handleSearch}>
                        <Image style={{width:30, height:30}} source={require('../src/assets/images/search.png')}/>
                    </Button>        
                </View>
                
                <Image source={require('../src/assets/images/logo.png')} style={style.iconMenu2} />   
            </View>
            
            {getGenre.length>0
            ?
            <View style={{flexShrink:10, backgroundColor:'white'}}>
            <ScrollView>
            <ScrollView horizontal style={{padding:10}}>
                {getGenre.map((value,index)=>{
                    return(
                        <TouchableOpacity key={index} onPress={()=>this.handleGenre(value)}>
                            <Categori data={value} />
                        </TouchableOpacity>
                    )   
                })}
                
            </ScrollView>
            <Text style={{fontSize:20, fontWeight:'bold', marginHorizontal:10}}>POPULER BOOKS</Text>
            <ScrollView horizontal style={{padding:10}}>
                {origin.map((value,index)=>{
                    return(
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Details' ,{
                            item:value
                        })}>
                            <Books status={value} key={index}/>
                        </TouchableOpacity>
                    )
                })}
                
            </ScrollView>

            <ScrollView  style={{padding:10}}>
            <View style={{flexDirection:'row', justifyContent:'space-between', flexWrap:'wrap'}}>
                    {getItem.map((value,index)=>{
                        return(
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Details' ,{
                                item:value
                            })}>
                                <Books status={value} key={index}/>
                            </TouchableOpacity>
                            //<Card title={value.title} url={value.image} key={index}/>
                        )
                    })}
               </View>
                {/* {getItem.map((value,index)=>{
                    return(
                        <Books status={value} key={index}/>
                        //<Card title={value.title} url={value.image} key={index}/>
                    )
                })}
                 */}
            </ScrollView>
            </ScrollView>
            </View>
            
            :
            <View style={{alignItems:'center', flex:1}}>
                <Loading show={true}/>
            </View>
            }
        </View>
        )
    }
}

const mapStateToProps = state => {
    return {
      Books: state.books,
    };
  };
  
  export default connect (mapStateToProps) (Home);

const style=StyleSheet.create({
    container:{
        flex:1,
        width:null,
        height:null,
        resizeMode:"cover",
        borderStyle:'solid',
        
    },
    iconMenu:{
        width:50,
        height:50,
        marginLeft:10,
        resizeMode:'contain',
        
    },
    iconMenu2:{
        width:50,
        resizeMode:'contain',
        height:50,
        alignSelf:'flex-start',
        marginLeft:10,
        
    },
    seacrhBar:{
        maxWidth:50,

    },
    cover:{
        position:'absolute',
        top: '50%',
        left: '50%',
        backgroundColor: '#2f3640',
        height: 40,
        borderRadius: 40,
        padding: 10,
    },
    tb:{
        display:'flex',
        width: '100%'
    },
    td:{
        flexDirection:'row',
        textAlignVertical: 'center'
    }
})