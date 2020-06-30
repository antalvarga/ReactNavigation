
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {FontAwesome5, FontAwesome} from '@expo/vector-icons';


//import home from './assets/bestHome.png';


function HomeScreen( {navigation} ) {
  return (
    <View style={styles.container}>
      <View style={{width: '100%', flex: 1, marginTop: 64}}>
        
        <Image 
          source={ require( "./assets/bestHome.png") } 
          style={{width: undefined, height: undefined, flex: 1}}
          resizeMode="contain"  
        /> 
      </View>

      <View style={{flex: 2, alignItems: 'center'}}>
        <Text style={{fontWeight: '100', fontSize: 32}}>HomeScreen</Text>
        <TouchableOpacity style={styles.button} onPress= {() => {
          navigation.navigate("Music");
        }}>
          <Text style={{color: '#fff'}}>Go to the Music Screen</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

function MusicScreen( {navigation} ) {
  return (
    <View style={styles.container}>
      <View style={{width: '100%', flex: 1, marginTop: 64}}>
        
        <Image 
          source={ require( "./assets/favicon.png") } 
          style={{width: undefined, height: undefined, flex: 1}}
          resizeMode="contain"  
        /> 
      </View>

      <View style={{flex: 2, alignItems: 'center'}}>
        <Text style={{fontWeight: '100', fontSize: 32}}>MusicScreen</Text>
        <TouchableOpacity style={styles.button} onPress= {() => {
          navigation.navigate("Home");
        }}>
          <Text style={{color: '#fff'}}>Return to the Home Screen</Text>
        </TouchableOpacity>
      </View>

    </View>  );
}

const Main = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Main.Navigator>

        <Main.Screen name="Home" component={HomeScreen} />
        <Main.Screen name="Music" component={MusicScreen} />

      </Main.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 32
    , backgroundColor: "#23a6d9"
    , paddingVertical: 12
    , width: 250
    , borderRadius: 12
    , alignItems: 'center'
  }
});
