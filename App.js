/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Easing
} from 'react-native';
import Demo from './src/Demo';
import ImageAnimation from './src/ImageAnimation';
import MultipleAnimation from './src/MultipleAnimation';
import SpringAnimation from './src/SpringAnimation';
import Pulse from 'react-native-pulse';
import { Bubbles } from 'react-native-loader';
import Pulses from './src/Pulse';
import ParallelAnimation from './src/ParallelAnimation';
import Spin from './src/Spin';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <SpringAnimation />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 150
//   }
// })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
{/* <Pulse color='red' numPulses={3} diameter={200} speed={10} duration={2000} /> */}