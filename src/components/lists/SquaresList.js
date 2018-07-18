import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import ListWithAnimations from './ListWithAnimations';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navItemWrapper: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  navItemSquare: {
    backgroundColor: '#6fbdfd',
    marginRight: 5,
    borderColor: '#4b6f95',
  },
  navItem: {
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
  },
});

export default class SquaresList extends ListWithAnimations {

  renderRow(num) {
    const interpolatedSelectSizeAnimation = this.animatedValues[num].interpolate({
      inputRange: [0, 100],
      outputRange: [30, 45],
    });
    const interpolatedSelectBorderWidthAnimation = this.animatedValues[num].interpolate({
      inputRange: [99, 100],
      outputRange: [0, 1],
    });
    return (
      <TouchableWithoutFeedback key={`li_${num}`} onPress={() => { this.animateSelect(num); }}>
        <View style={styles.navItem}>
          <View style={styles.navItemWrapper}>
            <Animated.View style={[
              styles.navItemSquare, {
                height: interpolatedSelectSizeAnimation,
                width: interpolatedSelectSizeAnimation,
                borderWidth: interpolatedSelectBorderWidthAnimation,
              },
            ]}
            />
          </View>
          <Text>Label {num + 1}</Text>

        </View>
      </TouchableWithoutFeedback>
    );
  }
}
