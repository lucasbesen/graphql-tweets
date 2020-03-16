import React from 'react';

import { ProfilePicture, Text, Wrapper } from 'app/components/common';
import { ITweet } from 'app/graphql/queries';
import theme from 'app/config/theme';

type Props = {
  tweet: ITweet;
};

const truncateUserName = (name: string): string => name.slice(0, 10) + '...';

const Tweet = ({ tweet }: Props) => {
  return (
    <Wrapper
      isRow
      p={10}
      borderBottomWidth={1}
      borderColor={theme.colors.border}
    >
      <ProfilePicture
        size={60}
        borderRadius={30}
        mr={10}
        source={tweet.user.profile_image_url}
      />
      <Wrapper width="80%">
        <Wrapper isRow mb="5px">
          <Text isBold mr={10}>
            {truncateUserName(tweet.user.name)}
          </Text>
          <Text>@{tweet.user.screen_name}</Text>
        </Wrapper>
        <Text>{tweet.text}</Text>
      </Wrapper>
    </Wrapper>
  );
};

export default Tweet;
