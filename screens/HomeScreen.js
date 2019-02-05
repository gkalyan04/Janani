import React from "react";
import {StyleSheet, View, Text,Image,StatusBar } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import ActionButton from 'react-native-action-button';
import {Container, Header, Left, Right, Row,Content,Card,CardItem,Body} from 'native-base';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="home" style={{ fontSize:24, color: tintColor}} />
    )
  }

  render() {
    return (

      <Container>
        <Header style={{backgroundColor:'#32a83a'}}>
            <View style={{alignItems:"flex-start",margin:10}}>
              <StatusBar backgroundColor="#32a83a" barStyle="light-content" />
              <Icon name="bars" style={{ marginTop:3,fontSize:24,color: "white" }} onPress={() =>
              this.props.navigation.openDrawer()} />
            </View>

            <View style={{flex:1,marginTop:10,marginLeft:140}}>
              <Text style={{color:"white",fontSize:20}}>Janani</Text>
            </View>
        </Header>
         <Image
          style={{width: 100, height: 170, alignSelf:"center",marginTop:35}}
          source={{uri: 'https://www.wpclipart.com/people/female/pregnant/Pregnant_Woman_pink.png'}}
        />

        <View style={{marginTop:20,marginBottom:150}}>
          <Text style={{color:"black",fontSize:30,textAlign:"center",marginLeft:20,marginRight:20}}>
           "Using this, we are trying to take a small step towards the betterment of women undergoing this beautiful process of childbirth."
          </Text>
        </View>
        <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
        
          <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='red' title="Alert Family Memebers" onPress={() => console.log("notes tapped!")}>
            <Icon name="exclamation" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='green' title="Alert Nearby Hospitals" onPress={() => {}}>
            <Icon name="exclamation" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          
        </ActionButton>
        </View>

       </Container>
        
    );
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
