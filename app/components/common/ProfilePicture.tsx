import React from 'react';
import styled from 'styled-components/native';
import {
  border,
  BorderProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from 'styled-system';

import profileImage from 'assets/profile.jpg';

type ImageProps = BorderProps & LayoutProps & SpaceProps;

const Image = styled.Image<ImageProps>`
  ${border}
  ${layout}
  ${space}
`;

type Props = {
  source?: string;
} & React.ComponentProps<typeof Image>;

const ProfilePicture = ({ source, ...props }: Props) => {
  return <Image {...props} source={source ? { uri: source } : profileImage} />;
};

export default ProfilePicture;
