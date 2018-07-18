import React from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import ListWithAnimations from './ListWithAnimations';

const styles = StyleSheet.create({
  navItemCircleWrapper: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  navItemCircle: {
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: '#609279',
    borderRadius: 50,
  },
  navItem: {
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
  },
});

export default class Dots2List extends ListWithAnimations {

  renderRow(num) {
    const interpolatedCircleSize = this.animatedValues[num].interpolate({
      inputRange: [0, 100],
      outputRange: [20, 40],
    });
    const interpolatedCircleBorderWidth = this.animatedValues[num].interpolate({
      inputRange: [0, 100],
      outputRange: [7, 2],
    });
    const interpolatedLabelColor = this.animatedValues[num].interpolate({
      inputRange: [0, 100],
      outputRange: ['#333', '#609279'],
    });
    const interpolatedLabelFontSize = this.animatedValues[num].interpolate({
      inputRange: [0, 100],
      outputRange: [16, 20],
    });
    return (
      <TouchableWithoutFeedback key={`li_${num}`} onPress={() => { this.animateSelect(num); }}>
        <View style={styles.navItem}>
          <View style={styles.navItemCircleWrapper}>
            <Animated.View style={[styles.navItemCircle, {
              borderWidth: interpolatedCircleBorderWidth,
              height: interpolatedCircleSize,
              width: interpolatedCircleSize,
            }]}
            />
          </View>
          <Animated.Text style={{
            fontWeight: 'bold',
            color: interpolatedLabelColor,
            fontSize: interpolatedLabelFontSize,
          }}
          >
            Label {num + 1}
          </Animated.Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
