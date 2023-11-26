import * as Types from './types';

import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type GetUsersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, email: string, name?: string | null }> };

export type GetHomeImagesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetHomeImagesQuery = { __typename?: 'Query', homeBlocks: Array<{ __typename?: 'HomeBlock', id: string, title: string, description: string, button: string, imagePath: string, navigationPath: string, rgbBackground: { __typename?: 'RgbBackground', r: number, g: number, b: number, hash?: string | null } }> };

export type LoginMutationVariables = Types.Exact<{
  loginInput: Types.LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'User', id: string, email: string } };

export type SingUpMutationVariables = Types.Exact<{
  signupInput: Types.SignUpInput;
}>;


export type SingUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'User', id: string, name?: string | null, email: string } };


export const GetUsersDocument = gql`
    query GetUsers {
  users {
    id
    email
    name
  }
}
    `;

export function useGetUsersQuery(options?: Omit<Urql.UseQueryArgs<GetUsersQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUsersQuery, GetUsersQueryVariables>({ query: GetUsersDocument, ...options });
};
export const GetHomeImagesDocument = gql`
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

export function useGetHomeImagesQuery(options?: Omit<Urql.UseQueryArgs<GetHomeImagesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetHomeImagesQuery, GetHomeImagesQueryVariables>({ query: GetHomeImagesDocument, ...options });
};
export const LoginDocument = gql`
    mutation Login($loginInput: LoginInput!) {
  login(loginInput: $loginInput) {
    id
    email
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const SingUpDocument = gql`
    mutation SingUp($signupInput: SignUpInput!) {
  signUp(signUpInput: $signupInput) {
    id
    name
    email
  }
}
    `;

export function useSingUpMutation() {
  return Urql.useMutation<SingUpMutation, SingUpMutationVariables>(SingUpDocument);
};