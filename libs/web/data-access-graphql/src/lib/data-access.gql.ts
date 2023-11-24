import { gql } from 'graphql-request';

export const GET_USERS_GQL = gql`
  query GetUsers {
    users {
      id
      email
      name
    }
  }
`;

export const GET_HOME_BLOCK_GQL = gql`
  query GetHomeImages {
    homeBlocks {
      id
      title
      description
      button
      imagePath
      navigationPath
      rgbBackgroundId
      rgbBackground {
        r
        g
        b
        hash
      }
    }
  }
`;
