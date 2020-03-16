import React from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { RouteProp } from '@react-navigation/stack';

import { useTweetsQuery } from 'app/hooks';
import { Container, Wrapper } from 'app/components/common';
import { StackParamsList } from 'app/config/routes';

import Tweet from './components/Tweet';

type HomeScreenRouteProp = RouteProp<StackParamsList, 'Home'>;

type Props = {
  route: HomeScreenRouteProp;
};

const HomeScreen = ({ route: { params } }: Props) => {
  const search = params?.search;
  const [isLoading, data] = useTweetsQuery(search);

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
      <Wrapper>
        <FlatList
          data={data?.twitter?.search}
          renderItem={({ item }) => <Tweet tweet={item} />}
          keyExtractor={item => item.id + item.user.id}
        />
      </Wrapper>
    </Container>
  );
};

export default HomeScreen;
