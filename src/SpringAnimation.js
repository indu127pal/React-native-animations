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

type Props = {};
export default class SpringAnimation extends Component<Props> {
  constructor() {
    super()
    this.spinValue = new Animated.Value(0); 
  }
  componentDidMount() {
    this.spin()
  }
  spin() {
    this.spinValue.setValue(0.3);
    Animated.spring(
      this.spinValue, 
      {
        toValue: 1,
        friction: 4
      }
    ).start(() => this.spin())
  }
  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 2, 1]
    })
    const borderRadius = this.spinValue.interpolate({
        inputRange: [0, 50],
        outputRange: [0, 100]
    })
    const opacity = this.spinValue.interpolate({
        inputRange: [0, 0, 0],
        outputRange: [0.5, 1, 0.5]
      })
    return (
        <Animated.View
          style={{
            opacity,
            width: 100,
            height: 100,
            transform: [{scale: spin }],
            backgroundColor: 'red',
            borderRadius: 50
          }} />
    );
  }
}