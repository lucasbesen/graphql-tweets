import * as React from 'react';
import { TextProps } from 'react-native';
import styled from 'styled-components/native';
import {
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  opacity,
  position,
  PositionProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';

import theme from 'app/config/theme';

type CustomProps = {
  isBold?: boolean;
};

type InnerTextProps = CustomProps &
  TypographyProps &
  TextProps &
  ColorProps &
  SpaceProps &
  PositionProps &
  FlexboxProps;

const InnerText = styled.Text<InnerTextProps>(
  typography,
  flexbox,
  space,
  position,
  color,
  opacity,
);

type Props = React.ComponentProps<typeof InnerText>;

const Text = ({
  isBold = false,
  color = theme.colors.text.white,
  ...props
}: Props) => (
  <InnerText fontWeight={isBold && 'bold'} color={color} {...props} />
);

export default Text;
