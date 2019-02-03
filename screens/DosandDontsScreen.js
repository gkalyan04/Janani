import React from "react";
import {StyleSheet, View, Text,StatusBar } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import {Container, Header, Left, Right, Row,Tab, Tabs} from 'native-base';
import Tab1 from './tabs/dos';
import Tab2 from './tabs/donts';

export default class DoScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="bullhorn" size={25} color="#900" />
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
              <Text style={{color:"white",fontSize:20}}>Do's & Don'ts</Text>
            </View>
         </Header>
         
         <Header hasTabs style={{backgroundColor:'black',height:0}} />
         <Tabs style={{backgroundColor:'#0066ff'}}>
           <Tab heading="Do's" >
             <Tab1 />
           </Tab>
           <Tab heading="Don'ts">
             <Tab2 />
           </Tab>
         </Tabs>
       </Container>
    );
  }
}
