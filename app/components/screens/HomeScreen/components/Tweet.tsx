import React from 'react';
import moment from 'moment-twitter';

import { ProfilePicture, Text, Wrapper } from 'app/components/common';
import { ITweet } from 'app/graphql/queries';
import theme from 'app/config/theme';

const truncateUserName = (name: string): string => name.slice(0, 10) + '...';

type Props = {
  tweet: ITweet;
};

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
          <Text isBold>{truncateUserName(tweet.user.name)}</Text>
          <Text> @{tweet.user.screen_name}</Text>
          <Text> · {moment(tweet.created_at).twitter()}</Text>
        </Wrapper>
        <Text>{tweet.text}</Text>
      </Wrapper>
    </Wrapper>
  );
};

export default Tweet;
