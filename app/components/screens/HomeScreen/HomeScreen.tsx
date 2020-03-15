import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RouteProp } from '@react-navigation/stack';

import { useTweetsQuery } from 'app/hooks';
import { Container, Text, Wrapper } from 'app/components/common';
import { StackParamsList } from 'app/config/routes';

type HomeScreenRouteProp = RouteProp<StackParamsList, 'Home'>;

type Props = {
  route: HomeScreenRouteProp;
};

const HomeScreen = ({ route: { params } }: Props) => {
  const search = params?.search;
  const [isLoading] = useTweetsQuery(search);

  if (isLoading) {
    return (
      <Container>
        <Wrapper flex={1} centralize>
          <ActivityIndicator />
        </Wrapper>
      </Container>
    );
  }

  return (
    <Container>
      <Text>That's the Home screen </Text>
    </Container>
  );
};

export default HomeScreen;
