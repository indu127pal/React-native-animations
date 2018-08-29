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
export default class ImageAnimation extends Component<Props> {
  constructor() {
    super()
    this.spinValue = new Animated.Value(0); 
  }
  componentDidMount() {
    this.spin()
  }
  spin() {
    this.spinValue.setValue(0);
    Animated.timing(
      this.spinValue, 
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }
  render() {
    const opacity = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0.5, 0.5]
    })
    return (
      <View>
        <Animated.View
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'red',
            borderRadius: 50,
            opacity
          }} />
          <Image source={require('./img.png') } style={{width: 50, height: 50}}/>
      </View>
    );
  }
}