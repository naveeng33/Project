import React from 'react';
import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './components/HomeScreen';
import Price from './components/Price';
import Yield from './components/Yield';
import Fertilizer from './components/Fertilizer';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Price" component={Price} />
        <Stack.Screen name="Yield" component={Yield} />
        <Stack.Screen name="Fertilizer" component={Fertilizer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
