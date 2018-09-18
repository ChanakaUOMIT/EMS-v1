import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Login from './src/components/Login';
import Parent from './src/components/Parent';
import Student from './src/components/Student';
import ForgotPassword from './src/components/ForgotPassword';


const Apllication =  createStackNavigator({
  auth : {screen : Login},
  parent : {screen : Parent},
  student : {screen : Student},
  forgotPassword : {screen : ForgotPassword}
}, {
    navigationOptions :{
      header : false,
    }
});

export default class App extends React.Component {
  render() {
    return (
      <Apllication/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
