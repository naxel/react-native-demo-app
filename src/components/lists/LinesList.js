import React from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import ListWithAnimations from './ListWithAnimations';

const styles = StyleSheet.create({
  navItemWrapper: {
    width: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  navItem: {
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
  },
});

export default class LinesList extends ListWithAnimations {

  renderRow(num) {
    const interpolatedLineHeight = this.animatedValues[num].interpolate({
      inputRange: [0, 100],
      outputRange: [50, 0],
    });
    const interpolatedLabelColor = this.animatedValues[num].interpolate({
      inputRange: [0, 100],
      outputRange: ['#4fc369', '#419253'],
    });

    return (
      <TouchableWithoutFeedback key={`li_${num}`} onPress={() => { this.animateSelect(num); }}>
        <View style={styles.navItem}>
          <View style={styles.navItemWrapper}>
            <Animated.View style={{
              height: 50,
              width: 5,
              backgroundColor: '#419253',
            }}
            >
              <Animated.View style={[{
                height: interpolatedLineHeight,
                width: 5,
                backgroundColor: '#4fc369',
              }]}
              />
            </Animated.View>
          </View>
          <Animated.Text style={{
            fontWeight: 'bold',
            color: interpolatedLabelColor,
            fontSize: 30,
            transform: [{ rotate: '90deg' }],
          }}
          >
            0{num + 1}
          </Animated.Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
