import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Easing,
  TouchableOpacity
} from 'react-native'

const BASE_SIZE = 150;

type Props = {};
export default class Demo extends Component<Props> {
  constructor () {
    super()
    this.animatedValue = new Animated.Value(0)
  }
  componentDidMount () {
    this.animate()
  }
  animate () {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 6000,
        easing: Easing.bounce
      }
    ).start(() => this.animate())
  }
  
  render () {
    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0.1, 0.6, 0.2]
    })
    const scale = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0.1, 3]
    })

    return (
      <View style={styles.container}>
          <View style={styles.circlesContainer}>
              <Animated.View style={{
                top:0,
                position: 'absolute',
                width:BASE_SIZE,
                height:BASE_SIZE,
                borderRadius: BASE_SIZE/2,
                backgroundColor: 'red',
                opacity,
                transform: [{scale}]
              }} />
              {/* <Image source={require('./img.png')} style={styles.circle_3}/> */}
          </View>
      </View>
  )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 150
    },
    circlesContainer:{
      width: BASE_SIZE,
      height: BASE_SIZE,
      alignItems: 'center',
  },
  circle_1:{
      top:0,
      position: 'absolute',
      width:BASE_SIZE,
      height:BASE_SIZE,
      borderRadius: BASE_SIZE/2,
      backgroundColor: '#FF8100'
  },
  circle_2:{
      top:BASE_SIZE*0.1, // The amount remaining
      left:BASE_SIZE*0.1,
      position: 'absolute',
      width:BASE_SIZE*0.8, // 80% of the base size
      height:BASE_SIZE*0.8,
      borderRadius: BASE_SIZE*0.8/2,
      backgroundColor: 'white'
  },
  circle_3:{
      top:BASE_SIZE*0.2,
      left:BASE_SIZE*0.2,
      position: 'absolute',
      width:BASE_SIZE*0.6,
      height:BASE_SIZE*0.6, // 60% of the base size
      borderRadius: BASE_SIZE*0.6/2,
      backgroundColor: '#FFFFFF'
  },
  text_style: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    color: '#888',
    top:BASE_SIZE*0.1,
    left:BASE_SIZE*0.1,
    width:BASE_SIZE*0.8, // 80% of the base size
    height:BASE_SIZE*0.8,
    borderRadius: BASE_SIZE*0.8/2,
  }
  })