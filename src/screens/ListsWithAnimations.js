import React from 'react';
import { ScrollView } from 'react-native';
import SquaresList from '../components/lists/SquaresList';
import DotsList from '../components/lists/DotsList';
import Dots2List from '../components/lists/Dots2List';
import LinesList from '../components/lists/LinesList';

export default class ListsWithAnimations extends React.Component {

  static navigationOptions = {
    drawerLabel: 'Lists with Animations',
  };

  render() {
    return (
      <ScrollView>
        <SquaresList />
        <LinesList />
        <DotsList />
        <Dots2List />
      </ScrollView>
    );
  }
}
