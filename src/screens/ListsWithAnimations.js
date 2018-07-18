import React from 'react';
import { View, Button, ScrollView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import SquaresList from '../components/lists/SquaresList';
import DotsList from '../components/lists/DotsList';
import Dots2List from '../components/lists/Dots2List';
import LinesList from '../components/lists/LinesList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
});

export default class ListsWithAnimations extends React.Component {

  static navigationOptions = {
    drawerLabel: 'Lists with Animations',
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Button onPress={navigation.openDrawer} title="Menu" />
        <ScrollView>
          <SquaresList />
          <LinesList />
          <DotsList />
          <Dots2List />
        </ScrollView>
      </View>
    );
  }
}

ListsWithAnimations.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};
