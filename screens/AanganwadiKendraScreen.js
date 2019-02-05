import React from "react";
import {StyleSheet, View, Text,StatusBar,Image,Dimensions,TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Container, Header, Left,Right, Row, Button} from 'native-base';
import Mapbox from '@mapbox/react-native-mapbox-gl';
// r.k.puram coordinates : 28.5660° N, 77.1767° E


import Permissions from 'react-native-permissions';



Mapbox.setAccessToken('sk.eyJ1IjoiZ2thbHlhbjA0IiwiYSI6ImNqcnJodmQ0NzAxc3c0NG5wcDg2ZXFtbHkifQ.gWLK1R-59ThWVfJGtO-oYA');

export default class AanganwadiScreen extends React.Component {

  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="map" size={25} color="pink" />
    )
  }
  state = {
    location: null
  }
  componentDidMount() {
    this._getLocationAsync();
  }
  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION); // Notice: getAsync vs askAsync
    if (status === 'granted') {
      let location = await Location.getCurrentPositionAsync({});
      this.setState({ location })
    } else {
      alert('Dont have permission');
    }
  };

  renderAnnotations () {
    return (
      <Container>
      <Mapbox.PointAnnotation
        key='pointAnnotation'
        id='pointAnnotation'
        coordinate={[77.1767, 28.5660]}>

        <View style={styles.annotationContainer}>
          <View style={styles.annotationFill} />
        </View>
        <Mapbox.Callout title='Aanganwadi Kendra 1, R.K.Puram' />
      </Mapbox.PointAnnotation>
      <Mapbox.PointAnnotation
      key='pointAnnotation1'
      id='pointAnnotation1'
      coordinate={[77.1767, 28.5610]}>

      <View style={styles.annotationContainer}>
        <View style={styles.annotationFill} />
      </View>
      <Mapbox.Callout title='Look! An annotation!' />
    </Mapbox.PointAnnotation>
    </Container>
    )
  }
  render() {
    return (
        
          <Container>
            
                
            
            <Header style={{backgroundColor:"#009999"}} >
            <View style={{alignItems:"flex-start",margin:10}}>
              <StatusBar backgroundColor="#009999" barStyle="light-content" />
              <Icon name="bars" style={{ marginTop:3,fontSize:24,color: "white" }} onPress={() =>
              this.props.navigation.openDrawer()} />
            </View>

            <View style={{flex:1,marginTop:10,marginLeft:90}}>
              <Text style={{color:"white",fontSize:20}}>Nearby Aanganwadi's</Text>
            </View>
         </Header>
        
         <View style={styles.container}>
         <Text>{JSON.stringify(this.state.location)}</Text>
         
         this._getLocationAsync()
         <Button title="View my location" onPress={()=>{
          this._getLocationAsync()
        }} />
        {
          this.state.location ? 
          <Mapbox.MapView
            styleURL={Mapbox.StyleURL.street}
            zoomLevel={15}
            centerCoordinate={[77.1767, 28.5660]}
            style={styles.container}
            showUserLocation={true}>
            {this.renderAnnotations()}
        </Mapbox.MapView>
        :
        null
        }
        
      </View>
          </Container>
          

      
          
       
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  annotationContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
  },
  annotationFill: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'orange',
    transform: [{ scale: 0.6 }],
  },
});