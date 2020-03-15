import * as React from 'react';
import styled from 'styled-components/native';
import {
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  space,
  SpaceProps,
} from 'styled-system';

type CustomProps = {
  centralize?: boolean;
};

type ViewProps = CustomProps & FlexboxProps & SpaceProps & ColorProps;

const StyledView = styled.View<ViewProps>`
  ${props =>
    props.centralize && 'align-items: center; justify-content: center;'}
  ${flexbox}
  ${space}
  ${color}
`;

type Props = React.ComponentProps<typeof StyledView>;

const Wrapper = (props: Props) => {
  return <StyledView {...props} />;
};

export default Wrapper;
