import React from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import ListWithAnimations from './ListWithAnimations';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navItemCircleWrapper: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  navItemCircle: {
    backgroundColor: '#5e798b',
    borderColor: '#4b6f95',
    borderRadius: 50,
  },
  navItemCircleSelected: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: '#c1dff9',
    borderWidth: 5,
    borderRadius: 50,
  },
  navItem: {
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
  },
});

export default class DotsList extends ListWithAnimations {

  renderRow(num) {
    const interpolatedCircleSize = this.animatedValues[num].interpolate({
      inputRange: [0, 100],
      outputRange: [30, 15],
    });
    const interpolatedCircleSelectedSize = this.animatedValues[num].interpolate({
      inputRange: [0, 100],
      outputRange: [30, 45],
    });
    const interpolatedLabelColor = this.animatedValues[num].interpolate({
      inputRange: [0, 100],
      outputRange: ['#666', '#c1dff9'],
    });
    const interpolatedLabelFontSize = this.animatedValues[num].interpolate({
      inputRange: [0, 100],
      outputRange: [16, 20],
    });
    return (
      <TouchableWithoutFeedback key={`li_${num}`} onPress={() => { this.animateSelect(num); }}>
        <View style={styles.navItem}>
          <View style={styles.navItemCircleWrapper}>
            <Animated.View style={[styles.navItemCircleSelected, {
              height: interpolatedCircleSelectedSize,
              width: interpolatedCircleSelectedSize,
            }]}
            >
              <Animated.View style={[styles.navItemCircle, {
                height: interpolatedCircleSize,
                width: interpolatedCircleSize,
              }]}
              />
            </Animated.View>
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
