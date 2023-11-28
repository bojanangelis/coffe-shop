import * as Types from './types';

import { gql } from 'urql';
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

export type GetAllCategoryQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllCategoryQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id: string, name: string, description?: string | null, subCategories?: Array<{ __typename?: 'SubCategory', id: string, name: string, path?: string | null, image_path?: string | null, description?: string | null }> | null }> };

export type GetSubCategoryQueryVariables = Types.Exact<{
  where: Types.SubCategoryWhereUniqueInput;
}>;


export type GetSubCategoryQuery = { __typename?: 'Query', subCategory: { __typename: 'SubCategory', id: string, name: string, path?: string | null, description?: string | null, image_path?: string | null, menuItems?: Array<{ __typename?: 'MenuItem', id: string, name: string, description?: string | null, image_path?: string | null, calories?: number | null }> | null } };

export type ItemQueryVariables = Types.Exact<{
  where: Types.MenuItemWhereUniqueInput;
}>;


export type ItemQuery = { __typename?: 'Query', item: { __typename?: 'MenuItem', id: string, name: string, description?: string | null, image_path?: string | null, calories?: number | null, subCategoryId: string, customizations?: Array<{ __typename?: 'Customization', id: string, type: string, options?: Array<string> | null }> | null, sizes?: Array<{ __typename?: 'Size', id: string, name: string, volume: number }> | null } };

export type CustomizationMutationVariables = Types.Exact<{
  data: Types.CustomizationCreateInput;
}>;


export type CustomizationMutation = { __typename?: 'Mutation', createCustomization: { __typename?: 'Customization', id: string, type: string, options?: Array<string> | null, menuItemId: string } };


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
export const GetAllCategoryDocument = gql`
    query getAllCategory {
  categories {
    id
    name
    description
    subCategories {
      id
      name
      path
      image_path
      description
    }
  }
}
    `;

export function useGetAllCategoryQuery(options?: Omit<Urql.UseQueryArgs<GetAllCategoryQueryVariables>, 'query'>) {
  return Urql.useQuery<GetAllCategoryQuery, GetAllCategoryQueryVariables>({ query: GetAllCategoryDocument, ...options });
};
export const GetSubCategoryDocument = gql`
    query getSubCategory($where: SubCategoryWhereUniqueInput!) {
  subCategory(where: $where) {
    id
    name
    path
    description
    image_path
    __typename
    menuItems {
      id
      name
      description
      image_path
      calories
    }
  }
}
    `;

export function useGetSubCategoryQuery(options: Omit<Urql.UseQueryArgs<GetSubCategoryQueryVariables>, 'query'>) {
  return Urql.useQuery<GetSubCategoryQuery, GetSubCategoryQueryVariables>({ query: GetSubCategoryDocument, ...options });
};
export const ItemDocument = gql`
    query item($where: MenuItemWhereUniqueInput!) {
  item(where: $where) {
    id
    name
    description
    image_path
    calories
    subCategoryId
    customizations {
      id
      type
      options
    }
    sizes {
      id
      name
      volume
    }
  }
}
    `;

export function useItemQuery(options: Omit<Urql.UseQueryArgs<ItemQueryVariables>, 'query'>) {
  return Urql.useQuery<ItemQuery, ItemQueryVariables>({ query: ItemDocument, ...options });
};
export const CustomizationDocument = gql`
    mutation Customization($data: CustomizationCreateInput!) {
  createCustomization(data: $data) {
    id
    type
    options
    menuItemId
  }
}
    `;

export function useCustomizationMutation() {
  return Urql.useMutation<CustomizationMutation, CustomizationMutationVariables>(CustomizationDocument);
};