import React from "react";
import {StyleSheet, View, Text,Image,StatusBar } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import {Container, Header,Footer, Input,Item,Left,Button, Right, Row} from 'native-base';
export default class GauriScreen extends React.Component {

  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="rocket" size={25} color="violet" />
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

            <View style={{flex:1,marginTop:10,marginLeft:115}}>
              <Text style={{color:"white",fontSize:20}}>Chatbot Gauri</Text>
            </View>
         </Header>
         <Image
          style={{width: 300, height: 300, alignSelf:"center",marginTop:130}}
          source={{uri: 'https://us.123rf.com/450wm/goodzone95/goodzone951803/goodzone95180300023/96668201-stock-vector-chatbot-icon-cute-robot-working-behind-laptop-modern-bot-sign-design-smiling-customer-service-robot-.jpg?ver=6'}}
        />
      
      </Container>
    );
  }
}
