import React from "react";
import {StyleSheet, View,Image, Text,StatusBar,ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Container, Header, Left, Right, Row,Content,Card,CardItem,Body} from 'native-base';


export default class ExpertScreen extends React.Component {

  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="handshake-o" size={25} color="green" />
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
              <Text style={{color:"white",fontSize:20}}>Expert Advice</Text>
            </View>
            
         </Header>
         <ScrollView>
         <Content padder>
         <Card>
           <CardItem header bordered>
             <Text style={{fontSize:20,color:"black",marginLeft:100}}>Dr. Sunitha Singh</Text>
           </CardItem>
           <CardItem bordered>
             <Body>
             <Image
          style={{width: 350, height: 250}}
          source={{uri: 'https://www.bapio.co.uk/wp-content/uploads/2015/12/img-a-500x377.jpg'}}
        />
             </Body>
           </CardItem>
           <CardItem footer bordered>
             <Text style={{fontSize:20,color:"green",marginLeft:150}}>Call Now</Text>
           </CardItem>
         </Card>
       </Content>
       <Content padder>
         <Card>
           <CardItem header bordered>
             <Text style={{fontSize:20,color:"black",marginLeft:100}}>Dr. Shipla Devi</Text>
           </CardItem>
           <CardItem bordered>
             <Body>
             <Image
          style={{width: 350, height: 250}}
          source={{uri: 'https://www.vcg-corp.com/images/shutterstock_23926699.jpg'}}
        />
             </Body>
           </CardItem>
           <CardItem footer bordered>
             <Text style={{fontSize:20,color:"green",marginLeft:150}}>Call Now</Text>
           </CardItem>
         </Card>
       </Content>
       </ScrollView>
       </Container>
    );
  }
}
