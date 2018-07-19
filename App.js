import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import ListsWithAnimations from './src/screens/ListsWithAnimations';
import InputsWithAnimations from './src/screens/InputsWithAnimations';
import EasingAnimations from './src/screens/EasingAnimations';

const RootStack = createDrawerNavigator(
  {
    ListsWithAnimations,
    InputsWithAnimations,
    EasingAnimations,
  },
  {
    initialRouteName: 'ListsWithAnimations',
  },
);

export default function App() {
  return <RootStack />;
}
