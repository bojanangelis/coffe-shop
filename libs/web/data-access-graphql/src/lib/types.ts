export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Category = {
  __typename?: 'Category';
  _count: CategoryCount;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  subCategories?: Maybe<Array<SubCategory>>;
};

export type CategoryCount = {
  __typename?: 'CategoryCount';
  subCategories: Scalars['Int']['output'];
};

export type CategoryCountAggregate = {
  __typename?: 'CategoryCountAggregate';
  _all: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
};

export type CategoryCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  subCategories?: InputMaybe<SubCategoryCreateNestedManyWithoutCategoryInput>;
};

export type CategoryCreateNestedOneWithoutSubCategoriesInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutSubCategoriesInput>;
  create?: InputMaybe<CategoryCreateWithoutSubCategoriesInput>;
};

export type CategoryCreateOrConnectWithoutSubCategoriesInput = {
  create: CategoryCreateWithoutSubCategoriesInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateWithoutSubCategoriesInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CategoryMaxAggregate = {
  __typename?: 'CategoryMaxAggregate';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type CategoryMinAggregate = {
  __typename?: 'CategoryMinAggregate';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type CategoryRelationFilter = {
  is?: InputMaybe<CategoryWhereInput>;
  isNot?: InputMaybe<CategoryWhereInput>;
};

export type CategoryUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  subCategories?: InputMaybe<SubCategoryUpdateManyWithoutCategoryNestedInput>;
};

export type CategoryUpdateOneRequiredWithoutSubCategoriesNestedInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutSubCategoriesInput>;
  create?: InputMaybe<CategoryCreateWithoutSubCategoriesInput>;
  update?: InputMaybe<CategoryUpdateToOneWithWhereWithoutSubCategoriesInput>;
  upsert?: InputMaybe<CategoryUpsertWithoutSubCategoriesInput>;
};

export type CategoryUpdateToOneWithWhereWithoutSubCategoriesInput = {
  data: CategoryUpdateWithoutSubCategoriesInput;
  where?: InputMaybe<CategoryWhereInput>;
};

export type CategoryUpdateWithoutSubCategoriesInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryUpsertWithoutSubCategoriesInput = {
  create: CategoryCreateWithoutSubCategoriesInput;
  update: CategoryUpdateWithoutSubCategoriesInput;
  where?: InputMaybe<CategoryWhereInput>;
};

export type CategoryWhereInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  subCategories?: InputMaybe<SubCategoryListRelationFilter>;
};

export type CategoryWhereUniqueInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  subCategories?: InputMaybe<SubCategoryListRelationFilter>;
};

export type Customization = {
  __typename?: 'Customization';
  id: Scalars['ID']['output'];
  menuItem: MenuItem;
  menuItemId: Scalars['String']['output'];
  options?: Maybe<Array<Scalars['String']['output']>>;
  type: Scalars['String']['output'];
};

export type CustomizationCountAggregate = {
  __typename?: 'CustomizationCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  menuItemId: Scalars['Int']['output'];
  options: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
};

export type CustomizationCreateManyMenuItemInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Array<Scalars['String']['input']>>;
  type: Scalars['String']['input'];
};

export type CustomizationCreateManyMenuItemInputEnvelope = {
  data: Array<CustomizationCreateManyMenuItemInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CustomizationCreateNestedManyWithoutMenuItemInput = {
  connect?: InputMaybe<Array<CustomizationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CustomizationCreateOrConnectWithoutMenuItemInput>>;
  create?: InputMaybe<Array<CustomizationCreateWithoutMenuItemInput>>;
  createMany?: InputMaybe<CustomizationCreateManyMenuItemInputEnvelope>;
};

export type CustomizationCreateOrConnectWithoutMenuItemInput = {
  create: CustomizationCreateWithoutMenuItemInput;
  where: CustomizationWhereUniqueInput;
};

export type CustomizationCreateWithoutMenuItemInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Array<Scalars['String']['input']>>;
  type: Scalars['String']['input'];
};

export type CustomizationListRelationFilter = {
  every?: InputMaybe<CustomizationWhereInput>;
  none?: InputMaybe<CustomizationWhereInput>;
  some?: InputMaybe<CustomizationWhereInput>;
};

export type CustomizationMaxAggregate = {
  __typename?: 'CustomizationMaxAggregate';
  id?: Maybe<Scalars['String']['output']>;
  menuItemId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type CustomizationMinAggregate = {
  __typename?: 'CustomizationMinAggregate';
  id?: Maybe<Scalars['String']['output']>;
  menuItemId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type CustomizationScalarWhereInput = {
  AND?: InputMaybe<Array<CustomizationScalarWhereInput>>;
  NOT?: InputMaybe<Array<CustomizationScalarWhereInput>>;
  OR?: InputMaybe<Array<CustomizationScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  menuItemId?: InputMaybe<StringFilter>;
  options?: InputMaybe<StringListFilter>;
  type?: InputMaybe<StringFilter>;
};

export type CustomizationUpdateManyMutationInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type CustomizationUpdateManyWithWhereWithoutMenuItemInput = {
  data: CustomizationUpdateManyMutationInput;
  where: CustomizationScalarWhereInput;
};

export type CustomizationUpdateManyWithoutMenuItemNestedInput = {
  connect?: InputMaybe<Array<CustomizationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CustomizationCreateOrConnectWithoutMenuItemInput>>;
  create?: InputMaybe<Array<CustomizationCreateWithoutMenuItemInput>>;
  createMany?: InputMaybe<CustomizationCreateManyMenuItemInputEnvelope>;
  delete?: InputMaybe<Array<CustomizationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CustomizationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CustomizationWhereUniqueInput>>;
  set?: InputMaybe<Array<CustomizationWhereUniqueInput>>;
  update?: InputMaybe<Array<CustomizationUpdateWithWhereUniqueWithoutMenuItemInput>>;
  updateMany?: InputMaybe<Array<CustomizationUpdateManyWithWhereWithoutMenuItemInput>>;
  upsert?: InputMaybe<Array<CustomizationUpsertWithWhereUniqueWithoutMenuItemInput>>;
};

export type CustomizationUpdateWithWhereUniqueWithoutMenuItemInput = {
  data: CustomizationUpdateWithoutMenuItemInput;
  where: CustomizationWhereUniqueInput;
};

export type CustomizationUpdateWithoutMenuItemInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type CustomizationUpsertWithWhereUniqueWithoutMenuItemInput = {
  create: CustomizationCreateWithoutMenuItemInput;
  update: CustomizationUpdateWithoutMenuItemInput;
  where: CustomizationWhereUniqueInput;
};

export type CustomizationWhereInput = {
  AND?: InputMaybe<Array<CustomizationWhereInput>>;
  NOT?: InputMaybe<Array<CustomizationWhereInput>>;
  OR?: InputMaybe<Array<CustomizationWhereInput>>;
  id?: InputMaybe<StringFilter>;
  menuItem?: InputMaybe<MenuItemRelationFilter>;
  menuItemId?: InputMaybe<StringFilter>;
  options?: InputMaybe<StringListFilter>;
  type?: InputMaybe<StringFilter>;
};

export type CustomizationWhereUniqueInput = {
  AND?: InputMaybe<Array<CustomizationWhereInput>>;
  NOT?: InputMaybe<Array<CustomizationWhereInput>>;
  OR?: InputMaybe<Array<CustomizationWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  menuItem?: InputMaybe<MenuItemRelationFilter>;
  menuItemId?: InputMaybe<StringFilter>;
  options?: InputMaybe<StringListFilter>;
  type?: InputMaybe<StringFilter>;
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

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type MenuItem = {
  __typename?: 'MenuItem';
  _count: MenuItemCount;
  calories?: Maybe<Scalars['Int']['output']>;
  customizations?: Maybe<Array<Customization>>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  sizes?: Maybe<Array<Size>>;
  subCategory: SubCategory;
  subCategoryId: Scalars['String']['output'];
};

export type MenuItemAvgAggregate = {
  __typename?: 'MenuItemAvgAggregate';
  calories?: Maybe<Scalars['Float']['output']>;
};

export type MenuItemCount = {
  __typename?: 'MenuItemCount';
  customizations: Scalars['Int']['output'];
  sizes: Scalars['Int']['output'];
};

export type MenuItemCountAggregate = {
  __typename?: 'MenuItemCountAggregate';
  _all: Scalars['Int']['output'];
  calories: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  subCategoryId: Scalars['Int']['output'];
};

export type MenuItemCreateInput = {
  calories?: InputMaybe<Scalars['Int']['input']>;
  customizations?: InputMaybe<CustomizationCreateNestedManyWithoutMenuItemInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  sizes?: InputMaybe<SizeCreateNestedManyWithoutMenuItemInput>;
  subCategory: SubCategoryCreateNestedOneWithoutMenuItemsInput;
};

export type MenuItemCreateManySubCategoryInput = {
  calories?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type MenuItemCreateManySubCategoryInputEnvelope = {
  data: Array<MenuItemCreateManySubCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MenuItemCreateNestedManyWithoutSubCategoryInput = {
  connect?: InputMaybe<Array<MenuItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MenuItemCreateOrConnectWithoutSubCategoryInput>>;
  create?: InputMaybe<Array<MenuItemCreateWithoutSubCategoryInput>>;
  createMany?: InputMaybe<MenuItemCreateManySubCategoryInputEnvelope>;
};

export type MenuItemCreateOrConnectWithoutSubCategoryInput = {
  create: MenuItemCreateWithoutSubCategoryInput;
  where: MenuItemWhereUniqueInput;
};

export type MenuItemCreateWithoutSubCategoryInput = {
  calories?: InputMaybe<Scalars['Int']['input']>;
  customizations?: InputMaybe<CustomizationCreateNestedManyWithoutMenuItemInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  sizes?: InputMaybe<SizeCreateNestedManyWithoutMenuItemInput>;
};

export type MenuItemListRelationFilter = {
  every?: InputMaybe<MenuItemWhereInput>;
  none?: InputMaybe<MenuItemWhereInput>;
  some?: InputMaybe<MenuItemWhereInput>;
};

export type MenuItemMaxAggregate = {
  __typename?: 'MenuItemMaxAggregate';
  calories?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  subCategoryId?: Maybe<Scalars['String']['output']>;
};

export type MenuItemMinAggregate = {
  __typename?: 'MenuItemMinAggregate';
  calories?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  subCategoryId?: Maybe<Scalars['String']['output']>;
};

export type MenuItemRelationFilter = {
  is?: InputMaybe<MenuItemWhereInput>;
  isNot?: InputMaybe<MenuItemWhereInput>;
};

export type MenuItemScalarWhereInput = {
  AND?: InputMaybe<Array<MenuItemScalarWhereInput>>;
  NOT?: InputMaybe<Array<MenuItemScalarWhereInput>>;
  OR?: InputMaybe<Array<MenuItemScalarWhereInput>>;
  calories?: InputMaybe<IntFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  subCategoryId?: InputMaybe<StringFilter>;
};

export type MenuItemSumAggregate = {
  __typename?: 'MenuItemSumAggregate';
  calories?: Maybe<Scalars['Int']['output']>;
};

export type MenuItemUpdateInput = {
  calories?: InputMaybe<Scalars['Int']['input']>;
  customizations?: InputMaybe<CustomizationUpdateManyWithoutMenuItemNestedInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sizes?: InputMaybe<SizeUpdateManyWithoutMenuItemNestedInput>;
  subCategory?: InputMaybe<SubCategoryUpdateOneRequiredWithoutMenuItemsNestedInput>;
};

export type MenuItemUpdateManyMutationInput = {
  calories?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type MenuItemUpdateManyWithWhereWithoutSubCategoryInput = {
  data: MenuItemUpdateManyMutationInput;
  where: MenuItemScalarWhereInput;
};

export type MenuItemUpdateManyWithoutSubCategoryNestedInput = {
  connect?: InputMaybe<Array<MenuItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MenuItemCreateOrConnectWithoutSubCategoryInput>>;
  create?: InputMaybe<Array<MenuItemCreateWithoutSubCategoryInput>>;
  createMany?: InputMaybe<MenuItemCreateManySubCategoryInputEnvelope>;
  delete?: InputMaybe<Array<MenuItemWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MenuItemScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MenuItemWhereUniqueInput>>;
  set?: InputMaybe<Array<MenuItemWhereUniqueInput>>;
  update?: InputMaybe<Array<MenuItemUpdateWithWhereUniqueWithoutSubCategoryInput>>;
  updateMany?: InputMaybe<Array<MenuItemUpdateManyWithWhereWithoutSubCategoryInput>>;
  upsert?: InputMaybe<Array<MenuItemUpsertWithWhereUniqueWithoutSubCategoryInput>>;
};

export type MenuItemUpdateWithWhereUniqueWithoutSubCategoryInput = {
  data: MenuItemUpdateWithoutSubCategoryInput;
  where: MenuItemWhereUniqueInput;
};

export type MenuItemUpdateWithoutSubCategoryInput = {
  calories?: InputMaybe<Scalars['Int']['input']>;
  customizations?: InputMaybe<CustomizationUpdateManyWithoutMenuItemNestedInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sizes?: InputMaybe<SizeUpdateManyWithoutMenuItemNestedInput>;
};

export type MenuItemUpsertWithWhereUniqueWithoutSubCategoryInput = {
  create: MenuItemCreateWithoutSubCategoryInput;
  update: MenuItemUpdateWithoutSubCategoryInput;
  where: MenuItemWhereUniqueInput;
};

export type MenuItemWhereInput = {
  AND?: InputMaybe<Array<MenuItemWhereInput>>;
  NOT?: InputMaybe<Array<MenuItemWhereInput>>;
  OR?: InputMaybe<Array<MenuItemWhereInput>>;
  calories?: InputMaybe<IntFilter>;
  customizations?: InputMaybe<CustomizationListRelationFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  sizes?: InputMaybe<SizeListRelationFilter>;
  subCategory?: InputMaybe<SubCategoryRelationFilter>;
  subCategoryId?: InputMaybe<StringFilter>;
};

export type MenuItemWhereUniqueInput = {
  AND?: InputMaybe<Array<MenuItemWhereInput>>;
  NOT?: InputMaybe<Array<MenuItemWhereInput>>;
  OR?: InputMaybe<Array<MenuItemWhereInput>>;
  calories?: InputMaybe<IntFilter>;
  customizations?: InputMaybe<CustomizationListRelationFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  sizes?: InputMaybe<SizeListRelationFilter>;
  subCategory?: InputMaybe<SubCategoryRelationFilter>;
  subCategoryId?: InputMaybe<StringFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory: Category;
  createHomeBlock: HomeBlock;
  createMenuItem: MenuItem;
  createUser: User;
  login: User;
  removeCategory: Category;
  removeHomeBlock: HomeBlock;
  removeMenuItem: MenuItem;
  removeUser: User;
  signUp: User;
  updateCategory: Category;
  updateHomeBlock: HomeBlock;
  updateMenuItem: MenuItem;
  updateUser: User;
};


export type MutationCreateCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationCreateHomeBlockArgs = {
  data: HomeBlockCreateInput;
};


export type MutationCreateMenuItemArgs = {
  data: MenuItemCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationRemoveCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveHomeBlockArgs = {
  where: HomeBlockWhereUniqueInput;
};


export type MutationRemoveMenuItemArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationSignUpArgs = {
  signUpInput: SignUpInput;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpdateHomeBlockArgs = {
  data: HomeBlockUpdateInput;
  where: HomeBlockWhereUniqueInput;
};


export type MutationUpdateMenuItemArgs = {
  data: MenuItemUpdateInput;
  where: MenuItemWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type Query = {
  __typename?: 'Query';
  categories: Array<Category>;
  category: Category;
  homeBlock: HomeBlock;
  homeBlocks: Array<HomeBlock>;
  item: MenuItem;
  items: Array<MenuItem>;
  me: User;
  users: Array<User>;
};


export type QueryCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type QueryHomeBlockArgs = {
  where: HomeBlockWhereUniqueInput;
};


export type QueryItemArgs = {
  where: MenuItemWhereUniqueInput;
};


export type QueryMeArgs = {
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

export type SignUpInput = {
  email: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export type Size = {
  __typename?: 'Size';
  id: Scalars['ID']['output'];
  menuItem: MenuItem;
  menuItemId: Scalars['String']['output'];
  name: Scalars['String']['output'];
  volume: Scalars['Int']['output'];
};

export type SizeAvgAggregate = {
  __typename?: 'SizeAvgAggregate';
  volume?: Maybe<Scalars['Float']['output']>;
};

export type SizeCountAggregate = {
  __typename?: 'SizeCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  menuItemId: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  volume: Scalars['Int']['output'];
};

export type SizeCreateManyMenuItemInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  volume: Scalars['Int']['input'];
};

export type SizeCreateManyMenuItemInputEnvelope = {
  data: Array<SizeCreateManyMenuItemInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SizeCreateNestedManyWithoutMenuItemInput = {
  connect?: InputMaybe<Array<SizeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SizeCreateOrConnectWithoutMenuItemInput>>;
  create?: InputMaybe<Array<SizeCreateWithoutMenuItemInput>>;
  createMany?: InputMaybe<SizeCreateManyMenuItemInputEnvelope>;
};

export type SizeCreateOrConnectWithoutMenuItemInput = {
  create: SizeCreateWithoutMenuItemInput;
  where: SizeWhereUniqueInput;
};

export type SizeCreateWithoutMenuItemInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  volume: Scalars['Int']['input'];
};

export type SizeListRelationFilter = {
  every?: InputMaybe<SizeWhereInput>;
  none?: InputMaybe<SizeWhereInput>;
  some?: InputMaybe<SizeWhereInput>;
};

export type SizeMaxAggregate = {
  __typename?: 'SizeMaxAggregate';
  id?: Maybe<Scalars['String']['output']>;
  menuItemId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  volume?: Maybe<Scalars['Int']['output']>;
};

export type SizeMinAggregate = {
  __typename?: 'SizeMinAggregate';
  id?: Maybe<Scalars['String']['output']>;
  menuItemId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  volume?: Maybe<Scalars['Int']['output']>;
};

export type SizeScalarWhereInput = {
  AND?: InputMaybe<Array<SizeScalarWhereInput>>;
  NOT?: InputMaybe<Array<SizeScalarWhereInput>>;
  OR?: InputMaybe<Array<SizeScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  menuItemId?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  volume?: InputMaybe<IntFilter>;
};

export type SizeSumAggregate = {
  __typename?: 'SizeSumAggregate';
  volume?: Maybe<Scalars['Int']['output']>;
};

export type SizeUpdateManyMutationInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  volume?: InputMaybe<Scalars['Int']['input']>;
};

export type SizeUpdateManyWithWhereWithoutMenuItemInput = {
  data: SizeUpdateManyMutationInput;
  where: SizeScalarWhereInput;
};

export type SizeUpdateManyWithoutMenuItemNestedInput = {
  connect?: InputMaybe<Array<SizeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SizeCreateOrConnectWithoutMenuItemInput>>;
  create?: InputMaybe<Array<SizeCreateWithoutMenuItemInput>>;
  createMany?: InputMaybe<SizeCreateManyMenuItemInputEnvelope>;
  delete?: InputMaybe<Array<SizeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SizeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SizeWhereUniqueInput>>;
  set?: InputMaybe<Array<SizeWhereUniqueInput>>;
  update?: InputMaybe<Array<SizeUpdateWithWhereUniqueWithoutMenuItemInput>>;
  updateMany?: InputMaybe<Array<SizeUpdateManyWithWhereWithoutMenuItemInput>>;
  upsert?: InputMaybe<Array<SizeUpsertWithWhereUniqueWithoutMenuItemInput>>;
};

export type SizeUpdateWithWhereUniqueWithoutMenuItemInput = {
  data: SizeUpdateWithoutMenuItemInput;
  where: SizeWhereUniqueInput;
};

export type SizeUpdateWithoutMenuItemInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  volume?: InputMaybe<Scalars['Int']['input']>;
};

export type SizeUpsertWithWhereUniqueWithoutMenuItemInput = {
  create: SizeCreateWithoutMenuItemInput;
  update: SizeUpdateWithoutMenuItemInput;
  where: SizeWhereUniqueInput;
};

export type SizeWhereInput = {
  AND?: InputMaybe<Array<SizeWhereInput>>;
  NOT?: InputMaybe<Array<SizeWhereInput>>;
  OR?: InputMaybe<Array<SizeWhereInput>>;
  id?: InputMaybe<StringFilter>;
  menuItem?: InputMaybe<MenuItemRelationFilter>;
  menuItemId?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  volume?: InputMaybe<IntFilter>;
};

export type SizeWhereUniqueInput = {
  AND?: InputMaybe<Array<SizeWhereInput>>;
  NOT?: InputMaybe<Array<SizeWhereInput>>;
  OR?: InputMaybe<Array<SizeWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  menuItem?: InputMaybe<MenuItemRelationFilter>;
  menuItemId?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  volume?: InputMaybe<IntFilter>;
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

export type StringListFilter = {
  equals?: InputMaybe<Array<Scalars['String']['input']>>;
  has?: InputMaybe<Scalars['String']['input']>;
  hasEvery?: InputMaybe<Array<Scalars['String']['input']>>;
  hasSome?: InputMaybe<Array<Scalars['String']['input']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SubCategory = {
  __typename?: 'SubCategory';
  _count: SubCategoryCount;
  category: Category;
  categoryId: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  menuItems?: Maybe<Array<MenuItem>>;
  name: Scalars['String']['output'];
};

export type SubCategoryCount = {
  __typename?: 'SubCategoryCount';
  menuItems: Scalars['Int']['output'];
};

export type SubCategoryCountAggregate = {
  __typename?: 'SubCategoryCountAggregate';
  _all: Scalars['Int']['output'];
  categoryId: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
};

export type SubCategoryCreateManyCategoryInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type SubCategoryCreateManyCategoryInputEnvelope = {
  data: Array<SubCategoryCreateManyCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SubCategoryCreateNestedManyWithoutCategoryInput = {
  connect?: InputMaybe<Array<SubCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SubCategoryCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<SubCategoryCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<SubCategoryCreateManyCategoryInputEnvelope>;
};

export type SubCategoryCreateNestedOneWithoutMenuItemsInput = {
  connect?: InputMaybe<SubCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SubCategoryCreateOrConnectWithoutMenuItemsInput>;
  create?: InputMaybe<SubCategoryCreateWithoutMenuItemsInput>;
};

export type SubCategoryCreateOrConnectWithoutCategoryInput = {
  create: SubCategoryCreateWithoutCategoryInput;
  where: SubCategoryWhereUniqueInput;
};

export type SubCategoryCreateOrConnectWithoutMenuItemsInput = {
  create: SubCategoryCreateWithoutMenuItemsInput;
  where: SubCategoryWhereUniqueInput;
};

export type SubCategoryCreateWithoutCategoryInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  menuItems?: InputMaybe<MenuItemCreateNestedManyWithoutSubCategoryInput>;
  name: Scalars['String']['input'];
};

export type SubCategoryCreateWithoutMenuItemsInput = {
  category: CategoryCreateNestedOneWithoutSubCategoriesInput;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type SubCategoryListRelationFilter = {
  every?: InputMaybe<SubCategoryWhereInput>;
  none?: InputMaybe<SubCategoryWhereInput>;
  some?: InputMaybe<SubCategoryWhereInput>;
};

export type SubCategoryMaxAggregate = {
  __typename?: 'SubCategoryMaxAggregate';
  categoryId?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type SubCategoryMinAggregate = {
  __typename?: 'SubCategoryMinAggregate';
  categoryId?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type SubCategoryRelationFilter = {
  is?: InputMaybe<SubCategoryWhereInput>;
  isNot?: InputMaybe<SubCategoryWhereInput>;
};

export type SubCategoryScalarWhereInput = {
  AND?: InputMaybe<Array<SubCategoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<SubCategoryScalarWhereInput>>;
  OR?: InputMaybe<Array<SubCategoryScalarWhereInput>>;
  categoryId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type SubCategoryUpdateManyMutationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type SubCategoryUpdateManyWithWhereWithoutCategoryInput = {
  data: SubCategoryUpdateManyMutationInput;
  where: SubCategoryScalarWhereInput;
};

export type SubCategoryUpdateManyWithoutCategoryNestedInput = {
  connect?: InputMaybe<Array<SubCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SubCategoryCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<SubCategoryCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<SubCategoryCreateManyCategoryInputEnvelope>;
  delete?: InputMaybe<Array<SubCategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SubCategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SubCategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<SubCategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<SubCategoryUpdateWithWhereUniqueWithoutCategoryInput>>;
  updateMany?: InputMaybe<Array<SubCategoryUpdateManyWithWhereWithoutCategoryInput>>;
  upsert?: InputMaybe<Array<SubCategoryUpsertWithWhereUniqueWithoutCategoryInput>>;
};

export type SubCategoryUpdateOneRequiredWithoutMenuItemsNestedInput = {
  connect?: InputMaybe<SubCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SubCategoryCreateOrConnectWithoutMenuItemsInput>;
  create?: InputMaybe<SubCategoryCreateWithoutMenuItemsInput>;
  update?: InputMaybe<SubCategoryUpdateToOneWithWhereWithoutMenuItemsInput>;
  upsert?: InputMaybe<SubCategoryUpsertWithoutMenuItemsInput>;
};

export type SubCategoryUpdateToOneWithWhereWithoutMenuItemsInput = {
  data: SubCategoryUpdateWithoutMenuItemsInput;
  where?: InputMaybe<SubCategoryWhereInput>;
};

export type SubCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
  data: SubCategoryUpdateWithoutCategoryInput;
  where: SubCategoryWhereUniqueInput;
};

export type SubCategoryUpdateWithoutCategoryInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  menuItems?: InputMaybe<MenuItemUpdateManyWithoutSubCategoryNestedInput>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type SubCategoryUpdateWithoutMenuItemsInput = {
  category?: InputMaybe<CategoryUpdateOneRequiredWithoutSubCategoriesNestedInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type SubCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
  create: SubCategoryCreateWithoutCategoryInput;
  update: SubCategoryUpdateWithoutCategoryInput;
  where: SubCategoryWhereUniqueInput;
};

export type SubCategoryUpsertWithoutMenuItemsInput = {
  create: SubCategoryCreateWithoutMenuItemsInput;
  update: SubCategoryUpdateWithoutMenuItemsInput;
  where?: InputMaybe<SubCategoryWhereInput>;
};

export type SubCategoryWhereInput = {
  AND?: InputMaybe<Array<SubCategoryWhereInput>>;
  NOT?: InputMaybe<Array<SubCategoryWhereInput>>;
  OR?: InputMaybe<Array<SubCategoryWhereInput>>;
  category?: InputMaybe<CategoryRelationFilter>;
  categoryId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  menuItems?: InputMaybe<MenuItemListRelationFilter>;
  name?: InputMaybe<StringFilter>;
};

export type SubCategoryWhereUniqueInput = {
  AND?: InputMaybe<Array<SubCategoryWhereInput>>;
  NOT?: InputMaybe<Array<SubCategoryWhereInput>>;
  OR?: InputMaybe<Array<SubCategoryWhereInput>>;
  category?: InputMaybe<CategoryRelationFilter>;
  categoryId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  menuItems?: InputMaybe<MenuItemListRelationFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
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
