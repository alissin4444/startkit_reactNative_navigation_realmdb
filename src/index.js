import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {FruitProvider} from './hooks/fruits';

import Routes from './routes';

export default function App() {
  return (
    <NavigationContainer>
      <FruitProvider>
        <Routes />
      </FruitProvider>
    </NavigationContainer>
  );
}
