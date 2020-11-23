import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { reducer, initialStates } from './context';
import {createStore} from 'redux'

import { Intro, Questions, Finish } from './pages';

const Stack = createStackNavigator();
const store = createStore(reducer, initialStates);

function Router() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name='Intro' component={Intro} />
					{/* <Stack.Screen name='Finish' component={Finish} />
					<Stack.Screen name='Questions' component={Questions} /> */}
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}

export default Router;
