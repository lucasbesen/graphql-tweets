import { useQuery } from '@apollo/react-hooks';

import { GET_TWEETS, ITweet, ResultType } from 'app/graphql/queries';

type TweetsData = {
  twitter: {
    search: ITweet[];
  };
};

type TweetsVars = {
  q: string;
  count: number;
  result_type: ResultType;
};

const useTweetsQuery = (search?: string) => {
  const { data, loading } = useQuery<TweetsData, TweetsVars>(GET_TWEETS, {
    variables: {
      q: search || 'reactjs',
      count: 40,
      result_type: ResultType.Recent,
    },
  });

  return [loading, data];
};

export default useTweetsQuery;
