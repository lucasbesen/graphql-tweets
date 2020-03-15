import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { ApolloProvider } from '@apollo/react-hooks';

import apolloClient from 'app/graphql/apolloClient';
import ROUTES, { StackParamsList } from 'app/config/routes';
import { HomeScreen } from 'app/components/screens';
import theme from 'app/config/theme';

const Stack = createStackNavigator<StackParamsList>();

const stackOptions: StackNavigationOptions = {
  headerTransparent: true,
  headerTintColor: theme.colors.text.white,
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
        <SafeAreaProvider>
          <MainStack />
        </SafeAreaProvider>
      </NavigationContainer>
    </ApolloProvider>
  );
}
