import React from "react";
import {StyleSheet, View, Text,StatusBar,Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';



import {Container, Header, Left,Right, Row} from 'native-base';

export default class AanganwadiScreen extends React.Component {

  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="map" size={25} color="pink" />
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

              <View style={{flex:1,marginTop:10,marginLeft:85}}>
                <Text style={{color:"white",fontSize:20}}>Nearby Aanganwadi's</Text>
              </View>
          </Header>
          <Image
          style={{width: 450, height: 700}}
          source={{uri: 'https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg'}}
        />

          </Container>
          
       
    );
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
})