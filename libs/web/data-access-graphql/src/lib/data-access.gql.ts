import { gql } from 'urql';

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

export const SIGNUP_MUTATION = gql`
  mutation SingUp($signupInput: SignUpInput!) {
    signUp(signUpInput: $signupInput) {
      id
      name
      email
    }
  }
`;

export const GET_ALL_CATEGORY_QUERY = gql`
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

export const GET_UQIQUE_SUB_CATEGORY = gql`
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

export const GET_ITEM_BY_ID_QUERY = gql`
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

export const CUSTOMIZATION_COFFEE_MUTATION = gql`
  mutation Customization($data: CustomizationCreateInput!) {
    createCustomization(data: $data) {
      id
      type
      options
      menuItemId
    }
  }
`;
