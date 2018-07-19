import React from 'react';
import { Button } from 'react-native';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import ListsWithAnimations from './src/screens/ListsWithAnimations';
import InputsWithAnimations from './src/screens/InputsWithAnimations';
import EasingAnimations from './src/screens/EasingAnimations';

const DrawerNavigator = createDrawerNavigator(
  {
    ListsWithAnimations,
    InputsWithAnimations,
    EasingAnimations,
  },
  {
    initialRouteName: 'ListsWithAnimations',
    drawerBackgroundColor: 'skyblue',
    contentOptions: {
      activeBackgroundColor: 'rgba(0,0,0,0.5)',
      activeTintColor: 'white',
      inactiveTintColor: 'rgba(0,0,0,0.5)',
    },
  },
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: DrawerNavigator,
      headerMode: 'float',
      navigationOptions: ({ navigation }) => ({
        headerStyle: { backgroundColor: 'skyblue' },
        title: 'Demo App',
        headerTintColor: 'white',
        headerLeft: <Button title="Menu" onPress={navigation.toggleDrawer} />,
      }),
    },
  },
  {
    initialRouteName: 'Main',
  },
);

export default function App() {
  return <RootStack />;
}
