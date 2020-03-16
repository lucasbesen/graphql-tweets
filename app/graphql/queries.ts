import gql from 'graphql-tag';

import { tweetFragment, userFragment } from 'app/graphql/fragments';

export interface IUser {
  id: string;
  screen_name: string;
  name: string;
  profile_image_url: string;
}

export interface ITweet {
  id: string;
  created_at: string;
  text: string;
  retweet_count: number;
  user: IUser;
}

export enum ResultType {
  Mixed = 'mixed',
  Recent = 'recent',
  Popular = 'popular',
}

export const GET_TWEETS = gql`
  query getTweets($q: String!, $count: Int!, $resultType: SearchReponse!) {
    twitter {
      search(q: $q, count: $count, result_type: $resultType) {
        ...TweetFragment
        user {
          ...UserFragment
        }
      }
    }
  }
  ${userFragment}
  ${tweetFragment}
`;
