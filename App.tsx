import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { ApolloProvider } from '@apollo/react-hooks';
import { EvilIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { space, SpaceProps } from 'styled-system';

import apolloClient from 'app/graphql/apolloClient';
import ROUTES, { StackParamsList } from 'app/config/routes';
import { HomeScreen, SearchScreen } from 'app/components/screens';
import { ProfilePicture } from 'app/components/common';
import theme from 'app/config/theme';

const SearchButton = styled.TouchableOpacity<SpaceProps>`
  ${space}
`;

const Stack = createStackNavigator<StackParamsList>();

const stackOptions = ({ navigation }): StackNavigationOptions => ({
  headerTransparent: true,
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate(ROUTES.HOME)}>
      <ProfilePicture size={45} mt={20} ml={10} borderRadius={25} />
    </TouchableOpacity>
  ),
  headerRight: () => (
    <SearchButton
      mt={12}
      mr={10}
      onPress={() => navigation.navigate(ROUTES.SEARCH)}
    >
      <EvilIcons name="search" size={45} color={theme.colors.primary} />
    </SearchButton>
  ),
  headerTintColor: theme.colors.text.white,
  headerTitleStyle: { marginTop: 20, fontSize: 20 },
});

const MainStack = () => (
  <Stack.Navigator initialRouteName={ROUTES.HOME} screenOptions={stackOptions}>
    <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
    <Stack.Screen name={ROUTES.SEARCH} component={SearchScreen} />
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
