import React from 'react';
import { StyleSheet,Image, Text, View,SafeAreaView,ScrollView,Dimensions } from 'react-native';

import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import ExpertScreen from './screens/ExpertScreen';
import DosScreen from './screens/DosandDontsScreen'
import GauriScreen from './screens/GauriScreen'
import SchemesScreen from './screens/SchemesScreen'
import AanganwadiScreen from './screens/AanganwadiKendraScreen'


export default class App extends React.Component {
  render() {
    return(

      <AppDrawerNavigator/>
    )
  }
}


const CustomDrawerComponent = (props) => (
 <View style={{flex:1,marginTop:50}}>
  <View style={{height: 150, backgroundColor: 'white',marginLeft:60}}>
    <Text style={{marginBottom:10,marginLeft:20,fontSize:25,color:"black"}}>Janani</Text>
    <Image source={require('./assets/preg.jpg')} style={{height:120,width:120,borderRadius: 60}} />
  </View >
    <ScrollView style={{marginTop:20}}>
      <DrawerItems {...props}/>
    </ScrollView>
    </View>
)

const AppDrawerNavigator = createDrawerNavigator({
  Home: HomeScreen,
  "Do's and Don'ts": DosScreen,
  "Expert Advice ?": ExpertScreen,
  "Gauri Chatbot":GauriScreen,
  "Know Various Govt. Schemes": SchemesScreen,
  "Nearby Aanganwadi Kendra's ":AanganwadiScreen
}, {
  contentComponent: CustomDrawerComponent
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
