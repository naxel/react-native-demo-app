import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import ListsWithAnimations from './src/screens/ListsWithAnimations';
import InputsWithAnimations from './src/screens/InputsWithAnimations';

const RootStack = createDrawerNavigator(
  {
    ListsWithAnimations,
    InputsWithAnimations,
  },
  {
    initialRouteName: 'ListsWithAnimations',
  },
);

export default function App() {
  return <RootStack />;
}
