/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import LoginScreen from './Login';
import SignUp from './Signup';
import FavoriteIcon from './favorite';
import DisconnectIcon from './disconnectIcon';
import FavoritePage from './favoritePage';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Disconnect" component={DisconnectIcon} />
        <Stack.Screen name="Favorite" component={FavoriteIcon} />
        <Stack.Screen name="FavoritePage" component={FavoritePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
