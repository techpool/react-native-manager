/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './src/reducers';

export default class App extends Component<{}> {
  componentWillMount() {
    var config = {
      apiKey: 'AIzaSyBW1BN2xyIWYi_2tpFVmYFDPzDA7Hkjnys',
      authDomain: 'argon-producer-135823.firebaseapp.com',
      databaseURL: 'https://argon-producer-135823.firebaseio.com',
      projectId: 'argon-producer-135823',
      storageBucket: '',
      messagingSenderId: '988793876924'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={ createStore(reducers) }>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}
