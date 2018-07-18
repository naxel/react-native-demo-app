import React from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  myInputStyle: {
    borderBottomWidth: 1,
    width: 300,
    height: 70,
  },
  textInput: {
    height: 60,
    fontSize: 26,
    color: '#333',
  },
});

export default class InputWithAnimations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: null,
    };
    this.animatedValue = new Animated.Value(0);
  }

  componentWillMount() {
    this.inputValue = '';
  }

  onChangeText(text) {
    this.inputValue = text;
    this.setState({ isValid: this.inputValue.length > 0 });
  }

  selectField() {
    Animated.timing(this.animatedValue, {
      toValue: 100,
      duration: 200,
    }).start();
  }

  deselectField() {
    if (this.inputValue.length > 0) {
      return;
    }
    Animated.timing(this.animatedValue, {
      toValue: 0,
      duration: 200,
    }).start();
  }

  render() {
    const { label } = this.props;
    const { isValid } = this.state;
    const that = this;
    const interpolatedLabelPosition = that.animatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: [35, 0],
    });
    const interpolatedLabelSize = that.animatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: [26, 14],
    });
    let borderColor = '#333';
    let color = '#419253';
    if (isValid === null) {
      borderColor = '#333';
      color = '#999';
    } else if (isValid === true) {
      borderColor = '#419253';
      color = '#419253';
    } else {
      borderColor = '#c00';
      color = '#c00';
    }

    return (
      <View style={[styles.myInputStyle, { borderColor }]}>
        <Animated.Text
          style={{ fontSize: interpolatedLabelSize, top: interpolatedLabelPosition, color }}
        >
          {label}
        </Animated.Text>
        <TextInput
          style={styles.textInput}
          onFocus={() => { this.selectField(); }}
          onBlur={() => { this.deselectField(); }}
          onChangeText={(text) => { this.onChangeText(text); }}
        />
      </View>
    );
  }
}

InputWithAnimations.propTypes = {
  label: PropTypes.string.isRequired,
};
