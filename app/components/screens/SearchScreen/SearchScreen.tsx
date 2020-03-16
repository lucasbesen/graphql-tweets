import React, { useState } from 'react';
import { Button } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';

import { Container, Wrapper } from 'app/components/common';
import theme from 'app/config/theme';
import ROUTES, { StackParamsList } from 'app/config/routes';

import SearchInput from './components/SearchInput';

type SearchScreenNavigationProp = StackNavigationProp<
  StackParamsList,
  'Search'
>;

type Props = {
  navigation: SearchScreenNavigationProp;
};

const SearchScreen = ({ navigation }: Props) => {
  const [search, setSearch] = useState(null);
  return (
    <Container>
      <Wrapper px="10%" centralize>
        <Wrapper width="100%" mt={10}>
          <SearchInput onChange={text => setSearch(text)} />
        </Wrapper>
        <Wrapper mt={10}>
          <Button
            onPress={() => navigation.navigate(ROUTES.HOME, { search })}
            buttonStyle={{ backgroundColor: theme.colors.primary }}
            title="Search"
          />
        </Wrapper>
      </Wrapper>
    </Container>
  );
};

export default SearchScreen;
