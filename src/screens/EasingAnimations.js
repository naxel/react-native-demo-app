import React from 'react';
import { View, Button, ScrollView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Easings from '../components/effects/Easings';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  list: {
    marginTop: 30,
    marginLeft: 5,
  },
});

export default class EasingAnimations extends React.Component {

  static navigationOptions = {
    drawerLabel: 'Easing Animations',
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Button onPress={navigation.openDrawer} title="Menu" />
        <ScrollView>
          <View style={styles.list}>
            <Easings />
          </View>
        </ScrollView>
      </View>
    );
  }
}

EasingAnimations.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};
