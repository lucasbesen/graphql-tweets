import gql from 'graphql-tag';

export const userFragment = gql`
  fragment UserFragment on TwitterUser {
    id
    name
    screen_name
    profile_image_url
  }
`;

export const tweetFragment = gql`
  fragment TweetFragment on Tweet {
    id
    text
    created_at
    retweet_count
  }
`;
