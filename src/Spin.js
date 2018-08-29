import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
  TouchableWithoutFeedback,
} from 'react-native';

export default class Spin extends Component {
  state = {
    growAnimation: new Animated.Value(0),
    moveAnimation: new Animated.Value(0),
  };
  componentDidMount() {
    this.spin()
  }
  spin = () => {
    this.state.growAnimation.setValue(0);

    Animated.timing(this.state.growAnimation, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
    }).start((animation) => {
      if (animation.finished) {
        this.spin();
      }
    });
  };

  move = () => {
    Animated.spring(this.state.moveAnimation, {
      toValue: 100,
    }).start();
  }

  spinAndMove = () => {
    this.spin();
    this.move();
  }

  render() {
    const edgeLength = 100;

    const squareAnimation = {
      height: edgeLength,
      width: edgeLength,
      transform: [
        {
          rotate: this.state.growAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
          }),
        },
        {
          translateY: this.state.moveAnimation,
        },
      ],
      backgroundColor: 'blue',
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.spinAndMove}>
          <Animated.View style={squareAnimation}/>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
