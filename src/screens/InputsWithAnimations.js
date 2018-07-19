import React from 'react';
import { View, StyleSheet } from 'react-native';
import InputWithAnimations from '../components/inputs/InputWithAnimations';

const styles = StyleSheet.create({
  list: {
    marginLeft: 10,
  },
});

export default class InputsWithAnimations extends React.Component {

  static navigationOptions = {
    drawerLabel: 'Inputs with Animations',
  };

  render() {
    return (
      <View style={styles.list}>
        <InputWithAnimations label="First Name" />
        <InputWithAnimations label="Last Name" />
        <InputWithAnimations label="Company" />
      </View>
    );
  }
}
