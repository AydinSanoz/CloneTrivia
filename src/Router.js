import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Intro } from './Pages/Intro';
import { Questions } from './Pages/Questions';


import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { initialStates } from './context/store';
import { reducer } from './context/reducer';

const Stack = createStackNavigator();
const store = createStore(reducer, initialStates);

const Router = () => {
  return (
    <Provider store = {store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name = 'Intro' component = {Intro} />
          <Stack.Screen name = 'Questions' component = {Questions} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default Router;
