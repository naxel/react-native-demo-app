import React from 'react';
import { View, Button, ScrollView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import InputWithAnimations from '../components/inputs/InputWithAnimations';

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

export default class InputsWithAnimations extends React.Component {

  static navigationOptions = {
    drawerLabel: 'Inputs with Animations',
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Button onPress={navigation.openDrawer} title="Menu" />
        <ScrollView>
          <View style={styles.list}>
            <InputWithAnimations label="First Name" />
            <InputWithAnimations label="Last Name" />
            <InputWithAnimations label="Company" />
          </View>
        </ScrollView>
      </View>
    );
  }
}

InputsWithAnimations.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};
