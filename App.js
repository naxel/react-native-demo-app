import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import ListsWithAnimations from './src/screens/ListsWithAnimations';

const RootStack = createDrawerNavigator(
  {
    ListsWithAnimations,
  },
  {
    initialRouteName: 'ListsWithAnimations',
  },
);

export default function App() {
  return <RootStack />;
}
