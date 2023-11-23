import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders, MaybeLazy } from 'graphql-request/build/esm/types';
import { getSdk } from './data-access.gql.gen';

export const getGraphqlClient = (
  url: string,
  headers?: MaybeLazy<GraphQLClientRequestHeaders> | undefined
) => {
  const client = new GraphQLClient(url, {
    headers
  });

  return getSdk(client);
};
