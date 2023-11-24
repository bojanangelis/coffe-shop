export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type HomeBlock = {
  __typename?: 'HomeBlock';
  button: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  imagePath: Scalars['String']['output'];
  navigationPath: Scalars['String']['output'];
  rgbBackground: RgbBackground;
  rgbBackgroundId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type HomeBlockCountAggregate = {
  __typename?: 'HomeBlockCountAggregate';
  _all: Scalars['Int']['output'];
  button: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  imagePath: Scalars['Int']['output'];
  navigationPath: Scalars['Int']['output'];
  rgbBackgroundId: Scalars['Int']['output'];
  title: Scalars['Int']['output'];
};

export type HomeBlockCreateInput = {
  button: Scalars['String']['input'];
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  imagePath: Scalars['String']['input'];
  navigationPath: Scalars['String']['input'];
  rgbBackground: RgbBackgroundCreateNestedOneWithoutHomeBlockInput;
  title: Scalars['String']['input'];
};

export type HomeBlockMaxAggregate = {
  __typename?: 'HomeBlockMaxAggregate';
  button?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  imagePath?: Maybe<Scalars['String']['output']>;
  navigationPath?: Maybe<Scalars['String']['output']>;
  rgbBackgroundId?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type HomeBlockMinAggregate = {
  __typename?: 'HomeBlockMinAggregate';
  button?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  imagePath?: Maybe<Scalars['String']['output']>;
  navigationPath?: Maybe<Scalars['String']['output']>;
  rgbBackgroundId?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type HomeBlockRelationFilter = {
  is?: InputMaybe<HomeBlockWhereInput>;
  isNot?: InputMaybe<HomeBlockWhereInput>;
};

export type HomeBlockUpdateInput = {
  button?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  imagePath?: InputMaybe<Scalars['String']['input']>;
  navigationPath?: InputMaybe<Scalars['String']['input']>;
  rgbBackground?: InputMaybe<RgbBackgroundUpdateOneRequiredWithoutHomeBlockNestedInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type HomeBlockWhereInput = {
  AND?: InputMaybe<Array<HomeBlockWhereInput>>;
  NOT?: InputMaybe<Array<HomeBlockWhereInput>>;
  OR?: InputMaybe<Array<HomeBlockWhereInput>>;
  button?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  imagePath?: InputMaybe<StringFilter>;
  navigationPath?: InputMaybe<StringFilter>;
  rgbBackground?: InputMaybe<RgbBackgroundRelationFilter>;
  rgbBackgroundId?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type HomeBlockWhereUniqueInput = {
  AND?: InputMaybe<Array<HomeBlockWhereInput>>;
  NOT?: InputMaybe<Array<HomeBlockWhereInput>>;
  OR?: InputMaybe<Array<HomeBlockWhereInput>>;
  button?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  imagePath?: InputMaybe<StringFilter>;
  navigationPath?: InputMaybe<StringFilter>;
  rgbBackground?: InputMaybe<RgbBackgroundRelationFilter>;
  rgbBackgroundId?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<StringFilter>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createHomeBlock: HomeBlock;
  createUser: User;
  removeHomeBlock: HomeBlock;
  removeUser: User;
  updateHomeBlock: HomeBlock;
  updateUser: User;
};

export type MutationCreateHomeBlockArgs = {
  data: HomeBlockCreateInput;
};

export type MutationCreateUserArgs = {
  data: UserCreateInput;
};

export type MutationRemoveHomeBlockArgs = {
  where: HomeBlockWhereUniqueInput;
};

export type MutationRemoveUserArgs = {
  where: UserWhereUniqueInput;
};

export type MutationUpdateHomeBlockArgs = {
  data: HomeBlockUpdateInput;
  where: HomeBlockWhereUniqueInput;
};

export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type Query = {
  __typename?: 'Query';
  homeBlock: HomeBlock;
  homeBlocks: Array<HomeBlock>;
  user: User;
  users: Array<User>;
};

export type QueryHomeBlockArgs = {
  where: HomeBlockWhereUniqueInput;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RgbBackground = {
  __typename?: 'RgbBackground';
  a?: Maybe<Scalars['Float']['output']>;
  b: Scalars['Int']['output'];
  g: Scalars['Int']['output'];
  hash?: Maybe<Scalars['String']['output']>;
  homeBlock?: Maybe<HomeBlock>;
  id: Scalars['ID']['output'];
  r: Scalars['Int']['output'];
};

export type RgbBackgroundAvgAggregate = {
  __typename?: 'RgbBackgroundAvgAggregate';
  a?: Maybe<Scalars['Float']['output']>;
  b?: Maybe<Scalars['Float']['output']>;
  g?: Maybe<Scalars['Float']['output']>;
  r?: Maybe<Scalars['Float']['output']>;
};

export type RgbBackgroundCountAggregate = {
  __typename?: 'RgbBackgroundCountAggregate';
  _all: Scalars['Int']['output'];
  a: Scalars['Int']['output'];
  b: Scalars['Int']['output'];
  g: Scalars['Int']['output'];
  hash: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  r: Scalars['Int']['output'];
};

export type RgbBackgroundCreateNestedOneWithoutHomeBlockInput = {
  connect?: InputMaybe<RgbBackgroundWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RgbBackgroundCreateOrConnectWithoutHomeBlockInput>;
  create?: InputMaybe<RgbBackgroundCreateWithoutHomeBlockInput>;
};

export type RgbBackgroundCreateOrConnectWithoutHomeBlockInput = {
  create: RgbBackgroundCreateWithoutHomeBlockInput;
  where: RgbBackgroundWhereUniqueInput;
};

export type RgbBackgroundCreateWithoutHomeBlockInput = {
  a?: InputMaybe<Scalars['Float']['input']>;
  b: Scalars['Int']['input'];
  g: Scalars['Int']['input'];
  hash?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  r: Scalars['Int']['input'];
};

export type RgbBackgroundMaxAggregate = {
  __typename?: 'RgbBackgroundMaxAggregate';
  a?: Maybe<Scalars['Float']['output']>;
  b?: Maybe<Scalars['Int']['output']>;
  g?: Maybe<Scalars['Int']['output']>;
  hash?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  r?: Maybe<Scalars['Int']['output']>;
};

export type RgbBackgroundMinAggregate = {
  __typename?: 'RgbBackgroundMinAggregate';
  a?: Maybe<Scalars['Float']['output']>;
  b?: Maybe<Scalars['Int']['output']>;
  g?: Maybe<Scalars['Int']['output']>;
  hash?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  r?: Maybe<Scalars['Int']['output']>;
};

export type RgbBackgroundRelationFilter = {
  is?: InputMaybe<RgbBackgroundWhereInput>;
  isNot?: InputMaybe<RgbBackgroundWhereInput>;
};

export type RgbBackgroundSumAggregate = {
  __typename?: 'RgbBackgroundSumAggregate';
  a?: Maybe<Scalars['Float']['output']>;
  b?: Maybe<Scalars['Int']['output']>;
  g?: Maybe<Scalars['Int']['output']>;
  r?: Maybe<Scalars['Int']['output']>;
};

export type RgbBackgroundUpdateOneRequiredWithoutHomeBlockNestedInput = {
  connect?: InputMaybe<RgbBackgroundWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RgbBackgroundCreateOrConnectWithoutHomeBlockInput>;
  create?: InputMaybe<RgbBackgroundCreateWithoutHomeBlockInput>;
  update?: InputMaybe<RgbBackgroundUpdateToOneWithWhereWithoutHomeBlockInput>;
  upsert?: InputMaybe<RgbBackgroundUpsertWithoutHomeBlockInput>;
};

export type RgbBackgroundUpdateToOneWithWhereWithoutHomeBlockInput = {
  data: RgbBackgroundUpdateWithoutHomeBlockInput;
  where?: InputMaybe<RgbBackgroundWhereInput>;
};

export type RgbBackgroundUpdateWithoutHomeBlockInput = {
  a?: InputMaybe<Scalars['Float']['input']>;
  b?: InputMaybe<Scalars['Int']['input']>;
  g?: InputMaybe<Scalars['Int']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  r?: InputMaybe<Scalars['Int']['input']>;
};

export type RgbBackgroundUpsertWithoutHomeBlockInput = {
  create: RgbBackgroundCreateWithoutHomeBlockInput;
  update: RgbBackgroundUpdateWithoutHomeBlockInput;
  where?: InputMaybe<RgbBackgroundWhereInput>;
};

export type RgbBackgroundWhereInput = {
  AND?: InputMaybe<Array<RgbBackgroundWhereInput>>;
  NOT?: InputMaybe<Array<RgbBackgroundWhereInput>>;
  OR?: InputMaybe<Array<RgbBackgroundWhereInput>>;
  a?: InputMaybe<FloatFilter>;
  b?: InputMaybe<IntFilter>;
  g?: InputMaybe<IntFilter>;
  hash?: InputMaybe<StringFilter>;
  homeBlock?: InputMaybe<HomeBlockRelationFilter>;
  id?: InputMaybe<StringFilter>;
  r?: InputMaybe<IntFilter>;
};

export type RgbBackgroundWhereUniqueInput = {
  AND?: InputMaybe<Array<RgbBackgroundWhereInput>>;
  NOT?: InputMaybe<Array<RgbBackgroundWhereInput>>;
  OR?: InputMaybe<Array<RgbBackgroundWhereInput>>;
  a?: InputMaybe<FloatFilter>;
  b?: InputMaybe<IntFilter>;
  g?: InputMaybe<IntFilter>;
  hash?: InputMaybe<StringFilter>;
  homeBlock?: InputMaybe<HomeBlockRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  r?: InputMaybe<IntFilter>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<StringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
};

export type UserCreateInput = {
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
};
