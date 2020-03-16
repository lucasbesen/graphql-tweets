import * as React from 'react';
import styled from 'styled-components/native';
import { border, BorderProps } from 'styled-system';
import { useHeaderHeight } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';

import theme from 'app/config/theme';

import Wrapper from './Wrapper';

type SafeAreaViewProps = BorderProps;

const SafeAreaWrapper = styled.SafeAreaView<SafeAreaViewProps>`
  flex: 1;
  ${border}
`;

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  const height = useHeaderHeight();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Wrapper flex={1} pt={height} backgroundColor={theme.colors.background}>
        <SafeAreaWrapper
          borderTopWidth={1}
          borderTopColor={theme.colors.border}
        >
          {children}
        </SafeAreaWrapper>
      </Wrapper>
    </SafeAreaView>
  );
};

export default Container;
