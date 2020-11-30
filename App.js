import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header'
import Post from './src/components/Post'

export default class App extends Component {

  render() {
    const comments = [{
      nickname: 'João Batista',
      coment: 'Foto muito bonita!!'
    }, {
      nickname: 'Daniele nascimento',
      comment: 'Foto show de bola..!'
    }]

    return (
        <View style={ { flex: 1 } }>
          <Header />
          <Post image={ require('./assets/images/1.png') }  comments={comments}/>
        </View>
    );
  }
}