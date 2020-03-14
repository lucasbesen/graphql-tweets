import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { ApolloProvider } from '@apollo/react-hooks';

import apolloClient from 'app/graphql/apolloClient';
import ROUTES, { StackParamsList } from 'app/config/routes';
import { HomeScreen } from 'app/components/screens';

const Stack = createStackNavigator<StackParamsList>();

const stackOptions: StackNavigationOptions = {
  title: null,
  headerTransparent: true,
  headerLeft: null,
  gestureEnabled: true,
};

const MainStack = () => (
  <Stack.Navigator initialRouteName={ROUTES.HOME} screenOptions={stackOptions}>
    <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </ApolloProvider>
  );
}
