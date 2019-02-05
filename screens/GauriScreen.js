import React from "react";
import {StyleSheet, View, Text,Image,StatusBar } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { GiftedChat } from "react-native-gifted-chat";
import {Container, Header,Footer, Input,Item,Left,Button, Right, Row} from 'native-base';
import { Dialogflow_V2 } from "react-native-dialogflow-text";

const BOT_USER = {
  _id: 2,
  name: "SmartBot",
  avatar: "https://obs.line-scdn.net/0hHOnN5vXrF2BTNzulEFVoN29yGQ0kGREoK1FeAHZnGwAtBFA0PwMIDn40QFkpDlg2bwNZA3AySlgp/preview"
};

export default class GauriScreen extends React.Component {

  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="rocket" size={25} color="red" />
    )
  }

  constructor(props) {
    super(props);
    let firstMsg = {
      _id: 1,
      text: "Hi, How can I help you? :)",
      createdAt: new Date(),
      user: {
        _id: 2,
        name: "Gauri",
        avatar: "https://obs.line-scdn.net/0hHOnN5vXrF2BTNzulEFVoN29yGQ0kGREoK1FeAHZnGwAtBFA0PwMIDn40QFkpDlg2bwNZA3AySlgp/preview"
      }
    }

    this.state = {
      messages: [firstMsg]
    }
  }

  componentDidMount() {
    Dialogflow_V2.setConfiguration(
      "gauri-ab979@appspot.gserviceaccount.com",
      "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC8/wd/gB7G+xO0\n1vLN9lfImJK6C1ZV15Jafq0jCLgC+K5SYndCUdesCC00Vjp1x4DOyMTG1evE7njy\n9dCElH+9vc88oAt3ar8GD0soKNgF3QkdQmreykTSf5RkAQxVA0SDSujshJ1wn4hJ\nKdzse3iLBmYtsFqEpsJ+7p3ptLERK1EWkcc9FClmgIYa75GyZOzwIL/v3ZehZZor\nHExZlpyvlYv6pMuYFyUwwQe4s1fNPspC+tN7WUYebf8PAW1se+exKMDamYhYLEvh\nAlr6kVL+UokwYX4PnpWM+mdbfTyT2389V34kikBe0puSPona/sO3J8Bx3rWCW0Vz\nw5+fp4ZbAgMBAAECggEAGmThZrB9W9uXonM8YIAtPUH1h87qhT2AXmv/gPuIOz4A\nllfTAOuOG6PesEb0jhtJBVfrhzs73HpTYNbsgn98oYJ/DR/qyggZ2l5LaDXgCV2X\nlsL+StPjraQMlLTCxKKasF1HTzSsChz1ewZCKLKLoJrJrUrKMWlak0B+xDMsYVG2\nRgjduEz5JHmBNay+x5GfS9uCqqkDo6pBkBJYHFIXew/K+qM0ad748esmjMEPRDg3\nixLvxLzpbD7ZyCmPQhTKBr2HTBjhvavJs3DzPkVOyaOoOp966tee90uqAC8JtEV4\n2aswTy1gjSUVeEPInyXJ/F5dpboKgDHy54kYwu3l3QKBgQDqnOduv4h21U6MbcKs\n9/TbdhOajwpu67vP/gcwxVqWfgrNb3xLN5RTJL3Salp7B3+27gHqpQ/gW9YSpLnf\nNUjBifYkBMDEruai8bCEr+msL6vd6r23FqUesfq4kZ3ZF+mWNJjQRLGFo35MsOiX\npQMVgSS6Ijroq5QzKGmB5vDrJQKBgQDOOZTCYc66/N0Q0Skh+ZHnAQ5ulhNbX4fw\nZxFh7ykxDdR5MVNoI3DMdLQUoAu/RQ35Es8DnSp4u9S3c+C5ZexWtYYo0v0d0pkD\n/IR8isadAUsOKvpfbkSHSlwTNPh3oNVHcdQz/yeEE6gI3DzuANPjhLJtXaXV7Dt+\n8jlXIVizfwKBgHTcWtrrRIoMjeec9I87oxd9pR4jicreWNqtad99LjYv6imSEpNU\nx+jyMCsTFqaZgaAYxZOfTF0w4Vy/+GWaIPdmRNiEFZDinbckNAyjov1FcZJETuNX\nwD+d34j332w3YP6UjFmRHeu3GD4TEIgYhYS8oxKj4jvq2xLwWj1+TxqRAoGAWNme\nKhGRzCZd6Hz1R9oK7ogZ+7NVK60BGKaPaq5sBOJ8hKqn0NpUIwK1A53g8cuCtalQ\n37G7NsFWaKPYUoiDRuh2oOgmfc7adkk5m57+624/NB94N91+UPvMp8nOs1vsCBgW\n4UAxekotv4OEDNb2c7QcW9pZNM3O5GbgJZYMbWkCgYAsRoKtiQ3og5I8MOG/rg0z\ne8S2LEy4u2PR6e9e/pQmaHS7IFzvruNv+a3TYEcosQNSotdhhX1TFBvPWHRoX+OK\nnRtb95yE73sZfsets5UlIyd8wkPT5EMK4x/Uv2J3OloBRlXmqC6kqvLKQ68MKNWJ\n3hFgwC8Ft49DTZ9Dq2umqQ==\n-----END PRIVATE KEY-----\n",
      Dialogflow_V2.LANG_ENGLISH_US,
      "gauri-ab979"
    );
  }

  sendBotResponse(text) {
    let msg = {
      _id: this.state.messages.length + 1,
      text,
      createdAt: new Date(),
      user: BOT_USER
    };
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, [msg])
    }));
  }

  handleGoogleResponse(result) {
    console.log(result);
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    this.sendBotResponse(text);
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
    let message = messages[0].text;

    Dialogflow_V2.requestQuery(
      message,
      result => this.handleGoogleResponse(result),
      error => console.log(error)
    );
  }

  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'#9b319b'}}>
          <View style={{alignItems:"flex-start",margin:10}}>
            <StatusBar backgroundColor="#9b319b" barStyle="light-content" />
              <Icon name="bars" style={{ marginTop:3,fontSize:24,color: "white" }} onPress={() =>
                this.props.navigation.openDrawer()} />
          </View>

          <View style={{flex:1,marginTop:10,marginLeft:115}}>
            <Text style={{color:"white",fontSize:20}}>Chatbot Gauri</Text>
          </View>
        </Header>
        
        <View style={{flex: 1}}>
          <GiftedChat
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            user={{
            _id: 1
            }}
          />
        </View>
      
      </Container>
    );
  }
}
