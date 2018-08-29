import React, { Component } from 'react';
 
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  TouchableHighlight,
  Switch,
  Dimensions,
  Animated,
  Easing,
  LayoutAnimation,
  UIManager
} from 'react-native';

type Props = {};
var {width} = Dimensions.get('window');
export default class Parallel extends Component<Props> {
    constructor(props){
        super(props);
        this.blue_box_X = new Animated.Value(0);
        this.green_box_X = new Animated.Value(0);
        
    }
    componentDidMount () {
        this.parallelTranslateX()
      }
    parallelTranslateX() {
        this.blue_box_X.setValue(0);
        this.green_box_X.setValue(0);
        Animated.parallel([
            Animated.timing(
              this.blue_box_X,
              {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear
              }
            ),
            Animated.timing(
              this.green_box_X,
              {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear
              }
            )        
        ]).start(() => {
            this.parallelTranslateX();
        });
      }

      render() {
          const blue_box_translateX = this.blue_box_X.interpolate({
            inputRange: [0, 1],
            outputRange: [0, width - 50],
          });
           
          const green_box_translateX = this.green_box_X.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -width + 50],
          });

          const spin_blue = this.blue_box_X.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
          });

          const spin_green = this.blue_box_X.interpolate({
            inputRange: [0, 1],
            outputRange: ['-90deg', '0deg'],
          });

          return(
            <View style={styles.container}>
                <Animated.View style={[
                    styles.box, 
                    styles.blue_box, 
                    {
                    transform: [
                        { translateX: blue_box_translateX }
                    ]
                    }
                    ]} 
                />
                <Animated.View style={[
                    styles.box, 
                    styles.green_box, 
                    {
                    transform: [
                        { translateX: green_box_translateX }
                    ]
                    }
                    ]} 
                />
                <View style={{height: 50}}/>
                <Animated.View style={[
                    styles.box, 
                    styles.blue_box, 
                    {
                    transform: [
                        { rotate: spin_blue },
                        { translateX: blue_box_translateX }
                    ]
                    }
                    ]} 
                />
                <Animated.View style={[
                    styles.box, 
                    styles.green_box, 
                    {
                    transform: [
                        { rotate: spin_green },
                        { translateX: green_box_translateX }
                    ]
                    }
                    ]} 
                />
              </View>
          )
      }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 150
    },
    blue_box: {
        alignSelf: 'flex-start',
        backgroundColor: 'blue'
      },
      green_box: {
        alignSelf: 'flex-end',
        backgroundColor: 'green'
      },
      box: {
        width: 50,
        height: 50,
        borderRadius: 25,
        zIndex: 100
      },
  })