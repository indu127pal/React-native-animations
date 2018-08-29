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
export default class MultipleAnimation extends Component<Props> {
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
        duration: 3000,
        easing: Easing.bounce
      }
    ).start(() => this.animate())
  }
  render () {
    const margin = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 300]
    })
    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0.1, 0.6, 0]
    })
    // const opacity = this.animatedValue.interpolate({
    //   inputRange: [0, 100, 100],
    //   outputRange: [1, .2, 0]
    // })
    const movingMargin = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 300, 0]
    })
    const textSize = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [18, 32, 18]
    })
    const rotateX = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '180deg', '0deg']
    })
    const scale = this.animatedValue.interpolate({
      inputRange: [0, 0, 1],
      outputRange: [0, 1, 1]
    })

    // return (
    //   <View style={styles.container}>
    //       <View style={styles.circlesContainer}>
    //           <Animated.View style={{
    //             top:0,
    //             position: 'absolute',
    //             width:BASE_SIZE,
    //             height:BASE_SIZE,
    //             borderRadius: BASE_SIZE/2,
    //             backgroundColor: 'red',
    //             opacity,
    //             transform: [{scale}]
    //           }} />
    //           <Image source={require('./img.png')} style={styles.circle_2}/>
    //       </View>
    //   </View>
    // )
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            opacity,
            height: 100,
            width: 100,
            borderRadius: 50,
            backgroundColor: 'red',
            alignItems: 'center'}} />
        <Animated.View
          style={{
            opacity,
            marginTop: 10,
            height: 30,
            width: 40,
            backgroundColor: 'blue'}} />
        <Animated.View
          style={{
            marginLeft: movingMargin,
            marginTop: 10,
            height: 30,
            width: 40,
            backgroundColor: 'orange'}} />
        <Animated.Text
          style={{
            fontSize: textSize,
            marginTop: 10,
            color: 'green'}} >
            Animated Text!
        </Animated.Text>
        <Animated.View
          style={{
            transform: [{rotateX}],
            marginTop: 50,
            height: 30,
            width: 40,
            backgroundColor: 'black'}}>
          <Text style={{color: 'white'}}>Hello from TransformX</Text>
        </Animated.View>
        {/* <TouchableOpacity style={styles.circle_1} /> */}
        {/* <TouchableOpacity style={styles.circle_2} />
        <TouchableOpacity style={styles.circle_3} /> */}
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
      backgroundColor: 'red'
  },
  circle_3:{
      top:BASE_SIZE*0.2,
      left:BASE_SIZE*0.2,
      position: 'absolute',
      width:BASE_SIZE*0.6,
      height:BASE_SIZE*0.6, // 60% of the base size
      borderRadius: BASE_SIZE*0.6/2,
      backgroundColor: '#FFFFFF'
  }
  })