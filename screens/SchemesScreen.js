import React from "react";
import {StyleSheet, View, Text,Image,StatusBar } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import {Container, Header, Left, Right,  Row} from 'native-base';
export default class SchemesScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="info" style={{ fontSize:24, color: tintColor}} />
    )
  }

  render() {
    return (
      <Container>
      <Header style={{backgroundColor:'#0066ff'}}>
            <View style={{alignItems:"flex-start",margin:10}}>
              <StatusBar backgroundColor="#0066ff" barStyle="light-content" />
              <Icon name="bars" style={{ marginTop:3,fontSize:24,color: "white" }} onPress={() =>
              this.props.navigation.openDrawer()} />
            </View>

            <View style={{flex:1,marginTop:10,marginLeft:70}}>
              <Text style={{color:"white",fontSize:20}}>Indian Goverment Schemes</Text>
            </View>
         </Header>
         <View>
         <Image
         style={{width: 420, height: 300, alignSelf:"center",marginTop:150}}
         source={{uri: 'https://pbs.twimg.com/media/CzM9AElUQAAY-Tr.jpg'}}
       />
         </View>
         

  </Container>
    );
  }
}
