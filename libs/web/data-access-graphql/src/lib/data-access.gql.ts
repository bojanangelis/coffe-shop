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
      rgbBackground {
        r
        g
        b
        hash
      }
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation Login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      id
      email
    }
  }
`;
