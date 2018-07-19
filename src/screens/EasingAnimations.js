import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Easings from '../components/effects/Easings';

const styles = StyleSheet.create({
  list: {
    marginTop: 10,
    marginLeft: 10,
  },
});

export default class EasingAnimations extends React.Component {

  static navigationOptions = {
    drawerLabel: 'Easing Animations',
  };

  render() {
    return (
      <ScrollView style={styles.list}>
        <Easings />
      </ScrollView>
    );
  }
}
