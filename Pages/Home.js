import React from 'react'
import {View, Text} from 'react-native'
import { Drawer } from 'native-base';
import SideBar from '../src/component/sidebar';

class Home extends React.Component{
    closeDrawer = () => {
        this._drawer._root.close()
    };

    openDrawer = () => {
        this._drawer._root.open()
    };

    render(){
        return(
            <Drawer 
            ref={(ref) => { this.drawer = ref; }} 
            content={<SideBar navigator={this.navigator} />} 
            onClose={() => this.closeDrawer()} >
                <View>
                    <Text onPress={this.openDrawer}>awdawsdsawd</Text>
                </View>
            </Drawer>
        )
    }
}
export default Home