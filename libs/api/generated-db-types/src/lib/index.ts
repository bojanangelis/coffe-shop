import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    name = "name",
    password = "password"
}

export enum SubCategoryScalarFieldEnum {
    id = "id",
    name = "name",
    path = "path",
    image_path = "image_path",
    description = "description",
    categoryId = "categoryId"
}

export enum SizeScalarFieldEnum {
    id = "id",
    name = "name",
    volume = "volume",
    menuItemId = "menuItemId"
}

export enum RgbBackgroundScalarFieldEnum {
    id = "id",
    r = "r",
    g = "g",
    b = "b",
    a = "a",
    hash = "hash"
}

export enum TransactionIsolationLevel {
    ReadUncommitted = "ReadUncommitted",
    ReadCommitted = "ReadCommitted",
    RepeatableRead = "RepeatableRead",
    Serializable = "Serializable"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}

export enum NullsOrder {
    first = "first",
    last = "last"
}

export enum MenuItemScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    image_path = "image_path",
    calories = "calories",
    subCategoryId = "subCategoryId"
}

export enum HomeBlockScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    button = "button",
    imagePath = "imagePath",
    navigationPath = "navigationPath",
    rgbBackgroundId = "rgbBackgroundId"
}

export enum CustomizationScalarFieldEnum {
    id = "id",
    type = "type",
    options = "options",
    menuItemId = "menuItemId"
}

export enum CategoryScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description"
}

registerEnumType(CategoryScalarFieldEnum, { name: 'CategoryScalarFieldEnum', description: undefined })
registerEnumType(CustomizationScalarFieldEnum, { name: 'CustomizationScalarFieldEnum', description: undefined })
registerEnumType(HomeBlockScalarFieldEnum, { name: 'HomeBlockScalarFieldEnum', description: undefined })
registerEnumType(MenuItemScalarFieldEnum, { name: 'MenuItemScalarFieldEnum', description: undefined })
registerEnumType(NullsOrder, { name: 'NullsOrder', description: undefined })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined })
registerEnumType(RgbBackgroundScalarFieldEnum, { name: 'RgbBackgroundScalarFieldEnum', description: undefined })
registerEnumType(SizeScalarFieldEnum, { name: 'SizeScalarFieldEnum', description: undefined })
registerEnumType(SubCategoryScalarFieldEnum, { name: 'SubCategoryScalarFieldEnum', description: undefined })
registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })

@ObjectType()
export class AggregateCategory {
    @Field(() => CategoryCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CategoryCountAggregate>;
    @Field(() => CategoryMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CategoryMinAggregate>;
    @Field(() => CategoryMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CategoryMaxAggregate>;
}

@ArgsType()
export class CategoryAggregateArgs {
    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof CategoryWhereInput>;
    @Field(() => [CategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CategoryOrderByWithRelationInput>;
    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CategoryCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CategoryCountAggregateInput>;
    @Field(() => CategoryMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CategoryMinAggregateInput>;
    @Field(() => CategoryMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CategoryMaxAggregateInput>;
}

@InputType()
export class CategoryCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class CategoryCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    description!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class CategoryCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
}

@ObjectType()
export class CategoryCount {
    @Field(() => Int, {nullable:false})
    subCategories?: number;
}

@InputType()
export class CategoryCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(200)
    @Validator.MinLength(3)
    description?: string;
}

@InputType()
export class CategoryCreateNestedOneWithoutSubCategoriesInput {
    @Field(() => CategoryCreateWithoutSubCategoriesInput, {nullable:true})
    @Type(() => CategoryCreateWithoutSubCategoriesInput)
    create?: InstanceType<typeof CategoryCreateWithoutSubCategoriesInput>;
    @Field(() => CategoryCreateOrConnectWithoutSubCategoriesInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutSubCategoriesInput)
    connectOrCreate?: InstanceType<typeof CategoryCreateOrConnectWithoutSubCategoriesInput>;
    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;
}

@InputType()
export class CategoryCreateOrConnectWithoutSubCategoriesInput {
    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;
    @Field(() => CategoryCreateWithoutSubCategoriesInput, {nullable:false})
    @Type(() => CategoryCreateWithoutSubCategoriesInput)
    create!: InstanceType<typeof CategoryCreateWithoutSubCategoriesInput>;
}

@InputType()
export class CategoryCreateWithoutSubCategoriesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(200)
    @Validator.MinLength(3)
    description?: string;
}

@InputType()
export class CategoryCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(200)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => SubCategoryCreateNestedManyWithoutCategoryInput, {nullable:true})
    subCategories?: InstanceType<typeof SubCategoryCreateNestedManyWithoutCategoryInput>;
}

@ArgsType()
export class CategoryGroupByArgs {
    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof CategoryWhereInput>;
    @Field(() => [CategoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CategoryOrderByWithAggregationInput>;
    @Field(() => [CategoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CategoryScalarFieldEnum>;
    @Field(() => CategoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof CategoryScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CategoryCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CategoryCountAggregateInput>;
    @Field(() => CategoryMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CategoryMinAggregateInput>;
    @Field(() => CategoryMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CategoryMaxAggregateInput>;
}

@ObjectType()
export class CategoryGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(200)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => CategoryCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CategoryCountAggregate>;
    @Field(() => CategoryMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CategoryMinAggregate>;
    @Field(() => CategoryMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CategoryMaxAggregate>;
}

@InputType()
export class CategoryMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
}

@ObjectType()
export class CategoryMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(200)
    @Validator.MinLength(3)
    description?: string;
}

@InputType()
export class CategoryMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
}

@InputType()
export class CategoryMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
}

@ObjectType()
export class CategoryMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(200)
    @Validator.MinLength(3)
    description?: string;
}

@InputType()
export class CategoryMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
}

@InputType()
export class CategoryOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    description?: InstanceType<typeof SortOrderInput>;
    @Field(() => CategoryCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CategoryCountOrderByAggregateInput>;
    @Field(() => CategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CategoryMaxOrderByAggregateInput>;
    @Field(() => CategoryMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CategoryMinOrderByAggregateInput>;
}

@InputType()
export class CategoryOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    description?: InstanceType<typeof SortOrderInput>;
    @Field(() => SubCategoryOrderByRelationAggregateInput, {nullable:true})
    subCategories?: InstanceType<typeof SubCategoryOrderByRelationAggregateInput>;
}

@InputType()
export class CategoryRelationFilter {
    @Field(() => CategoryWhereInput, {nullable:true})
    is?: InstanceType<typeof CategoryWhereInput>;
    @Field(() => CategoryWhereInput, {nullable:true})
    isNot?: InstanceType<typeof CategoryWhereInput>;
}

@InputType()
export class CategoryScalarWhereWithAggregatesInput {
    @Field(() => [CategoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CategoryScalarWhereWithAggregatesInput>;
    @Field(() => [CategoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CategoryScalarWhereWithAggregatesInput>;
    @Field(() => [CategoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CategoryScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class CategoryUncheckedCreateWithoutSubCategoriesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(200)
    @Validator.MinLength(3)
    description?: string;
}

@InputType()
export class CategoryUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(200)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => SubCategoryUncheckedCreateNestedManyWithoutCategoryInput, {nullable:true})
    subCategories?: InstanceType<typeof SubCategoryUncheckedCreateNestedManyWithoutCategoryInput>;
}

@InputType()
export class CategoryUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(200)
    @Validator.MinLength(3)
    description?: string;
}

@InputType()
export class CategoryUncheckedUpdateWithoutSubCategoriesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(200)
    @Validator.MinLength(3)
    description?: string;
}

@InputType()
export class CategoryUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(200)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => SubCategoryUncheckedUpdateManyWithoutCategoryNestedInput, {nullable:true})
    subCategories?: InstanceType<typeof SubCategoryUncheckedUpdateManyWithoutCategoryNestedInput>;
}

@InputType()
export class CategoryUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(200)
    @Validator.MinLength(3)
    description?: string;
}

@InputType()
export class CategoryUpdateOneRequiredWithoutSubCategoriesNestedInput {
    @Field(() => CategoryCreateWithoutSubCategoriesInput, {nullable:true})
    @Type(() => CategoryCreateWithoutSubCategoriesInput)
    create?: InstanceType<typeof CategoryCreateWithoutSubCategoriesInput>;
    @Field(() => CategoryCreateOrConnectWithoutSubCategoriesInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutSubCategoriesInput)
    connectOrCreate?: InstanceType<typeof CategoryCreateOrConnectWithoutSubCategoriesInput>;
    @Field(() => CategoryUpsertWithoutSubCategoriesInput, {nullable:true})
    @Type(() => CategoryUpsertWithoutSubCategoriesInput)
    upsert?: InstanceType<typeof CategoryUpsertWithoutSubCategoriesInput>;
    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;
    @Field(() => CategoryUpdateToOneWithWhereWithoutSubCategoriesInput, {nullable:true})
    @Type(() => CategoryUpdateToOneWithWhereWithoutSubCategoriesInput)
    update?: InstanceType<typeof CategoryUpdateToOneWithWhereWithoutSubCategoriesInput>;
}

@InputType()
export class CategoryUpdateToOneWithWhereWithoutSubCategoriesInput {
    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: InstanceType<typeof CategoryWhereInput>;
    @Field(() => CategoryUpdateWithoutSubCategoriesInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutSubCategoriesInput)
    data!: InstanceType<typeof CategoryUpdateWithoutSubCategoriesInput>;
}

@InputType()
export class CategoryUpdateWithoutSubCategoriesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(200)
    @Validator.MinLength(3)
    description?: string;
}

@InputType()
export class CategoryUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(200)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => SubCategoryUpdateManyWithoutCategoryNestedInput, {nullable:true})
    subCategories?: InstanceType<typeof SubCategoryUpdateManyWithoutCategoryNestedInput>;
}

@InputType()
export class CategoryUpsertWithoutSubCategoriesInput {
    @Field(() => CategoryUpdateWithoutSubCategoriesInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutSubCategoriesInput)
    update!: InstanceType<typeof CategoryUpdateWithoutSubCategoriesInput>;
    @Field(() => CategoryCreateWithoutSubCategoriesInput, {nullable:false})
    @Type(() => CategoryCreateWithoutSubCategoriesInput)
    create!: InstanceType<typeof CategoryCreateWithoutSubCategoriesInput>;
    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: InstanceType<typeof CategoryWhereInput>;
}

@InputType()
export class CategoryWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => [CategoryWhereInput], {nullable:true})
    AND?: Array<CategoryWhereInput>;
    @Field(() => [CategoryWhereInput], {nullable:true})
    OR?: Array<CategoryWhereInput>;
    @Field(() => [CategoryWhereInput], {nullable:true})
    NOT?: Array<CategoryWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    description?: InstanceType<typeof StringFilter>;
    @Field(() => SubCategoryListRelationFilter, {nullable:true})
    subCategories?: InstanceType<typeof SubCategoryListRelationFilter>;
}

@InputType()
export class CategoryWhereInput {
    @Field(() => [CategoryWhereInput], {nullable:true})
    AND?: Array<CategoryWhereInput>;
    @Field(() => [CategoryWhereInput], {nullable:true})
    OR?: Array<CategoryWhereInput>;
    @Field(() => [CategoryWhereInput], {nullable:true})
    NOT?: Array<CategoryWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    description?: InstanceType<typeof StringFilter>;
    @Field(() => SubCategoryListRelationFilter, {nullable:true})
    subCategories?: InstanceType<typeof SubCategoryListRelationFilter>;
}

@ObjectType()
export class Category {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description!: string | null;
    @Field(() => [SubCategory], {nullable:true})
    subCategories?: Array<SubCategory>;
    @Field(() => CategoryCount, {nullable:false})
    _count?: InstanceType<typeof CategoryCount>;
}

@ArgsType()
export class CreateManyCategoryArgs {
    @Field(() => [CategoryCreateManyInput], {nullable:false})
    @Type(() => CategoryCreateManyInput)
    @ValidateNested()
    data!: Array<CategoryCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneCategoryArgs {
    @Field(() => CategoryCreateInput, {nullable:false})
    @Type(() => CategoryCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof CategoryCreateInput>;
}

@ArgsType()
export class DeleteManyCategoryArgs {
    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof CategoryWhereInput>;
}

@ArgsType()
export class DeleteOneCategoryArgs {
    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;
}

@ArgsType()
export class FindFirstCategoryOrThrowArgs {
    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof CategoryWhereInput>;
    @Field(() => [CategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CategoryOrderByWithRelationInput>;
    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CategoryScalarFieldEnum>;
}

@ArgsType()
export class FindFirstCategoryArgs {
    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof CategoryWhereInput>;
    @Field(() => [CategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CategoryOrderByWithRelationInput>;
    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CategoryScalarFieldEnum>;
}

@ArgsType()
export class FindManyCategoryArgs {
    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof CategoryWhereInput>;
    @Field(() => [CategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CategoryOrderByWithRelationInput>;
    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CategoryScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueCategoryOrThrowArgs {
    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;
}

@ArgsType()
export class FindUniqueCategoryArgs {
    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;
}

@ArgsType()
export class UpdateManyCategoryArgs {
    @Field(() => CategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => CategoryUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof CategoryUpdateManyMutationInput>;
    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof CategoryWhereInput>;
}

@ArgsType()
export class UpdateOneCategoryArgs {
    @Field(() => CategoryUpdateInput, {nullable:false})
    @Type(() => CategoryUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof CategoryUpdateInput>;
    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;
}

@ArgsType()
export class UpsertOneCategoryArgs {
    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;
    @Field(() => CategoryCreateInput, {nullable:false})
    @Type(() => CategoryCreateInput)
    create!: InstanceType<typeof CategoryCreateInput>;
    @Field(() => CategoryUpdateInput, {nullable:false})
    @Type(() => CategoryUpdateInput)
    update!: InstanceType<typeof CategoryUpdateInput>;
}

@ObjectType()
export class AggregateCustomization {
    @Field(() => CustomizationCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CustomizationCountAggregate>;
    @Field(() => CustomizationMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CustomizationMinAggregate>;
    @Field(() => CustomizationMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CustomizationMaxAggregate>;
}

@ArgsType()
export class CreateManyCustomizationArgs {
    @Field(() => [CustomizationCreateManyInput], {nullable:false})
    @Type(() => CustomizationCreateManyInput)
    @ValidateNested()
    data!: Array<CustomizationCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneCustomizationArgs {
    @Field(() => CustomizationCreateInput, {nullable:false})
    @Type(() => CustomizationCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof CustomizationCreateInput>;
}

@ArgsType()
export class CustomizationAggregateArgs {
    @Field(() => CustomizationWhereInput, {nullable:true})
    @Type(() => CustomizationWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof CustomizationWhereInput>;
    @Field(() => [CustomizationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CustomizationOrderByWithRelationInput>;
    @Field(() => CustomizationWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CustomizationWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CustomizationCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CustomizationCountAggregateInput>;
    @Field(() => CustomizationMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CustomizationMinAggregateInput>;
    @Field(() => CustomizationMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CustomizationMaxAggregateInput>;
}

@InputType()
export class CustomizationCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    type?: true;
    @Field(() => Boolean, {nullable:true})
    options?: true;
    @Field(() => Boolean, {nullable:true})
    menuItemId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class CustomizationCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    type!: number;
    @Field(() => Int, {nullable:false})
    options!: number;
    @Field(() => Int, {nullable:false})
    menuItemId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class CustomizationCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    options?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    menuItemId?: keyof typeof SortOrder;
}

@InputType()
export class CustomizationCreateManyMenuItemInputEnvelope {
    @Field(() => [CustomizationCreateManyMenuItemInput], {nullable:false})
    @Type(() => CustomizationCreateManyMenuItemInput)
    data!: Array<CustomizationCreateManyMenuItemInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class CustomizationCreateManyMenuItemInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    type!: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsArray()
    options?: Array<string>;
}

@InputType()
export class CustomizationCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    type!: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsArray()
    options?: Array<string>;
    @Field(() => String, {nullable:false})
    menuItemId!: string;
}

@InputType()
export class CustomizationCreateNestedManyWithoutMenuItemInput {
    @Field(() => [CustomizationCreateWithoutMenuItemInput], {nullable:true})
    @Type(() => CustomizationCreateWithoutMenuItemInput)
    create?: Array<CustomizationCreateWithoutMenuItemInput>;
    @Field(() => [CustomizationCreateOrConnectWithoutMenuItemInput], {nullable:true})
    @Type(() => CustomizationCreateOrConnectWithoutMenuItemInput)
    connectOrCreate?: Array<CustomizationCreateOrConnectWithoutMenuItemInput>;
    @Field(() => CustomizationCreateManyMenuItemInputEnvelope, {nullable:true})
    @Type(() => CustomizationCreateManyMenuItemInputEnvelope)
    createMany?: InstanceType<typeof CustomizationCreateManyMenuItemInputEnvelope>;
    @Field(() => [CustomizationWhereUniqueInput], {nullable:true})
    @Type(() => CustomizationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CustomizationWhereUniqueInput, 'id'>>;
}

@InputType()
export class CustomizationCreateOrConnectWithoutMenuItemInput {
    @Field(() => CustomizationWhereUniqueInput, {nullable:false})
    @Type(() => CustomizationWhereUniqueInput)
    where!: Prisma.AtLeast<CustomizationWhereUniqueInput, 'id'>;
    @Field(() => CustomizationCreateWithoutMenuItemInput, {nullable:false})
    @Type(() => CustomizationCreateWithoutMenuItemInput)
    create!: InstanceType<typeof CustomizationCreateWithoutMenuItemInput>;
}

@InputType()
export class CustomizationCreateWithoutMenuItemInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    type!: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsArray()
    options?: Array<string>;
}

@InputType()
export class CustomizationCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    type!: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsArray()
    options?: Array<string>;
    @Field(() => MenuItemCreateNestedOneWithoutCustomizationsInput, {nullable:false})
    menuItem!: InstanceType<typeof MenuItemCreateNestedOneWithoutCustomizationsInput>;
}

@InputType()
export class CustomizationCreateoptionsInput {
    @Field(() => [String], {nullable:false})
    set!: Array<string>;
}

@ArgsType()
export class CustomizationGroupByArgs {
    @Field(() => CustomizationWhereInput, {nullable:true})
    @Type(() => CustomizationWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof CustomizationWhereInput>;
    @Field(() => [CustomizationOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CustomizationOrderByWithAggregationInput>;
    @Field(() => [CustomizationScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CustomizationScalarFieldEnum>;
    @Field(() => CustomizationScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof CustomizationScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CustomizationCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CustomizationCountAggregateInput>;
    @Field(() => CustomizationMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CustomizationMinAggregateInput>;
    @Field(() => CustomizationMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CustomizationMaxAggregateInput>;
}

@ObjectType()
export class CustomizationGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    type!: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsArray()
    options?: Array<string>;
    @Field(() => String, {nullable:false})
    menuItemId!: string;
    @Field(() => CustomizationCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CustomizationCountAggregate>;
    @Field(() => CustomizationMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CustomizationMinAggregate>;
    @Field(() => CustomizationMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CustomizationMaxAggregate>;
}

@InputType()
export class CustomizationListRelationFilter {
    @Field(() => CustomizationWhereInput, {nullable:true})
    every?: InstanceType<typeof CustomizationWhereInput>;
    @Field(() => CustomizationWhereInput, {nullable:true})
    some?: InstanceType<typeof CustomizationWhereInput>;
    @Field(() => CustomizationWhereInput, {nullable:true})
    none?: InstanceType<typeof CustomizationWhereInput>;
}

@InputType()
export class CustomizationMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    type?: true;
    @Field(() => Boolean, {nullable:true})
    menuItemId?: true;
}

@ObjectType()
export class CustomizationMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    type?: string;
    @Field(() => String, {nullable:true})
    menuItemId?: string;
}

@InputType()
export class CustomizationMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    menuItemId?: keyof typeof SortOrder;
}

@InputType()
export class CustomizationMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    type?: true;
    @Field(() => Boolean, {nullable:true})
    menuItemId?: true;
}

@ObjectType()
export class CustomizationMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    type?: string;
    @Field(() => String, {nullable:true})
    menuItemId?: string;
}

@InputType()
export class CustomizationMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    menuItemId?: keyof typeof SortOrder;
}

@InputType()
export class CustomizationOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class CustomizationOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    options?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    menuItemId?: keyof typeof SortOrder;
    @Field(() => CustomizationCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CustomizationCountOrderByAggregateInput>;
    @Field(() => CustomizationMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CustomizationMaxOrderByAggregateInput>;
    @Field(() => CustomizationMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CustomizationMinOrderByAggregateInput>;
}

@InputType()
export class CustomizationOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    options?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    menuItemId?: keyof typeof SortOrder;
    @Field(() => MenuItemOrderByWithRelationInput, {nullable:true})
    menuItem?: InstanceType<typeof MenuItemOrderByWithRelationInput>;
}

@InputType()
export class CustomizationScalarWhereWithAggregatesInput {
    @Field(() => [CustomizationScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CustomizationScalarWhereWithAggregatesInput>;
    @Field(() => [CustomizationScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CustomizationScalarWhereWithAggregatesInput>;
    @Field(() => [CustomizationScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CustomizationScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    type?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringListFilter, {nullable:true})
    options?: InstanceType<typeof StringListFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    menuItemId?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class CustomizationScalarWhereInput {
    @Field(() => [CustomizationScalarWhereInput], {nullable:true})
    AND?: Array<CustomizationScalarWhereInput>;
    @Field(() => [CustomizationScalarWhereInput], {nullable:true})
    OR?: Array<CustomizationScalarWhereInput>;
    @Field(() => [CustomizationScalarWhereInput], {nullable:true})
    NOT?: Array<CustomizationScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    type?: InstanceType<typeof StringFilter>;
    @Field(() => StringListFilter, {nullable:true})
    options?: InstanceType<typeof StringListFilter>;
    @Field(() => StringFilter, {nullable:true})
    menuItemId?: InstanceType<typeof StringFilter>;
}

@InputType()
export class CustomizationUncheckedCreateNestedManyWithoutMenuItemInput {
    @Field(() => [CustomizationCreateWithoutMenuItemInput], {nullable:true})
    @Type(() => CustomizationCreateWithoutMenuItemInput)
    create?: Array<CustomizationCreateWithoutMenuItemInput>;
    @Field(() => [CustomizationCreateOrConnectWithoutMenuItemInput], {nullable:true})
    @Type(() => CustomizationCreateOrConnectWithoutMenuItemInput)
    connectOrCreate?: Array<CustomizationCreateOrConnectWithoutMenuItemInput>;
    @Field(() => CustomizationCreateManyMenuItemInputEnvelope, {nullable:true})
    @Type(() => CustomizationCreateManyMenuItemInputEnvelope)
    createMany?: InstanceType<typeof CustomizationCreateManyMenuItemInputEnvelope>;
    @Field(() => [CustomizationWhereUniqueInput], {nullable:true})
    @Type(() => CustomizationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CustomizationWhereUniqueInput, 'id'>>;
}

@InputType()
export class CustomizationUncheckedCreateWithoutMenuItemInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    type!: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsArray()
    options?: Array<string>;
}

@InputType()
export class CustomizationUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    type!: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsArray()
    options?: Array<string>;
    @Field(() => String, {nullable:false})
    menuItemId!: string;
}

@InputType()
export class CustomizationUncheckedUpdateManyWithoutMenuItemNestedInput {
    @Field(() => [CustomizationCreateWithoutMenuItemInput], {nullable:true})
    @Type(() => CustomizationCreateWithoutMenuItemInput)
    create?: Array<CustomizationCreateWithoutMenuItemInput>;
    @Field(() => [CustomizationCreateOrConnectWithoutMenuItemInput], {nullable:true})
    @Type(() => CustomizationCreateOrConnectWithoutMenuItemInput)
    connectOrCreate?: Array<CustomizationCreateOrConnectWithoutMenuItemInput>;
    @Field(() => [CustomizationUpsertWithWhereUniqueWithoutMenuItemInput], {nullable:true})
    @Type(() => CustomizationUpsertWithWhereUniqueWithoutMenuItemInput)
    upsert?: Array<CustomizationUpsertWithWhereUniqueWithoutMenuItemInput>;
    @Field(() => CustomizationCreateManyMenuItemInputEnvelope, {nullable:true})
    @Type(() => CustomizationCreateManyMenuItemInputEnvelope)
    createMany?: InstanceType<typeof CustomizationCreateManyMenuItemInputEnvelope>;
    @Field(() => [CustomizationWhereUniqueInput], {nullable:true})
    @Type(() => CustomizationWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CustomizationWhereUniqueInput, 'id'>>;
    @Field(() => [CustomizationWhereUniqueInput], {nullable:true})
    @Type(() => CustomizationWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CustomizationWhereUniqueInput, 'id'>>;
    @Field(() => [CustomizationWhereUniqueInput], {nullable:true})
    @Type(() => CustomizationWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CustomizationWhereUniqueInput, 'id'>>;
    @Field(() => [CustomizationWhereUniqueInput], {nullable:true})
    @Type(() => CustomizationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CustomizationWhereUniqueInput, 'id'>>;
    @Field(() => [CustomizationUpdateWithWhereUniqueWithoutMenuItemInput], {nullable:true})
    @Type(() => CustomizationUpdateWithWhereUniqueWithoutMenuItemInput)
    update?: Array<CustomizationUpdateWithWhereUniqueWithoutMenuItemInput>;
    @Field(() => [CustomizationUpdateManyWithWhereWithoutMenuItemInput], {nullable:true})
    @Type(() => CustomizationUpdateManyWithWhereWithoutMenuItemInput)
    updateMany?: Array<CustomizationUpdateManyWithWhereWithoutMenuItemInput>;
    @Field(() => [CustomizationScalarWhereInput], {nullable:true})
    @Type(() => CustomizationScalarWhereInput)
    deleteMany?: Array<CustomizationScalarWhereInput>;
}

@InputType()
export class CustomizationUncheckedUpdateManyWithoutMenuItemInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    type?: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsArray()
    options?: Array<string>;
}

@InputType()
export class CustomizationUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    type?: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsArray()
    options?: Array<string>;
    @Field(() => String, {nullable:true})
    menuItemId?: string;
}

@InputType()
export class CustomizationUncheckedUpdateWithoutMenuItemInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    type?: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsArray()
    options?: Array<string>;
}

@InputType()
export class CustomizationUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    type?: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsArray()
    options?: Array<string>;
    @Field(() => String, {nullable:true})
    menuItemId?: string;
}

@InputType()
export class CustomizationUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    type?: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsArray()
    options?: Array<string>;
}

@InputType()
export class CustomizationUpdateManyWithWhereWithoutMenuItemInput {
    @Field(() => CustomizationScalarWhereInput, {nullable:false})
    @Type(() => CustomizationScalarWhereInput)
    where!: InstanceType<typeof CustomizationScalarWhereInput>;
    @Field(() => CustomizationUpdateManyMutationInput, {nullable:false})
    @Type(() => CustomizationUpdateManyMutationInput)
    data!: InstanceType<typeof CustomizationUpdateManyMutationInput>;
}

@InputType()
export class CustomizationUpdateManyWithoutMenuItemNestedInput {
    @Field(() => [CustomizationCreateWithoutMenuItemInput], {nullable:true})
    @Type(() => CustomizationCreateWithoutMenuItemInput)
    create?: Array<CustomizationCreateWithoutMenuItemInput>;
    @Field(() => [CustomizationCreateOrConnectWithoutMenuItemInput], {nullable:true})
    @Type(() => CustomizationCreateOrConnectWithoutMenuItemInput)
    connectOrCreate?: Array<CustomizationCreateOrConnectWithoutMenuItemInput>;
    @Field(() => [CustomizationUpsertWithWhereUniqueWithoutMenuItemInput], {nullable:true})
    @Type(() => CustomizationUpsertWithWhereUniqueWithoutMenuItemInput)
    upsert?: Array<CustomizationUpsertWithWhereUniqueWithoutMenuItemInput>;
    @Field(() => CustomizationCreateManyMenuItemInputEnvelope, {nullable:true})
    @Type(() => CustomizationCreateManyMenuItemInputEnvelope)
    createMany?: InstanceType<typeof CustomizationCreateManyMenuItemInputEnvelope>;
    @Field(() => [CustomizationWhereUniqueInput], {nullable:true})
    @Type(() => CustomizationWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CustomizationWhereUniqueInput, 'id'>>;
    @Field(() => [CustomizationWhereUniqueInput], {nullable:true})
    @Type(() => CustomizationWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CustomizationWhereUniqueInput, 'id'>>;
    @Field(() => [CustomizationWhereUniqueInput], {nullable:true})
    @Type(() => CustomizationWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CustomizationWhereUniqueInput, 'id'>>;
    @Field(() => [CustomizationWhereUniqueInput], {nullable:true})
    @Type(() => CustomizationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CustomizationWhereUniqueInput, 'id'>>;
    @Field(() => [CustomizationUpdateWithWhereUniqueWithoutMenuItemInput], {nullable:true})
    @Type(() => CustomizationUpdateWithWhereUniqueWithoutMenuItemInput)
    update?: Array<CustomizationUpdateWithWhereUniqueWithoutMenuItemInput>;
    @Field(() => [CustomizationUpdateManyWithWhereWithoutMenuItemInput], {nullable:true})
    @Type(() => CustomizationUpdateManyWithWhereWithoutMenuItemInput)
    updateMany?: Array<CustomizationUpdateManyWithWhereWithoutMenuItemInput>;
    @Field(() => [CustomizationScalarWhereInput], {nullable:true})
    @Type(() => CustomizationScalarWhereInput)
    deleteMany?: Array<CustomizationScalarWhereInput>;
}

@InputType()
export class CustomizationUpdateWithWhereUniqueWithoutMenuItemInput {
    @Field(() => CustomizationWhereUniqueInput, {nullable:false})
    @Type(() => CustomizationWhereUniqueInput)
    where!: Prisma.AtLeast<CustomizationWhereUniqueInput, 'id'>;
    @Field(() => CustomizationUpdateWithoutMenuItemInput, {nullable:false})
    @Type(() => CustomizationUpdateWithoutMenuItemInput)
    data!: InstanceType<typeof CustomizationUpdateWithoutMenuItemInput>;
}

@InputType()
export class CustomizationUpdateWithoutMenuItemInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    type?: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsArray()
    options?: Array<string>;
}

@InputType()
export class CustomizationUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    type?: string;
    @Field(() => [String], {nullable:true})
    @Validator.IsArray()
    options?: Array<string>;
    @Field(() => MenuItemUpdateOneRequiredWithoutCustomizationsNestedInput, {nullable:true})
    menuItem?: InstanceType<typeof MenuItemUpdateOneRequiredWithoutCustomizationsNestedInput>;
}

@InputType()
export class CustomizationUpdateoptionsInput {
    @Field(() => [String], {nullable:true})
    set?: Array<string>;
    @Field(() => [String], {nullable:true})
    push?: Array<string>;
}

@InputType()
export class CustomizationUpsertWithWhereUniqueWithoutMenuItemInput {
    @Field(() => CustomizationWhereUniqueInput, {nullable:false})
    @Type(() => CustomizationWhereUniqueInput)
    where!: Prisma.AtLeast<CustomizationWhereUniqueInput, 'id'>;
    @Field(() => CustomizationUpdateWithoutMenuItemInput, {nullable:false})
    @Type(() => CustomizationUpdateWithoutMenuItemInput)
    update!: InstanceType<typeof CustomizationUpdateWithoutMenuItemInput>;
    @Field(() => CustomizationCreateWithoutMenuItemInput, {nullable:false})
    @Type(() => CustomizationCreateWithoutMenuItemInput)
    create!: InstanceType<typeof CustomizationCreateWithoutMenuItemInput>;
}

@InputType()
export class CustomizationWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [CustomizationWhereInput], {nullable:true})
    AND?: Array<CustomizationWhereInput>;
    @Field(() => [CustomizationWhereInput], {nullable:true})
    OR?: Array<CustomizationWhereInput>;
    @Field(() => [CustomizationWhereInput], {nullable:true})
    NOT?: Array<CustomizationWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    type?: InstanceType<typeof StringFilter>;
    @Field(() => StringListFilter, {nullable:true})
    options?: InstanceType<typeof StringListFilter>;
    @Field(() => StringFilter, {nullable:true})
    menuItemId?: InstanceType<typeof StringFilter>;
    @Field(() => MenuItemRelationFilter, {nullable:true})
    menuItem?: InstanceType<typeof MenuItemRelationFilter>;
}

@InputType()
export class CustomizationWhereInput {
    @Field(() => [CustomizationWhereInput], {nullable:true})
    AND?: Array<CustomizationWhereInput>;
    @Field(() => [CustomizationWhereInput], {nullable:true})
    OR?: Array<CustomizationWhereInput>;
    @Field(() => [CustomizationWhereInput], {nullable:true})
    NOT?: Array<CustomizationWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    type?: InstanceType<typeof StringFilter>;
    @Field(() => StringListFilter, {nullable:true})
    options?: InstanceType<typeof StringListFilter>;
    @Field(() => StringFilter, {nullable:true})
    menuItemId?: InstanceType<typeof StringFilter>;
    @Field(() => MenuItemRelationFilter, {nullable:true})
    menuItem?: InstanceType<typeof MenuItemRelationFilter>;
}

@ObjectType()
export class Customization {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    type!: string;
    @Field(() => [String], {nullable:true})
    options!: Array<string>;
    @Field(() => String, {nullable:false})
    menuItemId!: string;
    @Field(() => MenuItem, {nullable:false})
    menuItem?: InstanceType<typeof MenuItem>;
}

@ArgsType()
export class DeleteManyCustomizationArgs {
    @Field(() => CustomizationWhereInput, {nullable:true})
    @Type(() => CustomizationWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof CustomizationWhereInput>;
}

@ArgsType()
export class DeleteOneCustomizationArgs {
    @Field(() => CustomizationWhereUniqueInput, {nullable:false})
    @Type(() => CustomizationWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<CustomizationWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstCustomizationOrThrowArgs {
    @Field(() => CustomizationWhereInput, {nullable:true})
    @Type(() => CustomizationWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof CustomizationWhereInput>;
    @Field(() => [CustomizationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CustomizationOrderByWithRelationInput>;
    @Field(() => CustomizationWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CustomizationWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CustomizationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CustomizationScalarFieldEnum>;
}

@ArgsType()
export class FindFirstCustomizationArgs {
    @Field(() => CustomizationWhereInput, {nullable:true})
    @Type(() => CustomizationWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof CustomizationWhereInput>;
    @Field(() => [CustomizationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CustomizationOrderByWithRelationInput>;
    @Field(() => CustomizationWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CustomizationWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CustomizationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CustomizationScalarFieldEnum>;
}

@ArgsType()
export class FindManyCustomizationArgs {
    @Field(() => CustomizationWhereInput, {nullable:true})
    @Type(() => CustomizationWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof CustomizationWhereInput>;
    @Field(() => [CustomizationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CustomizationOrderByWithRelationInput>;
    @Field(() => CustomizationWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CustomizationWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CustomizationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CustomizationScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueCustomizationOrThrowArgs {
    @Field(() => CustomizationWhereUniqueInput, {nullable:false})
    @Type(() => CustomizationWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<CustomizationWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueCustomizationArgs {
    @Field(() => CustomizationWhereUniqueInput, {nullable:false})
    @Type(() => CustomizationWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<CustomizationWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpdateManyCustomizationArgs {
    @Field(() => CustomizationUpdateManyMutationInput, {nullable:false})
    @Type(() => CustomizationUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof CustomizationUpdateManyMutationInput>;
    @Field(() => CustomizationWhereInput, {nullable:true})
    @Type(() => CustomizationWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof CustomizationWhereInput>;
}

@ArgsType()
export class UpdateOneCustomizationArgs {
    @Field(() => CustomizationUpdateInput, {nullable:false})
    @Type(() => CustomizationUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof CustomizationUpdateInput>;
    @Field(() => CustomizationWhereUniqueInput, {nullable:false})
    @Type(() => CustomizationWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<CustomizationWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneCustomizationArgs {
    @Field(() => CustomizationWhereUniqueInput, {nullable:false})
    @Type(() => CustomizationWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<CustomizationWhereUniqueInput, 'id'>;
    @Field(() => CustomizationCreateInput, {nullable:false})
    @Type(() => CustomizationCreateInput)
    create!: InstanceType<typeof CustomizationCreateInput>;
    @Field(() => CustomizationUpdateInput, {nullable:false})
    @Type(() => CustomizationUpdateInput)
    update!: InstanceType<typeof CustomizationUpdateInput>;
}

@ObjectType()
export class AggregateHomeBlock {
    @Field(() => HomeBlockCountAggregate, {nullable:true})
    _count?: InstanceType<typeof HomeBlockCountAggregate>;
    @Field(() => HomeBlockMinAggregate, {nullable:true})
    _min?: InstanceType<typeof HomeBlockMinAggregate>;
    @Field(() => HomeBlockMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof HomeBlockMaxAggregate>;
}

@ArgsType()
export class CreateManyHomeBlockArgs {
    @Field(() => [HomeBlockCreateManyInput], {nullable:false})
    @Type(() => HomeBlockCreateManyInput)
    @ValidateNested()
    data!: Array<HomeBlockCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneHomeBlockArgs {
    @Field(() => HomeBlockCreateInput, {nullable:false})
    @Type(() => HomeBlockCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof HomeBlockCreateInput>;
}

@ArgsType()
export class DeleteManyHomeBlockArgs {
    @Field(() => HomeBlockWhereInput, {nullable:true})
    @Type(() => HomeBlockWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof HomeBlockWhereInput>;
}

@ArgsType()
export class DeleteOneHomeBlockArgs {
    @Field(() => HomeBlockWhereUniqueInput, {nullable:false})
    @Type(() => HomeBlockWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<HomeBlockWhereUniqueInput, 'id' | 'rgbBackgroundId'>;
}

@ArgsType()
export class FindFirstHomeBlockOrThrowArgs {
    @Field(() => HomeBlockWhereInput, {nullable:true})
    @Type(() => HomeBlockWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof HomeBlockWhereInput>;
    @Field(() => [HomeBlockOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HomeBlockOrderByWithRelationInput>;
    @Field(() => HomeBlockWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<HomeBlockWhereUniqueInput, 'id' | 'rgbBackgroundId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [HomeBlockScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof HomeBlockScalarFieldEnum>;
}

@ArgsType()
export class FindFirstHomeBlockArgs {
    @Field(() => HomeBlockWhereInput, {nullable:true})
    @Type(() => HomeBlockWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof HomeBlockWhereInput>;
    @Field(() => [HomeBlockOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HomeBlockOrderByWithRelationInput>;
    @Field(() => HomeBlockWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<HomeBlockWhereUniqueInput, 'id' | 'rgbBackgroundId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [HomeBlockScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof HomeBlockScalarFieldEnum>;
}

@ArgsType()
export class FindManyHomeBlockArgs {
    @Field(() => HomeBlockWhereInput, {nullable:true})
    @Type(() => HomeBlockWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof HomeBlockWhereInput>;
    @Field(() => [HomeBlockOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HomeBlockOrderByWithRelationInput>;
    @Field(() => HomeBlockWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<HomeBlockWhereUniqueInput, 'id' | 'rgbBackgroundId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [HomeBlockScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof HomeBlockScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueHomeBlockOrThrowArgs {
    @Field(() => HomeBlockWhereUniqueInput, {nullable:false})
    @Type(() => HomeBlockWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<HomeBlockWhereUniqueInput, 'id' | 'rgbBackgroundId'>;
}

@ArgsType()
export class FindUniqueHomeBlockArgs {
    @Field(() => HomeBlockWhereUniqueInput, {nullable:false})
    @Type(() => HomeBlockWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<HomeBlockWhereUniqueInput, 'id' | 'rgbBackgroundId'>;
}

@ArgsType()
export class HomeBlockAggregateArgs {
    @Field(() => HomeBlockWhereInput, {nullable:true})
    @Type(() => HomeBlockWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof HomeBlockWhereInput>;
    @Field(() => [HomeBlockOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HomeBlockOrderByWithRelationInput>;
    @Field(() => HomeBlockWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<HomeBlockWhereUniqueInput, 'id' | 'rgbBackgroundId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => HomeBlockCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof HomeBlockCountAggregateInput>;
    @Field(() => HomeBlockMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof HomeBlockMinAggregateInput>;
    @Field(() => HomeBlockMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof HomeBlockMaxAggregateInput>;
}

@InputType()
export class HomeBlockCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    button?: true;
    @Field(() => Boolean, {nullable:true})
    imagePath?: true;
    @Field(() => Boolean, {nullable:true})
    navigationPath?: true;
    @Field(() => Boolean, {nullable:true})
    rgbBackgroundId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class HomeBlockCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    title!: number;
    @Field(() => Int, {nullable:false})
    description!: number;
    @Field(() => Int, {nullable:false})
    button!: number;
    @Field(() => Int, {nullable:false})
    imagePath!: number;
    @Field(() => Int, {nullable:false})
    navigationPath!: number;
    @Field(() => Int, {nullable:false})
    rgbBackgroundId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class HomeBlockCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    button?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    imagePath?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    navigationPath?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rgbBackgroundId?: keyof typeof SortOrder;
}

@InputType()
export class HomeBlockCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(250)
    @Validator.MinLength(3)
    description!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(20)
    @Validator.MinLength(3)
    button!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    navigationPath!: string;
    @Field(() => String, {nullable:false})
    rgbBackgroundId!: string;
}

@InputType()
export class HomeBlockCreateNestedOneWithoutRgbBackgroundInput {
    @Field(() => HomeBlockCreateWithoutRgbBackgroundInput, {nullable:true})
    @Type(() => HomeBlockCreateWithoutRgbBackgroundInput)
    create?: InstanceType<typeof HomeBlockCreateWithoutRgbBackgroundInput>;
    @Field(() => HomeBlockCreateOrConnectWithoutRgbBackgroundInput, {nullable:true})
    @Type(() => HomeBlockCreateOrConnectWithoutRgbBackgroundInput)
    connectOrCreate?: InstanceType<typeof HomeBlockCreateOrConnectWithoutRgbBackgroundInput>;
    @Field(() => HomeBlockWhereUniqueInput, {nullable:true})
    @Type(() => HomeBlockWhereUniqueInput)
    connect?: Prisma.AtLeast<HomeBlockWhereUniqueInput, 'id' | 'rgbBackgroundId'>;
}

@InputType()
export class HomeBlockCreateOrConnectWithoutRgbBackgroundInput {
    @Field(() => HomeBlockWhereUniqueInput, {nullable:false})
    @Type(() => HomeBlockWhereUniqueInput)
    where!: Prisma.AtLeast<HomeBlockWhereUniqueInput, 'id' | 'rgbBackgroundId'>;
    @Field(() => HomeBlockCreateWithoutRgbBackgroundInput, {nullable:false})
    @Type(() => HomeBlockCreateWithoutRgbBackgroundInput)
    create!: InstanceType<typeof HomeBlockCreateWithoutRgbBackgroundInput>;
}

@InputType()
export class HomeBlockCreateWithoutRgbBackgroundInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(250)
    @Validator.MinLength(3)
    description!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(20)
    @Validator.MinLength(3)
    button!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    navigationPath!: string;
}

@InputType()
export class HomeBlockCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(250)
    @Validator.MinLength(3)
    description!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(20)
    @Validator.MinLength(3)
    button!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    navigationPath!: string;
    @Field(() => RgbBackgroundCreateNestedOneWithoutHomeBlockInput, {nullable:false})
    rgbBackground!: InstanceType<typeof RgbBackgroundCreateNestedOneWithoutHomeBlockInput>;
}

@ArgsType()
export class HomeBlockGroupByArgs {
    @Field(() => HomeBlockWhereInput, {nullable:true})
    @Type(() => HomeBlockWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof HomeBlockWhereInput>;
    @Field(() => [HomeBlockOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<HomeBlockOrderByWithAggregationInput>;
    @Field(() => [HomeBlockScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof HomeBlockScalarFieldEnum>;
    @Field(() => HomeBlockScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof HomeBlockScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => HomeBlockCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof HomeBlockCountAggregateInput>;
    @Field(() => HomeBlockMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof HomeBlockMinAggregateInput>;
    @Field(() => HomeBlockMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof HomeBlockMaxAggregateInput>;
}

@ObjectType()
export class HomeBlockGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(250)
    @Validator.MinLength(3)
    description!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(20)
    @Validator.MinLength(3)
    button!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    navigationPath!: string;
    @Field(() => String, {nullable:false})
    rgbBackgroundId!: string;
    @Field(() => HomeBlockCountAggregate, {nullable:true})
    _count?: InstanceType<typeof HomeBlockCountAggregate>;
    @Field(() => HomeBlockMinAggregate, {nullable:true})
    _min?: InstanceType<typeof HomeBlockMinAggregate>;
    @Field(() => HomeBlockMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof HomeBlockMaxAggregate>;
}

@InputType()
export class HomeBlockMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    button?: true;
    @Field(() => Boolean, {nullable:true})
    imagePath?: true;
    @Field(() => Boolean, {nullable:true})
    navigationPath?: true;
    @Field(() => Boolean, {nullable:true})
    rgbBackgroundId?: true;
}

@ObjectType()
export class HomeBlockMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(250)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(20)
    @Validator.MinLength(3)
    button?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    navigationPath?: string;
    @Field(() => String, {nullable:true})
    rgbBackgroundId?: string;
}

@InputType()
export class HomeBlockMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    button?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    imagePath?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    navigationPath?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rgbBackgroundId?: keyof typeof SortOrder;
}

@InputType()
export class HomeBlockMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    button?: true;
    @Field(() => Boolean, {nullable:true})
    imagePath?: true;
    @Field(() => Boolean, {nullable:true})
    navigationPath?: true;
    @Field(() => Boolean, {nullable:true})
    rgbBackgroundId?: true;
}

@ObjectType()
export class HomeBlockMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(250)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(20)
    @Validator.MinLength(3)
    button?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    navigationPath?: string;
    @Field(() => String, {nullable:true})
    rgbBackgroundId?: string;
}

@InputType()
export class HomeBlockMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    button?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    imagePath?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    navigationPath?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rgbBackgroundId?: keyof typeof SortOrder;
}

@InputType()
export class HomeBlockOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    button?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    imagePath?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    navigationPath?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rgbBackgroundId?: keyof typeof SortOrder;
    @Field(() => HomeBlockCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof HomeBlockCountOrderByAggregateInput>;
    @Field(() => HomeBlockMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof HomeBlockMaxOrderByAggregateInput>;
    @Field(() => HomeBlockMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof HomeBlockMinOrderByAggregateInput>;
}

@InputType()
export class HomeBlockOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    button?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    imagePath?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    navigationPath?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    rgbBackgroundId?: keyof typeof SortOrder;
    @Field(() => RgbBackgroundOrderByWithRelationInput, {nullable:true})
    rgbBackground?: InstanceType<typeof RgbBackgroundOrderByWithRelationInput>;
}

@InputType()
export class HomeBlockRelationFilter {
    @Field(() => HomeBlockWhereInput, {nullable:true})
    is?: InstanceType<typeof HomeBlockWhereInput>;
    @Field(() => HomeBlockWhereInput, {nullable:true})
    isNot?: InstanceType<typeof HomeBlockWhereInput>;
}

@InputType()
export class HomeBlockScalarWhereWithAggregatesInput {
    @Field(() => [HomeBlockScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<HomeBlockScalarWhereWithAggregatesInput>;
    @Field(() => [HomeBlockScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<HomeBlockScalarWhereWithAggregatesInput>;
    @Field(() => [HomeBlockScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<HomeBlockScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    button?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    imagePath?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    navigationPath?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    rgbBackgroundId?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class HomeBlockUncheckedCreateNestedOneWithoutRgbBackgroundInput {
    @Field(() => HomeBlockCreateWithoutRgbBackgroundInput, {nullable:true})
    @Type(() => HomeBlockCreateWithoutRgbBackgroundInput)
    create?: InstanceType<typeof HomeBlockCreateWithoutRgbBackgroundInput>;
    @Field(() => HomeBlockCreateOrConnectWithoutRgbBackgroundInput, {nullable:true})
    @Type(() => HomeBlockCreateOrConnectWithoutRgbBackgroundInput)
    connectOrCreate?: InstanceType<typeof HomeBlockCreateOrConnectWithoutRgbBackgroundInput>;
    @Field(() => HomeBlockWhereUniqueInput, {nullable:true})
    @Type(() => HomeBlockWhereUniqueInput)
    connect?: Prisma.AtLeast<HomeBlockWhereUniqueInput, 'id' | 'rgbBackgroundId'>;
}

@InputType()
export class HomeBlockUncheckedCreateWithoutRgbBackgroundInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(250)
    @Validator.MinLength(3)
    description!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(20)
    @Validator.MinLength(3)
    button!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    navigationPath!: string;
}

@InputType()
export class HomeBlockUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(250)
    @Validator.MinLength(3)
    description!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(20)
    @Validator.MinLength(3)
    button!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    navigationPath!: string;
    @Field(() => String, {nullable:false})
    rgbBackgroundId!: string;
}

@InputType()
export class HomeBlockUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(250)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(20)
    @Validator.MinLength(3)
    button?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    navigationPath?: string;
    @Field(() => String, {nullable:true})
    rgbBackgroundId?: string;
}

@InputType()
export class HomeBlockUncheckedUpdateOneWithoutRgbBackgroundNestedInput {
    @Field(() => HomeBlockCreateWithoutRgbBackgroundInput, {nullable:true})
    @Type(() => HomeBlockCreateWithoutRgbBackgroundInput)
    create?: InstanceType<typeof HomeBlockCreateWithoutRgbBackgroundInput>;
    @Field(() => HomeBlockCreateOrConnectWithoutRgbBackgroundInput, {nullable:true})
    @Type(() => HomeBlockCreateOrConnectWithoutRgbBackgroundInput)
    connectOrCreate?: InstanceType<typeof HomeBlockCreateOrConnectWithoutRgbBackgroundInput>;
    @Field(() => HomeBlockUpsertWithoutRgbBackgroundInput, {nullable:true})
    @Type(() => HomeBlockUpsertWithoutRgbBackgroundInput)
    upsert?: InstanceType<typeof HomeBlockUpsertWithoutRgbBackgroundInput>;
    @Field(() => HomeBlockWhereInput, {nullable:true})
    @Type(() => HomeBlockWhereInput)
    disconnect?: InstanceType<typeof HomeBlockWhereInput>;
    @Field(() => HomeBlockWhereInput, {nullable:true})
    @Type(() => HomeBlockWhereInput)
    delete?: InstanceType<typeof HomeBlockWhereInput>;
    @Field(() => HomeBlockWhereUniqueInput, {nullable:true})
    @Type(() => HomeBlockWhereUniqueInput)
    connect?: Prisma.AtLeast<HomeBlockWhereUniqueInput, 'id' | 'rgbBackgroundId'>;
    @Field(() => HomeBlockUpdateToOneWithWhereWithoutRgbBackgroundInput, {nullable:true})
    @Type(() => HomeBlockUpdateToOneWithWhereWithoutRgbBackgroundInput)
    update?: InstanceType<typeof HomeBlockUpdateToOneWithWhereWithoutRgbBackgroundInput>;
}

@InputType()
export class HomeBlockUncheckedUpdateWithoutRgbBackgroundInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(250)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(20)
    @Validator.MinLength(3)
    button?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    navigationPath?: string;
}

@InputType()
export class HomeBlockUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(250)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(20)
    @Validator.MinLength(3)
    button?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    navigationPath?: string;
    @Field(() => String, {nullable:true})
    rgbBackgroundId?: string;
}

@InputType()
export class HomeBlockUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(250)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(20)
    @Validator.MinLength(3)
    button?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    navigationPath?: string;
}

@InputType()
export class HomeBlockUpdateOneWithoutRgbBackgroundNestedInput {
    @Field(() => HomeBlockCreateWithoutRgbBackgroundInput, {nullable:true})
    @Type(() => HomeBlockCreateWithoutRgbBackgroundInput)
    create?: InstanceType<typeof HomeBlockCreateWithoutRgbBackgroundInput>;
    @Field(() => HomeBlockCreateOrConnectWithoutRgbBackgroundInput, {nullable:true})
    @Type(() => HomeBlockCreateOrConnectWithoutRgbBackgroundInput)
    connectOrCreate?: InstanceType<typeof HomeBlockCreateOrConnectWithoutRgbBackgroundInput>;
    @Field(() => HomeBlockUpsertWithoutRgbBackgroundInput, {nullable:true})
    @Type(() => HomeBlockUpsertWithoutRgbBackgroundInput)
    upsert?: InstanceType<typeof HomeBlockUpsertWithoutRgbBackgroundInput>;
    @Field(() => HomeBlockWhereInput, {nullable:true})
    @Type(() => HomeBlockWhereInput)
    disconnect?: InstanceType<typeof HomeBlockWhereInput>;
    @Field(() => HomeBlockWhereInput, {nullable:true})
    @Type(() => HomeBlockWhereInput)
    delete?: InstanceType<typeof HomeBlockWhereInput>;
    @Field(() => HomeBlockWhereUniqueInput, {nullable:true})
    @Type(() => HomeBlockWhereUniqueInput)
    connect?: Prisma.AtLeast<HomeBlockWhereUniqueInput, 'id' | 'rgbBackgroundId'>;
    @Field(() => HomeBlockUpdateToOneWithWhereWithoutRgbBackgroundInput, {nullable:true})
    @Type(() => HomeBlockUpdateToOneWithWhereWithoutRgbBackgroundInput)
    update?: InstanceType<typeof HomeBlockUpdateToOneWithWhereWithoutRgbBackgroundInput>;
}

@InputType()
export class HomeBlockUpdateToOneWithWhereWithoutRgbBackgroundInput {
    @Field(() => HomeBlockWhereInput, {nullable:true})
    @Type(() => HomeBlockWhereInput)
    where?: InstanceType<typeof HomeBlockWhereInput>;
    @Field(() => HomeBlockUpdateWithoutRgbBackgroundInput, {nullable:false})
    @Type(() => HomeBlockUpdateWithoutRgbBackgroundInput)
    data!: InstanceType<typeof HomeBlockUpdateWithoutRgbBackgroundInput>;
}

@InputType()
export class HomeBlockUpdateWithoutRgbBackgroundInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(250)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(20)
    @Validator.MinLength(3)
    button?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    navigationPath?: string;
}

@InputType()
export class HomeBlockUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    title?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(250)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(20)
    @Validator.MinLength(3)
    button?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    imagePath?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    navigationPath?: string;
    @Field(() => RgbBackgroundUpdateOneRequiredWithoutHomeBlockNestedInput, {nullable:true})
    rgbBackground?: InstanceType<typeof RgbBackgroundUpdateOneRequiredWithoutHomeBlockNestedInput>;
}

@InputType()
export class HomeBlockUpsertWithoutRgbBackgroundInput {
    @Field(() => HomeBlockUpdateWithoutRgbBackgroundInput, {nullable:false})
    @Type(() => HomeBlockUpdateWithoutRgbBackgroundInput)
    update!: InstanceType<typeof HomeBlockUpdateWithoutRgbBackgroundInput>;
    @Field(() => HomeBlockCreateWithoutRgbBackgroundInput, {nullable:false})
    @Type(() => HomeBlockCreateWithoutRgbBackgroundInput)
    create!: InstanceType<typeof HomeBlockCreateWithoutRgbBackgroundInput>;
    @Field(() => HomeBlockWhereInput, {nullable:true})
    @Type(() => HomeBlockWhereInput)
    where?: InstanceType<typeof HomeBlockWhereInput>;
}

@InputType()
export class HomeBlockWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    rgbBackgroundId?: string;
    @Field(() => [HomeBlockWhereInput], {nullable:true})
    AND?: Array<HomeBlockWhereInput>;
    @Field(() => [HomeBlockWhereInput], {nullable:true})
    OR?: Array<HomeBlockWhereInput>;
    @Field(() => [HomeBlockWhereInput], {nullable:true})
    NOT?: Array<HomeBlockWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    description?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    button?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    imagePath?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    navigationPath?: InstanceType<typeof StringFilter>;
    @Field(() => RgbBackgroundRelationFilter, {nullable:true})
    rgbBackground?: InstanceType<typeof RgbBackgroundRelationFilter>;
}

@InputType()
export class HomeBlockWhereInput {
    @Field(() => [HomeBlockWhereInput], {nullable:true})
    AND?: Array<HomeBlockWhereInput>;
    @Field(() => [HomeBlockWhereInput], {nullable:true})
    OR?: Array<HomeBlockWhereInput>;
    @Field(() => [HomeBlockWhereInput], {nullable:true})
    NOT?: Array<HomeBlockWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    description?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    button?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    imagePath?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    navigationPath?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    rgbBackgroundId?: InstanceType<typeof StringFilter>;
    @Field(() => RgbBackgroundRelationFilter, {nullable:true})
    rgbBackground?: InstanceType<typeof RgbBackgroundRelationFilter>;
}

@ObjectType()
export class HomeBlock {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => String, {nullable:false})
    button!: string;
    @Field(() => String, {nullable:false})
    imagePath!: string;
    @Field(() => String, {nullable:false})
    navigationPath!: string;
    @Field(() => String, {nullable:false})
    rgbBackgroundId!: string;
    @Field(() => RgbBackground, {nullable:false})
    rgbBackground?: InstanceType<typeof RgbBackground>;
}

@ArgsType()
export class UpdateManyHomeBlockArgs {
    @Field(() => HomeBlockUpdateManyMutationInput, {nullable:false})
    @Type(() => HomeBlockUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof HomeBlockUpdateManyMutationInput>;
    @Field(() => HomeBlockWhereInput, {nullable:true})
    @Type(() => HomeBlockWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof HomeBlockWhereInput>;
}

@ArgsType()
export class UpdateOneHomeBlockArgs {
    @Field(() => HomeBlockUpdateInput, {nullable:false})
    @Type(() => HomeBlockUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof HomeBlockUpdateInput>;
    @Field(() => HomeBlockWhereUniqueInput, {nullable:false})
    @Type(() => HomeBlockWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<HomeBlockWhereUniqueInput, 'id' | 'rgbBackgroundId'>;
}

@ArgsType()
export class UpsertOneHomeBlockArgs {
    @Field(() => HomeBlockWhereUniqueInput, {nullable:false})
    @Type(() => HomeBlockWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<HomeBlockWhereUniqueInput, 'id' | 'rgbBackgroundId'>;
    @Field(() => HomeBlockCreateInput, {nullable:false})
    @Type(() => HomeBlockCreateInput)
    create!: InstanceType<typeof HomeBlockCreateInput>;
    @Field(() => HomeBlockUpdateInput, {nullable:false})
    @Type(() => HomeBlockUpdateInput)
    update!: InstanceType<typeof HomeBlockUpdateInput>;
}

@ObjectType()
export class AggregateMenuItem {
    @Field(() => MenuItemCountAggregate, {nullable:true})
    _count?: InstanceType<typeof MenuItemCountAggregate>;
    @Field(() => MenuItemAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof MenuItemAvgAggregate>;
    @Field(() => MenuItemSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof MenuItemSumAggregate>;
    @Field(() => MenuItemMinAggregate, {nullable:true})
    _min?: InstanceType<typeof MenuItemMinAggregate>;
    @Field(() => MenuItemMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof MenuItemMaxAggregate>;
}

@ArgsType()
export class CreateManyMenuItemArgs {
    @Field(() => [MenuItemCreateManyInput], {nullable:false})
    @Type(() => MenuItemCreateManyInput)
    @ValidateNested()
    data!: Array<MenuItemCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneMenuItemArgs {
    @Field(() => MenuItemCreateInput, {nullable:false})
    @Type(() => MenuItemCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof MenuItemCreateInput>;
}

@ArgsType()
export class DeleteManyMenuItemArgs {
    @Field(() => MenuItemWhereInput, {nullable:true})
    @Type(() => MenuItemWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof MenuItemWhereInput>;
}

@ArgsType()
export class DeleteOneMenuItemArgs {
    @Field(() => MenuItemWhereUniqueInput, {nullable:false})
    @Type(() => MenuItemWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<MenuItemWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstMenuItemOrThrowArgs {
    @Field(() => MenuItemWhereInput, {nullable:true})
    @Type(() => MenuItemWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof MenuItemWhereInput>;
    @Field(() => [MenuItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MenuItemOrderByWithRelationInput>;
    @Field(() => MenuItemWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MenuItemWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [MenuItemScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MenuItemScalarFieldEnum>;
}

@ArgsType()
export class FindFirstMenuItemArgs {
    @Field(() => MenuItemWhereInput, {nullable:true})
    @Type(() => MenuItemWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof MenuItemWhereInput>;
    @Field(() => [MenuItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MenuItemOrderByWithRelationInput>;
    @Field(() => MenuItemWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MenuItemWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [MenuItemScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MenuItemScalarFieldEnum>;
}

@ArgsType()
export class FindManyMenuItemArgs {
    @Field(() => MenuItemWhereInput, {nullable:true})
    @Type(() => MenuItemWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof MenuItemWhereInput>;
    @Field(() => [MenuItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MenuItemOrderByWithRelationInput>;
    @Field(() => MenuItemWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MenuItemWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [MenuItemScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MenuItemScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueMenuItemOrThrowArgs {
    @Field(() => MenuItemWhereUniqueInput, {nullable:false})
    @Type(() => MenuItemWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<MenuItemWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueMenuItemArgs {
    @Field(() => MenuItemWhereUniqueInput, {nullable:false})
    @Type(() => MenuItemWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<MenuItemWhereUniqueInput, 'id'>;
}

@ArgsType()
export class MenuItemAggregateArgs {
    @Field(() => MenuItemWhereInput, {nullable:true})
    @Type(() => MenuItemWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof MenuItemWhereInput>;
    @Field(() => [MenuItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MenuItemOrderByWithRelationInput>;
    @Field(() => MenuItemWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MenuItemWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => MenuItemCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof MenuItemCountAggregateInput>;
    @Field(() => MenuItemAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof MenuItemAvgAggregateInput>;
    @Field(() => MenuItemSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof MenuItemSumAggregateInput>;
    @Field(() => MenuItemMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof MenuItemMinAggregateInput>;
    @Field(() => MenuItemMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof MenuItemMaxAggregateInput>;
}

@InputType()
export class MenuItemAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    calories?: true;
}

@ObjectType()
export class MenuItemAvgAggregate {
    @Field(() => Float, {nullable:true})
    calories?: number;
}

@InputType()
export class MenuItemAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    calories?: keyof typeof SortOrder;
}

@InputType()
export class MenuItemCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    image_path?: true;
    @Field(() => Boolean, {nullable:true})
    calories?: true;
    @Field(() => Boolean, {nullable:true})
    subCategoryId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class MenuItemCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    description!: number;
    @Field(() => Int, {nullable:false})
    image_path!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    calories!: number;
    @Field(() => Int, {nullable:false})
    subCategoryId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class MenuItemCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    image_path?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    calories?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    subCategoryId?: keyof typeof SortOrder;
}

@ObjectType()
export class MenuItemCount {
    @Field(() => Int, {nullable:false})
    sizes?: number;
    @Field(() => Int, {nullable:false})
    customizations?: number;
}

@InputType()
export class MenuItemCreateManySubCategoryInputEnvelope {
    @Field(() => [MenuItemCreateManySubCategoryInput], {nullable:false})
    @Type(() => MenuItemCreateManySubCategoryInput)
    data!: Array<MenuItemCreateManySubCategoryInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class MenuItemCreateManySubCategoryInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    calories?: number;
}

@InputType()
export class MenuItemCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    calories?: number;
    @Field(() => String, {nullable:false})
    subCategoryId!: string;
}

@InputType()
export class MenuItemCreateNestedManyWithoutSubCategoryInput {
    @Field(() => [MenuItemCreateWithoutSubCategoryInput], {nullable:true})
    @Type(() => MenuItemCreateWithoutSubCategoryInput)
    create?: Array<MenuItemCreateWithoutSubCategoryInput>;
    @Field(() => [MenuItemCreateOrConnectWithoutSubCategoryInput], {nullable:true})
    @Type(() => MenuItemCreateOrConnectWithoutSubCategoryInput)
    connectOrCreate?: Array<MenuItemCreateOrConnectWithoutSubCategoryInput>;
    @Field(() => MenuItemCreateManySubCategoryInputEnvelope, {nullable:true})
    @Type(() => MenuItemCreateManySubCategoryInputEnvelope)
    createMany?: InstanceType<typeof MenuItemCreateManySubCategoryInputEnvelope>;
    @Field(() => [MenuItemWhereUniqueInput], {nullable:true})
    @Type(() => MenuItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MenuItemWhereUniqueInput, 'id'>>;
}

@InputType()
export class MenuItemCreateNestedOneWithoutCustomizationsInput {
    @Field(() => MenuItemCreateWithoutCustomizationsInput, {nullable:true})
    @Type(() => MenuItemCreateWithoutCustomizationsInput)
    create?: InstanceType<typeof MenuItemCreateWithoutCustomizationsInput>;
    @Field(() => MenuItemCreateOrConnectWithoutCustomizationsInput, {nullable:true})
    @Type(() => MenuItemCreateOrConnectWithoutCustomizationsInput)
    connectOrCreate?: InstanceType<typeof MenuItemCreateOrConnectWithoutCustomizationsInput>;
    @Field(() => MenuItemWhereUniqueInput, {nullable:true})
    @Type(() => MenuItemWhereUniqueInput)
    connect?: Prisma.AtLeast<MenuItemWhereUniqueInput, 'id'>;
}

@InputType()
export class MenuItemCreateNestedOneWithoutSizesInput {
    @Field(() => MenuItemCreateWithoutSizesInput, {nullable:true})
    @Type(() => MenuItemCreateWithoutSizesInput)
    create?: InstanceType<typeof MenuItemCreateWithoutSizesInput>;
    @Field(() => MenuItemCreateOrConnectWithoutSizesInput, {nullable:true})
    @Type(() => MenuItemCreateOrConnectWithoutSizesInput)
    connectOrCreate?: InstanceType<typeof MenuItemCreateOrConnectWithoutSizesInput>;
    @Field(() => MenuItemWhereUniqueInput, {nullable:true})
    @Type(() => MenuItemWhereUniqueInput)
    connect?: Prisma.AtLeast<MenuItemWhereUniqueInput, 'id'>;
}

@InputType()
export class MenuItemCreateOrConnectWithoutCustomizationsInput {
    @Field(() => MenuItemWhereUniqueInput, {nullable:false})
    @Type(() => MenuItemWhereUniqueInput)
    where!: Prisma.AtLeast<MenuItemWhereUniqueInput, 'id'>;
    @Field(() => MenuItemCreateWithoutCustomizationsInput, {nullable:false})
    @Type(() => MenuItemCreateWithoutCustomizationsInput)
    create!: InstanceType<typeof MenuItemCreateWithoutCustomizationsInput>;
}

@InputType()
export class MenuItemCreateOrConnectWithoutSizesInput {
    @Field(() => MenuItemWhereUniqueInput, {nullable:false})
    @Type(() => MenuItemWhereUniqueInput)
    where!: Prisma.AtLeast<MenuItemWhereUniqueInput, 'id'>;
    @Field(() => MenuItemCreateWithoutSizesInput, {nullable:false})
    @Type(() => MenuItemCreateWithoutSizesInput)
    create!: InstanceType<typeof MenuItemCreateWithoutSizesInput>;
}

@InputType()
export class MenuItemCreateOrConnectWithoutSubCategoryInput {
    @Field(() => MenuItemWhereUniqueInput, {nullable:false})
    @Type(() => MenuItemWhereUniqueInput)
    where!: Prisma.AtLeast<MenuItemWhereUniqueInput, 'id'>;
    @Field(() => MenuItemCreateWithoutSubCategoryInput, {nullable:false})
    @Type(() => MenuItemCreateWithoutSubCategoryInput)
    create!: InstanceType<typeof MenuItemCreateWithoutSubCategoryInput>;
}

@InputType()
export class MenuItemCreateWithoutCustomizationsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    calories?: number;
    @Field(() => SubCategoryCreateNestedOneWithoutMenuItemsInput, {nullable:false})
    subCategory!: InstanceType<typeof SubCategoryCreateNestedOneWithoutMenuItemsInput>;
    @Field(() => SizeCreateNestedManyWithoutMenuItemInput, {nullable:true})
    sizes?: InstanceType<typeof SizeCreateNestedManyWithoutMenuItemInput>;
}

@InputType()
export class MenuItemCreateWithoutSizesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    calories?: number;
    @Field(() => SubCategoryCreateNestedOneWithoutMenuItemsInput, {nullable:false})
    subCategory!: InstanceType<typeof SubCategoryCreateNestedOneWithoutMenuItemsInput>;
    @Field(() => CustomizationCreateNestedManyWithoutMenuItemInput, {nullable:true})
    customizations?: InstanceType<typeof CustomizationCreateNestedManyWithoutMenuItemInput>;
}

@InputType()
export class MenuItemCreateWithoutSubCategoryInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    calories?: number;
    @Field(() => SizeCreateNestedManyWithoutMenuItemInput, {nullable:true})
    sizes?: InstanceType<typeof SizeCreateNestedManyWithoutMenuItemInput>;
    @Field(() => CustomizationCreateNestedManyWithoutMenuItemInput, {nullable:true})
    customizations?: InstanceType<typeof CustomizationCreateNestedManyWithoutMenuItemInput>;
}

@InputType()
export class MenuItemCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    calories?: number;
    @Field(() => SubCategoryCreateNestedOneWithoutMenuItemsInput, {nullable:false})
    subCategory!: InstanceType<typeof SubCategoryCreateNestedOneWithoutMenuItemsInput>;
    @Field(() => SizeCreateNestedManyWithoutMenuItemInput, {nullable:true})
    sizes?: InstanceType<typeof SizeCreateNestedManyWithoutMenuItemInput>;
    @Field(() => CustomizationCreateNestedManyWithoutMenuItemInput, {nullable:true})
    customizations?: InstanceType<typeof CustomizationCreateNestedManyWithoutMenuItemInput>;
}

@ArgsType()
export class MenuItemGroupByArgs {
    @Field(() => MenuItemWhereInput, {nullable:true})
    @Type(() => MenuItemWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof MenuItemWhereInput>;
    @Field(() => [MenuItemOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MenuItemOrderByWithAggregationInput>;
    @Field(() => [MenuItemScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MenuItemScalarFieldEnum>;
    @Field(() => MenuItemScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof MenuItemScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => MenuItemCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof MenuItemCountAggregateInput>;
    @Field(() => MenuItemAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof MenuItemAvgAggregateInput>;
    @Field(() => MenuItemSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof MenuItemSumAggregateInput>;
    @Field(() => MenuItemMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof MenuItemMinAggregateInput>;
    @Field(() => MenuItemMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof MenuItemMaxAggregateInput>;
}

@ObjectType()
export class MenuItemGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    calories?: number;
    @Field(() => String, {nullable:false})
    subCategoryId!: string;
    @Field(() => MenuItemCountAggregate, {nullable:true})
    _count?: InstanceType<typeof MenuItemCountAggregate>;
    @Field(() => MenuItemAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof MenuItemAvgAggregate>;
    @Field(() => MenuItemSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof MenuItemSumAggregate>;
    @Field(() => MenuItemMinAggregate, {nullable:true})
    _min?: InstanceType<typeof MenuItemMinAggregate>;
    @Field(() => MenuItemMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof MenuItemMaxAggregate>;
}

@InputType()
export class MenuItemListRelationFilter {
    @Field(() => MenuItemWhereInput, {nullable:true})
    every?: InstanceType<typeof MenuItemWhereInput>;
    @Field(() => MenuItemWhereInput, {nullable:true})
    some?: InstanceType<typeof MenuItemWhereInput>;
    @Field(() => MenuItemWhereInput, {nullable:true})
    none?: InstanceType<typeof MenuItemWhereInput>;
}

@InputType()
export class MenuItemMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    image_path?: true;
    @Field(() => Boolean, {nullable:true})
    calories?: true;
    @Field(() => Boolean, {nullable:true})
    subCategoryId?: true;
}

@ObjectType()
export class MenuItemMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    calories?: number;
    @Field(() => String, {nullable:true})
    subCategoryId?: string;
}

@InputType()
export class MenuItemMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    image_path?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    calories?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    subCategoryId?: keyof typeof SortOrder;
}

@InputType()
export class MenuItemMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    image_path?: true;
    @Field(() => Boolean, {nullable:true})
    calories?: true;
    @Field(() => Boolean, {nullable:true})
    subCategoryId?: true;
}

@ObjectType()
export class MenuItemMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    calories?: number;
    @Field(() => String, {nullable:true})
    subCategoryId?: string;
}

@InputType()
export class MenuItemMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    image_path?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    calories?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    subCategoryId?: keyof typeof SortOrder;
}

@InputType()
export class MenuItemOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class MenuItemOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    description?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    image_path?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    calories?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    subCategoryId?: keyof typeof SortOrder;
    @Field(() => MenuItemCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof MenuItemCountOrderByAggregateInput>;
    @Field(() => MenuItemAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof MenuItemAvgOrderByAggregateInput>;
    @Field(() => MenuItemMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof MenuItemMaxOrderByAggregateInput>;
    @Field(() => MenuItemMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof MenuItemMinOrderByAggregateInput>;
    @Field(() => MenuItemSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof MenuItemSumOrderByAggregateInput>;
}

@InputType()
export class MenuItemOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    description?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    image_path?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    calories?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    subCategoryId?: keyof typeof SortOrder;
    @Field(() => SubCategoryOrderByWithRelationInput, {nullable:true})
    subCategory?: InstanceType<typeof SubCategoryOrderByWithRelationInput>;
    @Field(() => SizeOrderByRelationAggregateInput, {nullable:true})
    sizes?: InstanceType<typeof SizeOrderByRelationAggregateInput>;
    @Field(() => CustomizationOrderByRelationAggregateInput, {nullable:true})
    customizations?: InstanceType<typeof CustomizationOrderByRelationAggregateInput>;
}

@InputType()
export class MenuItemRelationFilter {
    @Field(() => MenuItemWhereInput, {nullable:true})
    is?: InstanceType<typeof MenuItemWhereInput>;
    @Field(() => MenuItemWhereInput, {nullable:true})
    isNot?: InstanceType<typeof MenuItemWhereInput>;
}

@InputType()
export class MenuItemScalarWhereWithAggregatesInput {
    @Field(() => [MenuItemScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MenuItemScalarWhereWithAggregatesInput>;
    @Field(() => [MenuItemScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MenuItemScalarWhereWithAggregatesInput>;
    @Field(() => [MenuItemScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MenuItemScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    image_path?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    calories?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    subCategoryId?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class MenuItemScalarWhereInput {
    @Field(() => [MenuItemScalarWhereInput], {nullable:true})
    AND?: Array<MenuItemScalarWhereInput>;
    @Field(() => [MenuItemScalarWhereInput], {nullable:true})
    OR?: Array<MenuItemScalarWhereInput>;
    @Field(() => [MenuItemScalarWhereInput], {nullable:true})
    NOT?: Array<MenuItemScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    description?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    image_path?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    calories?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    subCategoryId?: InstanceType<typeof StringFilter>;
}

@InputType()
export class MenuItemSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    calories?: true;
}

@ObjectType()
export class MenuItemSumAggregate {
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    calories?: number;
}

@InputType()
export class MenuItemSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    calories?: keyof typeof SortOrder;
}

@InputType()
export class MenuItemUncheckedCreateNestedManyWithoutSubCategoryInput {
    @Field(() => [MenuItemCreateWithoutSubCategoryInput], {nullable:true})
    @Type(() => MenuItemCreateWithoutSubCategoryInput)
    create?: Array<MenuItemCreateWithoutSubCategoryInput>;
    @Field(() => [MenuItemCreateOrConnectWithoutSubCategoryInput], {nullable:true})
    @Type(() => MenuItemCreateOrConnectWithoutSubCategoryInput)
    connectOrCreate?: Array<MenuItemCreateOrConnectWithoutSubCategoryInput>;
    @Field(() => MenuItemCreateManySubCategoryInputEnvelope, {nullable:true})
    @Type(() => MenuItemCreateManySubCategoryInputEnvelope)
    createMany?: InstanceType<typeof MenuItemCreateManySubCategoryInputEnvelope>;
    @Field(() => [MenuItemWhereUniqueInput], {nullable:true})
    @Type(() => MenuItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MenuItemWhereUniqueInput, 'id'>>;
}

@InputType()
export class MenuItemUncheckedCreateWithoutCustomizationsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    calories?: number;
    @Field(() => String, {nullable:false})
    subCategoryId!: string;
    @Field(() => SizeUncheckedCreateNestedManyWithoutMenuItemInput, {nullable:true})
    sizes?: InstanceType<typeof SizeUncheckedCreateNestedManyWithoutMenuItemInput>;
}

@InputType()
export class MenuItemUncheckedCreateWithoutSizesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    calories?: number;
    @Field(() => String, {nullable:false})
    subCategoryId!: string;
    @Field(() => CustomizationUncheckedCreateNestedManyWithoutMenuItemInput, {nullable:true})
    customizations?: InstanceType<typeof CustomizationUncheckedCreateNestedManyWithoutMenuItemInput>;
}

@InputType()
export class MenuItemUncheckedCreateWithoutSubCategoryInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    calories?: number;
    @Field(() => SizeUncheckedCreateNestedManyWithoutMenuItemInput, {nullable:true})
    sizes?: InstanceType<typeof SizeUncheckedCreateNestedManyWithoutMenuItemInput>;
    @Field(() => CustomizationUncheckedCreateNestedManyWithoutMenuItemInput, {nullable:true})
    customizations?: InstanceType<typeof CustomizationUncheckedCreateNestedManyWithoutMenuItemInput>;
}

@InputType()
export class MenuItemUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    calories?: number;
    @Field(() => String, {nullable:false})
    subCategoryId!: string;
    @Field(() => SizeUncheckedCreateNestedManyWithoutMenuItemInput, {nullable:true})
    sizes?: InstanceType<typeof SizeUncheckedCreateNestedManyWithoutMenuItemInput>;
    @Field(() => CustomizationUncheckedCreateNestedManyWithoutMenuItemInput, {nullable:true})
    customizations?: InstanceType<typeof CustomizationUncheckedCreateNestedManyWithoutMenuItemInput>;
}

@InputType()
export class MenuItemUncheckedUpdateManyWithoutSubCategoryNestedInput {
    @Field(() => [MenuItemCreateWithoutSubCategoryInput], {nullable:true})
    @Type(() => MenuItemCreateWithoutSubCategoryInput)
    create?: Array<MenuItemCreateWithoutSubCategoryInput>;
    @Field(() => [MenuItemCreateOrConnectWithoutSubCategoryInput], {nullable:true})
    @Type(() => MenuItemCreateOrConnectWithoutSubCategoryInput)
    connectOrCreate?: Array<MenuItemCreateOrConnectWithoutSubCategoryInput>;
    @Field(() => [MenuItemUpsertWithWhereUniqueWithoutSubCategoryInput], {nullable:true})
    @Type(() => MenuItemUpsertWithWhereUniqueWithoutSubCategoryInput)
    upsert?: Array<MenuItemUpsertWithWhereUniqueWithoutSubCategoryInput>;
    @Field(() => MenuItemCreateManySubCategoryInputEnvelope, {nullable:true})
    @Type(() => MenuItemCreateManySubCategoryInputEnvelope)
    createMany?: InstanceType<typeof MenuItemCreateManySubCategoryInputEnvelope>;
    @Field(() => [MenuItemWhereUniqueInput], {nullable:true})
    @Type(() => MenuItemWhereUniqueInput)
    set?: Array<Prisma.AtLeast<MenuItemWhereUniqueInput, 'id'>>;
    @Field(() => [MenuItemWhereUniqueInput], {nullable:true})
    @Type(() => MenuItemWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<MenuItemWhereUniqueInput, 'id'>>;
    @Field(() => [MenuItemWhereUniqueInput], {nullable:true})
    @Type(() => MenuItemWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<MenuItemWhereUniqueInput, 'id'>>;
    @Field(() => [MenuItemWhereUniqueInput], {nullable:true})
    @Type(() => MenuItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MenuItemWhereUniqueInput, 'id'>>;
    @Field(() => [MenuItemUpdateWithWhereUniqueWithoutSubCategoryInput], {nullable:true})
    @Type(() => MenuItemUpdateWithWhereUniqueWithoutSubCategoryInput)
    update?: Array<MenuItemUpdateWithWhereUniqueWithoutSubCategoryInput>;
    @Field(() => [MenuItemUpdateManyWithWhereWithoutSubCategoryInput], {nullable:true})
    @Type(() => MenuItemUpdateManyWithWhereWithoutSubCategoryInput)
    updateMany?: Array<MenuItemUpdateManyWithWhereWithoutSubCategoryInput>;
    @Field(() => [MenuItemScalarWhereInput], {nullable:true})
    @Type(() => MenuItemScalarWhereInput)
    deleteMany?: Array<MenuItemScalarWhereInput>;
}

@InputType()
export class MenuItemUncheckedUpdateManyWithoutSubCategoryInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    calories?: number;
}

@InputType()
export class MenuItemUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    calories?: number;
    @Field(() => String, {nullable:true})
    subCategoryId?: string;
}

@InputType()
export class MenuItemUncheckedUpdateWithoutCustomizationsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    calories?: number;
    @Field(() => String, {nullable:true})
    subCategoryId?: string;
    @Field(() => SizeUncheckedUpdateManyWithoutMenuItemNestedInput, {nullable:true})
    sizes?: InstanceType<typeof SizeUncheckedUpdateManyWithoutMenuItemNestedInput>;
}

@InputType()
export class MenuItemUncheckedUpdateWithoutSizesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    calories?: number;
    @Field(() => String, {nullable:true})
    subCategoryId?: string;
    @Field(() => CustomizationUncheckedUpdateManyWithoutMenuItemNestedInput, {nullable:true})
    customizations?: InstanceType<typeof CustomizationUncheckedUpdateManyWithoutMenuItemNestedInput>;
}

@InputType()
export class MenuItemUncheckedUpdateWithoutSubCategoryInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    calories?: number;
    @Field(() => SizeUncheckedUpdateManyWithoutMenuItemNestedInput, {nullable:true})
    sizes?: InstanceType<typeof SizeUncheckedUpdateManyWithoutMenuItemNestedInput>;
    @Field(() => CustomizationUncheckedUpdateManyWithoutMenuItemNestedInput, {nullable:true})
    customizations?: InstanceType<typeof CustomizationUncheckedUpdateManyWithoutMenuItemNestedInput>;
}

@InputType()
export class MenuItemUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    calories?: number;
    @Field(() => String, {nullable:true})
    subCategoryId?: string;
    @Field(() => SizeUncheckedUpdateManyWithoutMenuItemNestedInput, {nullable:true})
    sizes?: InstanceType<typeof SizeUncheckedUpdateManyWithoutMenuItemNestedInput>;
    @Field(() => CustomizationUncheckedUpdateManyWithoutMenuItemNestedInput, {nullable:true})
    customizations?: InstanceType<typeof CustomizationUncheckedUpdateManyWithoutMenuItemNestedInput>;
}

@InputType()
export class MenuItemUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    calories?: number;
}

@InputType()
export class MenuItemUpdateManyWithWhereWithoutSubCategoryInput {
    @Field(() => MenuItemScalarWhereInput, {nullable:false})
    @Type(() => MenuItemScalarWhereInput)
    where!: InstanceType<typeof MenuItemScalarWhereInput>;
    @Field(() => MenuItemUpdateManyMutationInput, {nullable:false})
    @Type(() => MenuItemUpdateManyMutationInput)
    data!: InstanceType<typeof MenuItemUpdateManyMutationInput>;
}

@InputType()
export class MenuItemUpdateManyWithoutSubCategoryNestedInput {
    @Field(() => [MenuItemCreateWithoutSubCategoryInput], {nullable:true})
    @Type(() => MenuItemCreateWithoutSubCategoryInput)
    create?: Array<MenuItemCreateWithoutSubCategoryInput>;
    @Field(() => [MenuItemCreateOrConnectWithoutSubCategoryInput], {nullable:true})
    @Type(() => MenuItemCreateOrConnectWithoutSubCategoryInput)
    connectOrCreate?: Array<MenuItemCreateOrConnectWithoutSubCategoryInput>;
    @Field(() => [MenuItemUpsertWithWhereUniqueWithoutSubCategoryInput], {nullable:true})
    @Type(() => MenuItemUpsertWithWhereUniqueWithoutSubCategoryInput)
    upsert?: Array<MenuItemUpsertWithWhereUniqueWithoutSubCategoryInput>;
    @Field(() => MenuItemCreateManySubCategoryInputEnvelope, {nullable:true})
    @Type(() => MenuItemCreateManySubCategoryInputEnvelope)
    createMany?: InstanceType<typeof MenuItemCreateManySubCategoryInputEnvelope>;
    @Field(() => [MenuItemWhereUniqueInput], {nullable:true})
    @Type(() => MenuItemWhereUniqueInput)
    set?: Array<Prisma.AtLeast<MenuItemWhereUniqueInput, 'id'>>;
    @Field(() => [MenuItemWhereUniqueInput], {nullable:true})
    @Type(() => MenuItemWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<MenuItemWhereUniqueInput, 'id'>>;
    @Field(() => [MenuItemWhereUniqueInput], {nullable:true})
    @Type(() => MenuItemWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<MenuItemWhereUniqueInput, 'id'>>;
    @Field(() => [MenuItemWhereUniqueInput], {nullable:true})
    @Type(() => MenuItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MenuItemWhereUniqueInput, 'id'>>;
    @Field(() => [MenuItemUpdateWithWhereUniqueWithoutSubCategoryInput], {nullable:true})
    @Type(() => MenuItemUpdateWithWhereUniqueWithoutSubCategoryInput)
    update?: Array<MenuItemUpdateWithWhereUniqueWithoutSubCategoryInput>;
    @Field(() => [MenuItemUpdateManyWithWhereWithoutSubCategoryInput], {nullable:true})
    @Type(() => MenuItemUpdateManyWithWhereWithoutSubCategoryInput)
    updateMany?: Array<MenuItemUpdateManyWithWhereWithoutSubCategoryInput>;
    @Field(() => [MenuItemScalarWhereInput], {nullable:true})
    @Type(() => MenuItemScalarWhereInput)
    deleteMany?: Array<MenuItemScalarWhereInput>;
}

@InputType()
export class MenuItemUpdateOneRequiredWithoutCustomizationsNestedInput {
    @Field(() => MenuItemCreateWithoutCustomizationsInput, {nullable:true})
    @Type(() => MenuItemCreateWithoutCustomizationsInput)
    create?: InstanceType<typeof MenuItemCreateWithoutCustomizationsInput>;
    @Field(() => MenuItemCreateOrConnectWithoutCustomizationsInput, {nullable:true})
    @Type(() => MenuItemCreateOrConnectWithoutCustomizationsInput)
    connectOrCreate?: InstanceType<typeof MenuItemCreateOrConnectWithoutCustomizationsInput>;
    @Field(() => MenuItemUpsertWithoutCustomizationsInput, {nullable:true})
    @Type(() => MenuItemUpsertWithoutCustomizationsInput)
    upsert?: InstanceType<typeof MenuItemUpsertWithoutCustomizationsInput>;
    @Field(() => MenuItemWhereUniqueInput, {nullable:true})
    @Type(() => MenuItemWhereUniqueInput)
    connect?: Prisma.AtLeast<MenuItemWhereUniqueInput, 'id'>;
    @Field(() => MenuItemUpdateToOneWithWhereWithoutCustomizationsInput, {nullable:true})
    @Type(() => MenuItemUpdateToOneWithWhereWithoutCustomizationsInput)
    update?: InstanceType<typeof MenuItemUpdateToOneWithWhereWithoutCustomizationsInput>;
}

@InputType()
export class MenuItemUpdateOneRequiredWithoutSizesNestedInput {
    @Field(() => MenuItemCreateWithoutSizesInput, {nullable:true})
    @Type(() => MenuItemCreateWithoutSizesInput)
    create?: InstanceType<typeof MenuItemCreateWithoutSizesInput>;
    @Field(() => MenuItemCreateOrConnectWithoutSizesInput, {nullable:true})
    @Type(() => MenuItemCreateOrConnectWithoutSizesInput)
    connectOrCreate?: InstanceType<typeof MenuItemCreateOrConnectWithoutSizesInput>;
    @Field(() => MenuItemUpsertWithoutSizesInput, {nullable:true})
    @Type(() => MenuItemUpsertWithoutSizesInput)
    upsert?: InstanceType<typeof MenuItemUpsertWithoutSizesInput>;
    @Field(() => MenuItemWhereUniqueInput, {nullable:true})
    @Type(() => MenuItemWhereUniqueInput)
    connect?: Prisma.AtLeast<MenuItemWhereUniqueInput, 'id'>;
    @Field(() => MenuItemUpdateToOneWithWhereWithoutSizesInput, {nullable:true})
    @Type(() => MenuItemUpdateToOneWithWhereWithoutSizesInput)
    update?: InstanceType<typeof MenuItemUpdateToOneWithWhereWithoutSizesInput>;
}

@InputType()
export class MenuItemUpdateToOneWithWhereWithoutCustomizationsInput {
    @Field(() => MenuItemWhereInput, {nullable:true})
    @Type(() => MenuItemWhereInput)
    where?: InstanceType<typeof MenuItemWhereInput>;
    @Field(() => MenuItemUpdateWithoutCustomizationsInput, {nullable:false})
    @Type(() => MenuItemUpdateWithoutCustomizationsInput)
    data!: InstanceType<typeof MenuItemUpdateWithoutCustomizationsInput>;
}

@InputType()
export class MenuItemUpdateToOneWithWhereWithoutSizesInput {
    @Field(() => MenuItemWhereInput, {nullable:true})
    @Type(() => MenuItemWhereInput)
    where?: InstanceType<typeof MenuItemWhereInput>;
    @Field(() => MenuItemUpdateWithoutSizesInput, {nullable:false})
    @Type(() => MenuItemUpdateWithoutSizesInput)
    data!: InstanceType<typeof MenuItemUpdateWithoutSizesInput>;
}

@InputType()
export class MenuItemUpdateWithWhereUniqueWithoutSubCategoryInput {
    @Field(() => MenuItemWhereUniqueInput, {nullable:false})
    @Type(() => MenuItemWhereUniqueInput)
    where!: Prisma.AtLeast<MenuItemWhereUniqueInput, 'id'>;
    @Field(() => MenuItemUpdateWithoutSubCategoryInput, {nullable:false})
    @Type(() => MenuItemUpdateWithoutSubCategoryInput)
    data!: InstanceType<typeof MenuItemUpdateWithoutSubCategoryInput>;
}

@InputType()
export class MenuItemUpdateWithoutCustomizationsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    calories?: number;
    @Field(() => SubCategoryUpdateOneRequiredWithoutMenuItemsNestedInput, {nullable:true})
    subCategory?: InstanceType<typeof SubCategoryUpdateOneRequiredWithoutMenuItemsNestedInput>;
    @Field(() => SizeUpdateManyWithoutMenuItemNestedInput, {nullable:true})
    sizes?: InstanceType<typeof SizeUpdateManyWithoutMenuItemNestedInput>;
}

@InputType()
export class MenuItemUpdateWithoutSizesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    calories?: number;
    @Field(() => SubCategoryUpdateOneRequiredWithoutMenuItemsNestedInput, {nullable:true})
    subCategory?: InstanceType<typeof SubCategoryUpdateOneRequiredWithoutMenuItemsNestedInput>;
    @Field(() => CustomizationUpdateManyWithoutMenuItemNestedInput, {nullable:true})
    customizations?: InstanceType<typeof CustomizationUpdateManyWithoutMenuItemNestedInput>;
}

@InputType()
export class MenuItemUpdateWithoutSubCategoryInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    calories?: number;
    @Field(() => SizeUpdateManyWithoutMenuItemNestedInput, {nullable:true})
    sizes?: InstanceType<typeof SizeUpdateManyWithoutMenuItemNestedInput>;
    @Field(() => CustomizationUpdateManyWithoutMenuItemNestedInput, {nullable:true})
    customizations?: InstanceType<typeof CustomizationUpdateManyWithoutMenuItemNestedInput>;
}

@InputType()
export class MenuItemUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    calories?: number;
    @Field(() => SubCategoryUpdateOneRequiredWithoutMenuItemsNestedInput, {nullable:true})
    subCategory?: InstanceType<typeof SubCategoryUpdateOneRequiredWithoutMenuItemsNestedInput>;
    @Field(() => SizeUpdateManyWithoutMenuItemNestedInput, {nullable:true})
    sizes?: InstanceType<typeof SizeUpdateManyWithoutMenuItemNestedInput>;
    @Field(() => CustomizationUpdateManyWithoutMenuItemNestedInput, {nullable:true})
    customizations?: InstanceType<typeof CustomizationUpdateManyWithoutMenuItemNestedInput>;
}

@InputType()
export class MenuItemUpsertWithWhereUniqueWithoutSubCategoryInput {
    @Field(() => MenuItemWhereUniqueInput, {nullable:false})
    @Type(() => MenuItemWhereUniqueInput)
    where!: Prisma.AtLeast<MenuItemWhereUniqueInput, 'id'>;
    @Field(() => MenuItemUpdateWithoutSubCategoryInput, {nullable:false})
    @Type(() => MenuItemUpdateWithoutSubCategoryInput)
    update!: InstanceType<typeof MenuItemUpdateWithoutSubCategoryInput>;
    @Field(() => MenuItemCreateWithoutSubCategoryInput, {nullable:false})
    @Type(() => MenuItemCreateWithoutSubCategoryInput)
    create!: InstanceType<typeof MenuItemCreateWithoutSubCategoryInput>;
}

@InputType()
export class MenuItemUpsertWithoutCustomizationsInput {
    @Field(() => MenuItemUpdateWithoutCustomizationsInput, {nullable:false})
    @Type(() => MenuItemUpdateWithoutCustomizationsInput)
    update!: InstanceType<typeof MenuItemUpdateWithoutCustomizationsInput>;
    @Field(() => MenuItemCreateWithoutCustomizationsInput, {nullable:false})
    @Type(() => MenuItemCreateWithoutCustomizationsInput)
    create!: InstanceType<typeof MenuItemCreateWithoutCustomizationsInput>;
    @Field(() => MenuItemWhereInput, {nullable:true})
    @Type(() => MenuItemWhereInput)
    where?: InstanceType<typeof MenuItemWhereInput>;
}

@InputType()
export class MenuItemUpsertWithoutSizesInput {
    @Field(() => MenuItemUpdateWithoutSizesInput, {nullable:false})
    @Type(() => MenuItemUpdateWithoutSizesInput)
    update!: InstanceType<typeof MenuItemUpdateWithoutSizesInput>;
    @Field(() => MenuItemCreateWithoutSizesInput, {nullable:false})
    @Type(() => MenuItemCreateWithoutSizesInput)
    create!: InstanceType<typeof MenuItemCreateWithoutSizesInput>;
    @Field(() => MenuItemWhereInput, {nullable:true})
    @Type(() => MenuItemWhereInput)
    where?: InstanceType<typeof MenuItemWhereInput>;
}

@InputType()
export class MenuItemWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [MenuItemWhereInput], {nullable:true})
    AND?: Array<MenuItemWhereInput>;
    @Field(() => [MenuItemWhereInput], {nullable:true})
    OR?: Array<MenuItemWhereInput>;
    @Field(() => [MenuItemWhereInput], {nullable:true})
    NOT?: Array<MenuItemWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    description?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    image_path?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    calories?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    subCategoryId?: InstanceType<typeof StringFilter>;
    @Field(() => SubCategoryRelationFilter, {nullable:true})
    subCategory?: InstanceType<typeof SubCategoryRelationFilter>;
    @Field(() => SizeListRelationFilter, {nullable:true})
    sizes?: InstanceType<typeof SizeListRelationFilter>;
    @Field(() => CustomizationListRelationFilter, {nullable:true})
    customizations?: InstanceType<typeof CustomizationListRelationFilter>;
}

@InputType()
export class MenuItemWhereInput {
    @Field(() => [MenuItemWhereInput], {nullable:true})
    AND?: Array<MenuItemWhereInput>;
    @Field(() => [MenuItemWhereInput], {nullable:true})
    OR?: Array<MenuItemWhereInput>;
    @Field(() => [MenuItemWhereInput], {nullable:true})
    NOT?: Array<MenuItemWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    description?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    image_path?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    calories?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    subCategoryId?: InstanceType<typeof StringFilter>;
    @Field(() => SubCategoryRelationFilter, {nullable:true})
    subCategory?: InstanceType<typeof SubCategoryRelationFilter>;
    @Field(() => SizeListRelationFilter, {nullable:true})
    sizes?: InstanceType<typeof SizeListRelationFilter>;
    @Field(() => CustomizationListRelationFilter, {nullable:true})
    customizations?: InstanceType<typeof CustomizationListRelationFilter>;
}

@ObjectType()
export class MenuItem {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description!: string | null;
    @Field(() => String, {nullable:true})
    image_path!: string | null;
    @Field(() => Int, {nullable:true})
    calories!: number | null;
    @Field(() => String, {nullable:false})
    subCategoryId!: string;
    @Field(() => SubCategory, {nullable:false})
    subCategory?: InstanceType<typeof SubCategory>;
    @Field(() => [Size], {nullable:true})
    sizes?: Array<Size>;
    @Field(() => [Customization], {nullable:true})
    customizations?: Array<Customization>;
    @Field(() => MenuItemCount, {nullable:false})
    _count?: InstanceType<typeof MenuItemCount>;
}

@ArgsType()
export class UpdateManyMenuItemArgs {
    @Field(() => MenuItemUpdateManyMutationInput, {nullable:false})
    @Type(() => MenuItemUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof MenuItemUpdateManyMutationInput>;
    @Field(() => MenuItemWhereInput, {nullable:true})
    @Type(() => MenuItemWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof MenuItemWhereInput>;
}

@ArgsType()
export class UpdateOneMenuItemArgs {
    @Field(() => MenuItemUpdateInput, {nullable:false})
    @Type(() => MenuItemUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof MenuItemUpdateInput>;
    @Field(() => MenuItemWhereUniqueInput, {nullable:false})
    @Type(() => MenuItemWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<MenuItemWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneMenuItemArgs {
    @Field(() => MenuItemWhereUniqueInput, {nullable:false})
    @Type(() => MenuItemWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<MenuItemWhereUniqueInput, 'id'>;
    @Field(() => MenuItemCreateInput, {nullable:false})
    @Type(() => MenuItemCreateInput)
    create!: InstanceType<typeof MenuItemCreateInput>;
    @Field(() => MenuItemUpdateInput, {nullable:false})
    @Type(() => MenuItemUpdateInput)
    update!: InstanceType<typeof MenuItemUpdateInput>;
}

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@InputType()
export class FloatFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => FloatFilter, {nullable:true})
    not?: InstanceType<typeof FloatFilter>;
}

@InputType()
export class FloatWithAggregatesFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof FloatWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _avg?: InstanceType<typeof FloatFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _sum?: InstanceType<typeof FloatFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _min?: InstanceType<typeof FloatFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _max?: InstanceType<typeof FloatFilter>;
}

@InputType()
export class IntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => IntFilter, {nullable:true})
    not?: InstanceType<typeof IntFilter>;
}

@InputType()
export class IntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _avg?: InstanceType<typeof FloatFilter>;
    @Field(() => IntFilter, {nullable:true})
    _sum?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    _min?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    _max?: InstanceType<typeof IntFilter>;
}

@InputType()
export class SortOrderInput {
    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;
    @Field(() => NullsOrder, {nullable:true})
    nulls?: keyof typeof NullsOrder;
}

@InputType()
export class StringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => StringFilter, {nullable:true})
    not?: InstanceType<typeof StringFilter>;
}

@InputType()
export class StringListFilter {
    @Field(() => [String], {nullable:true})
    equals?: Array<string>;
    @Field(() => String, {nullable:true})
    has?: string;
    @Field(() => [String], {nullable:true})
    hasEvery?: Array<string>;
    @Field(() => [String], {nullable:true})
    hasSome?: Array<string>;
    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;
}

@InputType()
export class StringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    _min?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    _max?: InstanceType<typeof StringFilter>;
}

@ObjectType()
export class AggregateRgbBackground {
    @Field(() => RgbBackgroundCountAggregate, {nullable:true})
    _count?: InstanceType<typeof RgbBackgroundCountAggregate>;
    @Field(() => RgbBackgroundAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof RgbBackgroundAvgAggregate>;
    @Field(() => RgbBackgroundSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof RgbBackgroundSumAggregate>;
    @Field(() => RgbBackgroundMinAggregate, {nullable:true})
    _min?: InstanceType<typeof RgbBackgroundMinAggregate>;
    @Field(() => RgbBackgroundMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof RgbBackgroundMaxAggregate>;
}

@ArgsType()
export class CreateManyRgbBackgroundArgs {
    @Field(() => [RgbBackgroundCreateManyInput], {nullable:false})
    @Type(() => RgbBackgroundCreateManyInput)
    @ValidateNested()
    data!: Array<RgbBackgroundCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneRgbBackgroundArgs {
    @Field(() => RgbBackgroundCreateInput, {nullable:false})
    @Type(() => RgbBackgroundCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof RgbBackgroundCreateInput>;
}

@ArgsType()
export class DeleteManyRgbBackgroundArgs {
    @Field(() => RgbBackgroundWhereInput, {nullable:true})
    @Type(() => RgbBackgroundWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof RgbBackgroundWhereInput>;
}

@ArgsType()
export class DeleteOneRgbBackgroundArgs {
    @Field(() => RgbBackgroundWhereUniqueInput, {nullable:false})
    @Type(() => RgbBackgroundWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<RgbBackgroundWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstRgbBackgroundOrThrowArgs {
    @Field(() => RgbBackgroundWhereInput, {nullable:true})
    @Type(() => RgbBackgroundWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof RgbBackgroundWhereInput>;
    @Field(() => [RgbBackgroundOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RgbBackgroundOrderByWithRelationInput>;
    @Field(() => RgbBackgroundWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RgbBackgroundWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [RgbBackgroundScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RgbBackgroundScalarFieldEnum>;
}

@ArgsType()
export class FindFirstRgbBackgroundArgs {
    @Field(() => RgbBackgroundWhereInput, {nullable:true})
    @Type(() => RgbBackgroundWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof RgbBackgroundWhereInput>;
    @Field(() => [RgbBackgroundOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RgbBackgroundOrderByWithRelationInput>;
    @Field(() => RgbBackgroundWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RgbBackgroundWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [RgbBackgroundScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RgbBackgroundScalarFieldEnum>;
}

@ArgsType()
export class FindManyRgbBackgroundArgs {
    @Field(() => RgbBackgroundWhereInput, {nullable:true})
    @Type(() => RgbBackgroundWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof RgbBackgroundWhereInput>;
    @Field(() => [RgbBackgroundOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RgbBackgroundOrderByWithRelationInput>;
    @Field(() => RgbBackgroundWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RgbBackgroundWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [RgbBackgroundScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RgbBackgroundScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueRgbBackgroundOrThrowArgs {
    @Field(() => RgbBackgroundWhereUniqueInput, {nullable:false})
    @Type(() => RgbBackgroundWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<RgbBackgroundWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueRgbBackgroundArgs {
    @Field(() => RgbBackgroundWhereUniqueInput, {nullable:false})
    @Type(() => RgbBackgroundWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<RgbBackgroundWhereUniqueInput, 'id'>;
}

@ArgsType()
export class RgbBackgroundAggregateArgs {
    @Field(() => RgbBackgroundWhereInput, {nullable:true})
    @Type(() => RgbBackgroundWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof RgbBackgroundWhereInput>;
    @Field(() => [RgbBackgroundOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RgbBackgroundOrderByWithRelationInput>;
    @Field(() => RgbBackgroundWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RgbBackgroundWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => RgbBackgroundCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof RgbBackgroundCountAggregateInput>;
    @Field(() => RgbBackgroundAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof RgbBackgroundAvgAggregateInput>;
    @Field(() => RgbBackgroundSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof RgbBackgroundSumAggregateInput>;
    @Field(() => RgbBackgroundMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof RgbBackgroundMinAggregateInput>;
    @Field(() => RgbBackgroundMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof RgbBackgroundMaxAggregateInput>;
}

@InputType()
export class RgbBackgroundAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    r?: true;
    @Field(() => Boolean, {nullable:true})
    g?: true;
    @Field(() => Boolean, {nullable:true})
    b?: true;
    @Field(() => Boolean, {nullable:true})
    a?: true;
}

@ObjectType()
export class RgbBackgroundAvgAggregate {
    @Field(() => Float, {nullable:true})
    r?: number;
    @Field(() => Float, {nullable:true})
    g?: number;
    @Field(() => Float, {nullable:true})
    b?: number;
    @Field(() => Float, {nullable:true})
    a?: number;
}

@InputType()
export class RgbBackgroundAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    r?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    g?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    b?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    a?: keyof typeof SortOrder;
}

@InputType()
export class RgbBackgroundCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    r?: true;
    @Field(() => Boolean, {nullable:true})
    g?: true;
    @Field(() => Boolean, {nullable:true})
    b?: true;
    @Field(() => Boolean, {nullable:true})
    a?: true;
    @Field(() => Boolean, {nullable:true})
    hash?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class RgbBackgroundCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b!: number;
    @Field(() => Int, {nullable:false})
    a!: number;
    @Field(() => Int, {nullable:false})
    hash!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class RgbBackgroundCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    r?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    g?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    b?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    a?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    hash?: keyof typeof SortOrder;
}

@InputType()
export class RgbBackgroundCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b!: number;
    @Field(() => Float, {nullable:true})
    a?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(10)
    hash?: string;
}

@InputType()
export class RgbBackgroundCreateNestedOneWithoutHomeBlockInput {
    @Field(() => RgbBackgroundCreateWithoutHomeBlockInput, {nullable:true})
    @Type(() => RgbBackgroundCreateWithoutHomeBlockInput)
    create?: InstanceType<typeof RgbBackgroundCreateWithoutHomeBlockInput>;
    @Field(() => RgbBackgroundCreateOrConnectWithoutHomeBlockInput, {nullable:true})
    @Type(() => RgbBackgroundCreateOrConnectWithoutHomeBlockInput)
    connectOrCreate?: InstanceType<typeof RgbBackgroundCreateOrConnectWithoutHomeBlockInput>;
    @Field(() => RgbBackgroundWhereUniqueInput, {nullable:true})
    @Type(() => RgbBackgroundWhereUniqueInput)
    connect?: Prisma.AtLeast<RgbBackgroundWhereUniqueInput, 'id'>;
}

@InputType()
export class RgbBackgroundCreateOrConnectWithoutHomeBlockInput {
    @Field(() => RgbBackgroundWhereUniqueInput, {nullable:false})
    @Type(() => RgbBackgroundWhereUniqueInput)
    where!: Prisma.AtLeast<RgbBackgroundWhereUniqueInput, 'id'>;
    @Field(() => RgbBackgroundCreateWithoutHomeBlockInput, {nullable:false})
    @Type(() => RgbBackgroundCreateWithoutHomeBlockInput)
    create!: InstanceType<typeof RgbBackgroundCreateWithoutHomeBlockInput>;
}

@InputType()
export class RgbBackgroundCreateWithoutHomeBlockInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b!: number;
    @Field(() => Float, {nullable:true})
    a?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(10)
    hash?: string;
}

@InputType()
export class RgbBackgroundCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b!: number;
    @Field(() => Float, {nullable:true})
    a?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(10)
    hash?: string;
    @Field(() => HomeBlockCreateNestedOneWithoutRgbBackgroundInput, {nullable:true})
    homeBlock?: InstanceType<typeof HomeBlockCreateNestedOneWithoutRgbBackgroundInput>;
}

@ArgsType()
export class RgbBackgroundGroupByArgs {
    @Field(() => RgbBackgroundWhereInput, {nullable:true})
    @Type(() => RgbBackgroundWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof RgbBackgroundWhereInput>;
    @Field(() => [RgbBackgroundOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RgbBackgroundOrderByWithAggregationInput>;
    @Field(() => [RgbBackgroundScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof RgbBackgroundScalarFieldEnum>;
    @Field(() => RgbBackgroundScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof RgbBackgroundScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => RgbBackgroundCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof RgbBackgroundCountAggregateInput>;
    @Field(() => RgbBackgroundAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof RgbBackgroundAvgAggregateInput>;
    @Field(() => RgbBackgroundSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof RgbBackgroundSumAggregateInput>;
    @Field(() => RgbBackgroundMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof RgbBackgroundMinAggregateInput>;
    @Field(() => RgbBackgroundMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof RgbBackgroundMaxAggregateInput>;
}

@ObjectType()
export class RgbBackgroundGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b!: number;
    @Field(() => Float, {nullable:true})
    a?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(10)
    hash?: string;
    @Field(() => RgbBackgroundCountAggregate, {nullable:true})
    _count?: InstanceType<typeof RgbBackgroundCountAggregate>;
    @Field(() => RgbBackgroundAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof RgbBackgroundAvgAggregate>;
    @Field(() => RgbBackgroundSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof RgbBackgroundSumAggregate>;
    @Field(() => RgbBackgroundMinAggregate, {nullable:true})
    _min?: InstanceType<typeof RgbBackgroundMinAggregate>;
    @Field(() => RgbBackgroundMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof RgbBackgroundMaxAggregate>;
}

@InputType()
export class RgbBackgroundMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    r?: true;
    @Field(() => Boolean, {nullable:true})
    g?: true;
    @Field(() => Boolean, {nullable:true})
    b?: true;
    @Field(() => Boolean, {nullable:true})
    a?: true;
    @Field(() => Boolean, {nullable:true})
    hash?: true;
}

@ObjectType()
export class RgbBackgroundMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b?: number;
    @Field(() => Float, {nullable:true})
    a?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(10)
    hash?: string;
}

@InputType()
export class RgbBackgroundMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    r?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    g?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    b?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    a?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    hash?: keyof typeof SortOrder;
}

@InputType()
export class RgbBackgroundMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    r?: true;
    @Field(() => Boolean, {nullable:true})
    g?: true;
    @Field(() => Boolean, {nullable:true})
    b?: true;
    @Field(() => Boolean, {nullable:true})
    a?: true;
    @Field(() => Boolean, {nullable:true})
    hash?: true;
}

@ObjectType()
export class RgbBackgroundMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b?: number;
    @Field(() => Float, {nullable:true})
    a?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(10)
    hash?: string;
}

@InputType()
export class RgbBackgroundMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    r?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    g?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    b?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    a?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    hash?: keyof typeof SortOrder;
}

@InputType()
export class RgbBackgroundOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    r?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    g?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    b?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    a?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    hash?: InstanceType<typeof SortOrderInput>;
    @Field(() => RgbBackgroundCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof RgbBackgroundCountOrderByAggregateInput>;
    @Field(() => RgbBackgroundAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof RgbBackgroundAvgOrderByAggregateInput>;
    @Field(() => RgbBackgroundMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof RgbBackgroundMaxOrderByAggregateInput>;
    @Field(() => RgbBackgroundMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof RgbBackgroundMinOrderByAggregateInput>;
    @Field(() => RgbBackgroundSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof RgbBackgroundSumOrderByAggregateInput>;
}

@InputType()
export class RgbBackgroundOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    r?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    g?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    b?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    a?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    hash?: InstanceType<typeof SortOrderInput>;
    @Field(() => HomeBlockOrderByWithRelationInput, {nullable:true})
    homeBlock?: InstanceType<typeof HomeBlockOrderByWithRelationInput>;
}

@InputType()
export class RgbBackgroundRelationFilter {
    @Field(() => RgbBackgroundWhereInput, {nullable:true})
    is?: InstanceType<typeof RgbBackgroundWhereInput>;
    @Field(() => RgbBackgroundWhereInput, {nullable:true})
    isNot?: InstanceType<typeof RgbBackgroundWhereInput>;
}

@InputType()
export class RgbBackgroundScalarWhereWithAggregatesInput {
    @Field(() => [RgbBackgroundScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RgbBackgroundScalarWhereWithAggregatesInput>;
    @Field(() => [RgbBackgroundScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RgbBackgroundScalarWhereWithAggregatesInput>;
    @Field(() => [RgbBackgroundScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RgbBackgroundScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    r?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    g?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    b?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    a?: InstanceType<typeof FloatWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    hash?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class RgbBackgroundSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    r?: true;
    @Field(() => Boolean, {nullable:true})
    g?: true;
    @Field(() => Boolean, {nullable:true})
    b?: true;
    @Field(() => Boolean, {nullable:true})
    a?: true;
}

@ObjectType()
export class RgbBackgroundSumAggregate {
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b?: number;
    @Field(() => Float, {nullable:true})
    a?: number;
}

@InputType()
export class RgbBackgroundSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    r?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    g?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    b?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    a?: keyof typeof SortOrder;
}

@InputType()
export class RgbBackgroundUncheckedCreateWithoutHomeBlockInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b!: number;
    @Field(() => Float, {nullable:true})
    a?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(10)
    hash?: string;
}

@InputType()
export class RgbBackgroundUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b!: number;
    @Field(() => Float, {nullable:true})
    a?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(10)
    hash?: string;
    @Field(() => HomeBlockUncheckedCreateNestedOneWithoutRgbBackgroundInput, {nullable:true})
    homeBlock?: InstanceType<typeof HomeBlockUncheckedCreateNestedOneWithoutRgbBackgroundInput>;
}

@InputType()
export class RgbBackgroundUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b?: number;
    @Field(() => Float, {nullable:true})
    a?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(10)
    hash?: string;
}

@InputType()
export class RgbBackgroundUncheckedUpdateWithoutHomeBlockInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b?: number;
    @Field(() => Float, {nullable:true})
    a?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(10)
    hash?: string;
}

@InputType()
export class RgbBackgroundUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b?: number;
    @Field(() => Float, {nullable:true})
    a?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(10)
    hash?: string;
    @Field(() => HomeBlockUncheckedUpdateOneWithoutRgbBackgroundNestedInput, {nullable:true})
    homeBlock?: InstanceType<typeof HomeBlockUncheckedUpdateOneWithoutRgbBackgroundNestedInput>;
}

@InputType()
export class RgbBackgroundUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b?: number;
    @Field(() => Float, {nullable:true})
    a?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(10)
    hash?: string;
}

@InputType()
export class RgbBackgroundUpdateOneRequiredWithoutHomeBlockNestedInput {
    @Field(() => RgbBackgroundCreateWithoutHomeBlockInput, {nullable:true})
    @Type(() => RgbBackgroundCreateWithoutHomeBlockInput)
    create?: InstanceType<typeof RgbBackgroundCreateWithoutHomeBlockInput>;
    @Field(() => RgbBackgroundCreateOrConnectWithoutHomeBlockInput, {nullable:true})
    @Type(() => RgbBackgroundCreateOrConnectWithoutHomeBlockInput)
    connectOrCreate?: InstanceType<typeof RgbBackgroundCreateOrConnectWithoutHomeBlockInput>;
    @Field(() => RgbBackgroundUpsertWithoutHomeBlockInput, {nullable:true})
    @Type(() => RgbBackgroundUpsertWithoutHomeBlockInput)
    upsert?: InstanceType<typeof RgbBackgroundUpsertWithoutHomeBlockInput>;
    @Field(() => RgbBackgroundWhereUniqueInput, {nullable:true})
    @Type(() => RgbBackgroundWhereUniqueInput)
    connect?: Prisma.AtLeast<RgbBackgroundWhereUniqueInput, 'id'>;
    @Field(() => RgbBackgroundUpdateToOneWithWhereWithoutHomeBlockInput, {nullable:true})
    @Type(() => RgbBackgroundUpdateToOneWithWhereWithoutHomeBlockInput)
    update?: InstanceType<typeof RgbBackgroundUpdateToOneWithWhereWithoutHomeBlockInput>;
}

@InputType()
export class RgbBackgroundUpdateToOneWithWhereWithoutHomeBlockInput {
    @Field(() => RgbBackgroundWhereInput, {nullable:true})
    @Type(() => RgbBackgroundWhereInput)
    where?: InstanceType<typeof RgbBackgroundWhereInput>;
    @Field(() => RgbBackgroundUpdateWithoutHomeBlockInput, {nullable:false})
    @Type(() => RgbBackgroundUpdateWithoutHomeBlockInput)
    data!: InstanceType<typeof RgbBackgroundUpdateWithoutHomeBlockInput>;
}

@InputType()
export class RgbBackgroundUpdateWithoutHomeBlockInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b?: number;
    @Field(() => Float, {nullable:true})
    a?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(10)
    hash?: string;
}

@InputType()
export class RgbBackgroundUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    r?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    g?: number;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    b?: number;
    @Field(() => Float, {nullable:true})
    a?: number;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(10)
    hash?: string;
    @Field(() => HomeBlockUpdateOneWithoutRgbBackgroundNestedInput, {nullable:true})
    homeBlock?: InstanceType<typeof HomeBlockUpdateOneWithoutRgbBackgroundNestedInput>;
}

@InputType()
export class RgbBackgroundUpsertWithoutHomeBlockInput {
    @Field(() => RgbBackgroundUpdateWithoutHomeBlockInput, {nullable:false})
    @Type(() => RgbBackgroundUpdateWithoutHomeBlockInput)
    update!: InstanceType<typeof RgbBackgroundUpdateWithoutHomeBlockInput>;
    @Field(() => RgbBackgroundCreateWithoutHomeBlockInput, {nullable:false})
    @Type(() => RgbBackgroundCreateWithoutHomeBlockInput)
    create!: InstanceType<typeof RgbBackgroundCreateWithoutHomeBlockInput>;
    @Field(() => RgbBackgroundWhereInput, {nullable:true})
    @Type(() => RgbBackgroundWhereInput)
    where?: InstanceType<typeof RgbBackgroundWhereInput>;
}

@InputType()
export class RgbBackgroundWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [RgbBackgroundWhereInput], {nullable:true})
    AND?: Array<RgbBackgroundWhereInput>;
    @Field(() => [RgbBackgroundWhereInput], {nullable:true})
    OR?: Array<RgbBackgroundWhereInput>;
    @Field(() => [RgbBackgroundWhereInput], {nullable:true})
    NOT?: Array<RgbBackgroundWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    r?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    g?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    b?: InstanceType<typeof IntFilter>;
    @Field(() => FloatFilter, {nullable:true})
    a?: InstanceType<typeof FloatFilter>;
    @Field(() => StringFilter, {nullable:true})
    hash?: InstanceType<typeof StringFilter>;
    @Field(() => HomeBlockRelationFilter, {nullable:true})
    homeBlock?: InstanceType<typeof HomeBlockRelationFilter>;
}

@InputType()
export class RgbBackgroundWhereInput {
    @Field(() => [RgbBackgroundWhereInput], {nullable:true})
    AND?: Array<RgbBackgroundWhereInput>;
    @Field(() => [RgbBackgroundWhereInput], {nullable:true})
    OR?: Array<RgbBackgroundWhereInput>;
    @Field(() => [RgbBackgroundWhereInput], {nullable:true})
    NOT?: Array<RgbBackgroundWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    r?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    g?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    b?: InstanceType<typeof IntFilter>;
    @Field(() => FloatFilter, {nullable:true})
    a?: InstanceType<typeof FloatFilter>;
    @Field(() => StringFilter, {nullable:true})
    hash?: InstanceType<typeof StringFilter>;
    @Field(() => HomeBlockRelationFilter, {nullable:true})
    homeBlock?: InstanceType<typeof HomeBlockRelationFilter>;
}

@ObjectType()
export class RgbBackground {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Int, {nullable:false})
    r!: number;
    @Field(() => Int, {nullable:false})
    g!: number;
    @Field(() => Int, {nullable:false})
    b!: number;
    @Field(() => Float, {nullable:true})
    a!: number | null;
    @Field(() => String, {nullable:true})
    hash!: string | null;
    @Field(() => HomeBlock, {nullable:true})
    homeBlock?: InstanceType<typeof HomeBlock> | null;
}

@ArgsType()
export class UpdateManyRgbBackgroundArgs {
    @Field(() => RgbBackgroundUpdateManyMutationInput, {nullable:false})
    @Type(() => RgbBackgroundUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof RgbBackgroundUpdateManyMutationInput>;
    @Field(() => RgbBackgroundWhereInput, {nullable:true})
    @Type(() => RgbBackgroundWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof RgbBackgroundWhereInput>;
}

@ArgsType()
export class UpdateOneRgbBackgroundArgs {
    @Field(() => RgbBackgroundUpdateInput, {nullable:false})
    @Type(() => RgbBackgroundUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof RgbBackgroundUpdateInput>;
    @Field(() => RgbBackgroundWhereUniqueInput, {nullable:false})
    @Type(() => RgbBackgroundWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<RgbBackgroundWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneRgbBackgroundArgs {
    @Field(() => RgbBackgroundWhereUniqueInput, {nullable:false})
    @Type(() => RgbBackgroundWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<RgbBackgroundWhereUniqueInput, 'id'>;
    @Field(() => RgbBackgroundCreateInput, {nullable:false})
    @Type(() => RgbBackgroundCreateInput)
    create!: InstanceType<typeof RgbBackgroundCreateInput>;
    @Field(() => RgbBackgroundUpdateInput, {nullable:false})
    @Type(() => RgbBackgroundUpdateInput)
    update!: InstanceType<typeof RgbBackgroundUpdateInput>;
}

@ObjectType()
export class AggregateSize {
    @Field(() => SizeCountAggregate, {nullable:true})
    _count?: InstanceType<typeof SizeCountAggregate>;
    @Field(() => SizeAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof SizeAvgAggregate>;
    @Field(() => SizeSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof SizeSumAggregate>;
    @Field(() => SizeMinAggregate, {nullable:true})
    _min?: InstanceType<typeof SizeMinAggregate>;
    @Field(() => SizeMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof SizeMaxAggregate>;
}

@ArgsType()
export class CreateManySizeArgs {
    @Field(() => [SizeCreateManyInput], {nullable:false})
    @Type(() => SizeCreateManyInput)
    @ValidateNested()
    data!: Array<SizeCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneSizeArgs {
    @Field(() => SizeCreateInput, {nullable:false})
    @Type(() => SizeCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof SizeCreateInput>;
}

@ArgsType()
export class DeleteManySizeArgs {
    @Field(() => SizeWhereInput, {nullable:true})
    @Type(() => SizeWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof SizeWhereInput>;
}

@ArgsType()
export class DeleteOneSizeArgs {
    @Field(() => SizeWhereUniqueInput, {nullable:false})
    @Type(() => SizeWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<SizeWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstSizeOrThrowArgs {
    @Field(() => SizeWhereInput, {nullable:true})
    @Type(() => SizeWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof SizeWhereInput>;
    @Field(() => [SizeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SizeOrderByWithRelationInput>;
    @Field(() => SizeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SizeWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [SizeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SizeScalarFieldEnum>;
}

@ArgsType()
export class FindFirstSizeArgs {
    @Field(() => SizeWhereInput, {nullable:true})
    @Type(() => SizeWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof SizeWhereInput>;
    @Field(() => [SizeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SizeOrderByWithRelationInput>;
    @Field(() => SizeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SizeWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [SizeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SizeScalarFieldEnum>;
}

@ArgsType()
export class FindManySizeArgs {
    @Field(() => SizeWhereInput, {nullable:true})
    @Type(() => SizeWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof SizeWhereInput>;
    @Field(() => [SizeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SizeOrderByWithRelationInput>;
    @Field(() => SizeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SizeWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [SizeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SizeScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueSizeOrThrowArgs {
    @Field(() => SizeWhereUniqueInput, {nullable:false})
    @Type(() => SizeWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<SizeWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueSizeArgs {
    @Field(() => SizeWhereUniqueInput, {nullable:false})
    @Type(() => SizeWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<SizeWhereUniqueInput, 'id'>;
}

@ArgsType()
export class SizeAggregateArgs {
    @Field(() => SizeWhereInput, {nullable:true})
    @Type(() => SizeWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof SizeWhereInput>;
    @Field(() => [SizeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SizeOrderByWithRelationInput>;
    @Field(() => SizeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SizeWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => SizeCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof SizeCountAggregateInput>;
    @Field(() => SizeAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof SizeAvgAggregateInput>;
    @Field(() => SizeSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof SizeSumAggregateInput>;
    @Field(() => SizeMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof SizeMinAggregateInput>;
    @Field(() => SizeMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof SizeMaxAggregateInput>;
}

@InputType()
export class SizeAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    volume?: true;
}

@ObjectType()
export class SizeAvgAggregate {
    @Field(() => Float, {nullable:true})
    volume?: number;
}

@InputType()
export class SizeAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    volume?: keyof typeof SortOrder;
}

@InputType()
export class SizeCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    volume?: true;
    @Field(() => Boolean, {nullable:true})
    menuItemId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class SizeCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    volume!: number;
    @Field(() => Int, {nullable:false})
    menuItemId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class SizeCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    volume?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    menuItemId?: keyof typeof SortOrder;
}

@InputType()
export class SizeCreateManyMenuItemInputEnvelope {
    @Field(() => [SizeCreateManyMenuItemInput], {nullable:false})
    @Type(() => SizeCreateManyMenuItemInput)
    data!: Array<SizeCreateManyMenuItemInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class SizeCreateManyMenuItemInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    volume!: number;
}

@InputType()
export class SizeCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    volume!: number;
    @Field(() => String, {nullable:false})
    menuItemId!: string;
}

@InputType()
export class SizeCreateNestedManyWithoutMenuItemInput {
    @Field(() => [SizeCreateWithoutMenuItemInput], {nullable:true})
    @Type(() => SizeCreateWithoutMenuItemInput)
    create?: Array<SizeCreateWithoutMenuItemInput>;
    @Field(() => [SizeCreateOrConnectWithoutMenuItemInput], {nullable:true})
    @Type(() => SizeCreateOrConnectWithoutMenuItemInput)
    connectOrCreate?: Array<SizeCreateOrConnectWithoutMenuItemInput>;
    @Field(() => SizeCreateManyMenuItemInputEnvelope, {nullable:true})
    @Type(() => SizeCreateManyMenuItemInputEnvelope)
    createMany?: InstanceType<typeof SizeCreateManyMenuItemInputEnvelope>;
    @Field(() => [SizeWhereUniqueInput], {nullable:true})
    @Type(() => SizeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SizeWhereUniqueInput, 'id'>>;
}

@InputType()
export class SizeCreateOrConnectWithoutMenuItemInput {
    @Field(() => SizeWhereUniqueInput, {nullable:false})
    @Type(() => SizeWhereUniqueInput)
    where!: Prisma.AtLeast<SizeWhereUniqueInput, 'id'>;
    @Field(() => SizeCreateWithoutMenuItemInput, {nullable:false})
    @Type(() => SizeCreateWithoutMenuItemInput)
    create!: InstanceType<typeof SizeCreateWithoutMenuItemInput>;
}

@InputType()
export class SizeCreateWithoutMenuItemInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    volume!: number;
}

@InputType()
export class SizeCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    volume!: number;
    @Field(() => MenuItemCreateNestedOneWithoutSizesInput, {nullable:false})
    menuItem!: InstanceType<typeof MenuItemCreateNestedOneWithoutSizesInput>;
}

@ArgsType()
export class SizeGroupByArgs {
    @Field(() => SizeWhereInput, {nullable:true})
    @Type(() => SizeWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof SizeWhereInput>;
    @Field(() => [SizeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SizeOrderByWithAggregationInput>;
    @Field(() => [SizeScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SizeScalarFieldEnum>;
    @Field(() => SizeScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof SizeScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => SizeCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof SizeCountAggregateInput>;
    @Field(() => SizeAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof SizeAvgAggregateInput>;
    @Field(() => SizeSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof SizeSumAggregateInput>;
    @Field(() => SizeMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof SizeMinAggregateInput>;
    @Field(() => SizeMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof SizeMaxAggregateInput>;
}

@ObjectType()
export class SizeGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    volume!: number;
    @Field(() => String, {nullable:false})
    menuItemId!: string;
    @Field(() => SizeCountAggregate, {nullable:true})
    _count?: InstanceType<typeof SizeCountAggregate>;
    @Field(() => SizeAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof SizeAvgAggregate>;
    @Field(() => SizeSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof SizeSumAggregate>;
    @Field(() => SizeMinAggregate, {nullable:true})
    _min?: InstanceType<typeof SizeMinAggregate>;
    @Field(() => SizeMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof SizeMaxAggregate>;
}

@InputType()
export class SizeListRelationFilter {
    @Field(() => SizeWhereInput, {nullable:true})
    every?: InstanceType<typeof SizeWhereInput>;
    @Field(() => SizeWhereInput, {nullable:true})
    some?: InstanceType<typeof SizeWhereInput>;
    @Field(() => SizeWhereInput, {nullable:true})
    none?: InstanceType<typeof SizeWhereInput>;
}

@InputType()
export class SizeMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    volume?: true;
    @Field(() => Boolean, {nullable:true})
    menuItemId?: true;
}

@ObjectType()
export class SizeMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    volume?: number;
    @Field(() => String, {nullable:true})
    menuItemId?: string;
}

@InputType()
export class SizeMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    volume?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    menuItemId?: keyof typeof SortOrder;
}

@InputType()
export class SizeMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    volume?: true;
    @Field(() => Boolean, {nullable:true})
    menuItemId?: true;
}

@ObjectType()
export class SizeMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    volume?: number;
    @Field(() => String, {nullable:true})
    menuItemId?: string;
}

@InputType()
export class SizeMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    volume?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    menuItemId?: keyof typeof SortOrder;
}

@InputType()
export class SizeOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class SizeOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    volume?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    menuItemId?: keyof typeof SortOrder;
    @Field(() => SizeCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof SizeCountOrderByAggregateInput>;
    @Field(() => SizeAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof SizeAvgOrderByAggregateInput>;
    @Field(() => SizeMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof SizeMaxOrderByAggregateInput>;
    @Field(() => SizeMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof SizeMinOrderByAggregateInput>;
    @Field(() => SizeSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof SizeSumOrderByAggregateInput>;
}

@InputType()
export class SizeOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    volume?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    menuItemId?: keyof typeof SortOrder;
    @Field(() => MenuItemOrderByWithRelationInput, {nullable:true})
    menuItem?: InstanceType<typeof MenuItemOrderByWithRelationInput>;
}

@InputType()
export class SizeScalarWhereWithAggregatesInput {
    @Field(() => [SizeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SizeScalarWhereWithAggregatesInput>;
    @Field(() => [SizeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SizeScalarWhereWithAggregatesInput>;
    @Field(() => [SizeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SizeScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    volume?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    menuItemId?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class SizeScalarWhereInput {
    @Field(() => [SizeScalarWhereInput], {nullable:true})
    AND?: Array<SizeScalarWhereInput>;
    @Field(() => [SizeScalarWhereInput], {nullable:true})
    OR?: Array<SizeScalarWhereInput>;
    @Field(() => [SizeScalarWhereInput], {nullable:true})
    NOT?: Array<SizeScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    volume?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    menuItemId?: InstanceType<typeof StringFilter>;
}

@InputType()
export class SizeSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    volume?: true;
}

@ObjectType()
export class SizeSumAggregate {
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    volume?: number;
}

@InputType()
export class SizeSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    volume?: keyof typeof SortOrder;
}

@InputType()
export class SizeUncheckedCreateNestedManyWithoutMenuItemInput {
    @Field(() => [SizeCreateWithoutMenuItemInput], {nullable:true})
    @Type(() => SizeCreateWithoutMenuItemInput)
    create?: Array<SizeCreateWithoutMenuItemInput>;
    @Field(() => [SizeCreateOrConnectWithoutMenuItemInput], {nullable:true})
    @Type(() => SizeCreateOrConnectWithoutMenuItemInput)
    connectOrCreate?: Array<SizeCreateOrConnectWithoutMenuItemInput>;
    @Field(() => SizeCreateManyMenuItemInputEnvelope, {nullable:true})
    @Type(() => SizeCreateManyMenuItemInputEnvelope)
    createMany?: InstanceType<typeof SizeCreateManyMenuItemInputEnvelope>;
    @Field(() => [SizeWhereUniqueInput], {nullable:true})
    @Type(() => SizeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SizeWhereUniqueInput, 'id'>>;
}

@InputType()
export class SizeUncheckedCreateWithoutMenuItemInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    volume!: number;
}

@InputType()
export class SizeUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => Int, {nullable:false})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    volume!: number;
    @Field(() => String, {nullable:false})
    menuItemId!: string;
}

@InputType()
export class SizeUncheckedUpdateManyWithoutMenuItemNestedInput {
    @Field(() => [SizeCreateWithoutMenuItemInput], {nullable:true})
    @Type(() => SizeCreateWithoutMenuItemInput)
    create?: Array<SizeCreateWithoutMenuItemInput>;
    @Field(() => [SizeCreateOrConnectWithoutMenuItemInput], {nullable:true})
    @Type(() => SizeCreateOrConnectWithoutMenuItemInput)
    connectOrCreate?: Array<SizeCreateOrConnectWithoutMenuItemInput>;
    @Field(() => [SizeUpsertWithWhereUniqueWithoutMenuItemInput], {nullable:true})
    @Type(() => SizeUpsertWithWhereUniqueWithoutMenuItemInput)
    upsert?: Array<SizeUpsertWithWhereUniqueWithoutMenuItemInput>;
    @Field(() => SizeCreateManyMenuItemInputEnvelope, {nullable:true})
    @Type(() => SizeCreateManyMenuItemInputEnvelope)
    createMany?: InstanceType<typeof SizeCreateManyMenuItemInputEnvelope>;
    @Field(() => [SizeWhereUniqueInput], {nullable:true})
    @Type(() => SizeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SizeWhereUniqueInput, 'id'>>;
    @Field(() => [SizeWhereUniqueInput], {nullable:true})
    @Type(() => SizeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SizeWhereUniqueInput, 'id'>>;
    @Field(() => [SizeWhereUniqueInput], {nullable:true})
    @Type(() => SizeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SizeWhereUniqueInput, 'id'>>;
    @Field(() => [SizeWhereUniqueInput], {nullable:true})
    @Type(() => SizeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SizeWhereUniqueInput, 'id'>>;
    @Field(() => [SizeUpdateWithWhereUniqueWithoutMenuItemInput], {nullable:true})
    @Type(() => SizeUpdateWithWhereUniqueWithoutMenuItemInput)
    update?: Array<SizeUpdateWithWhereUniqueWithoutMenuItemInput>;
    @Field(() => [SizeUpdateManyWithWhereWithoutMenuItemInput], {nullable:true})
    @Type(() => SizeUpdateManyWithWhereWithoutMenuItemInput)
    updateMany?: Array<SizeUpdateManyWithWhereWithoutMenuItemInput>;
    @Field(() => [SizeScalarWhereInput], {nullable:true})
    @Type(() => SizeScalarWhereInput)
    deleteMany?: Array<SizeScalarWhereInput>;
}

@InputType()
export class SizeUncheckedUpdateManyWithoutMenuItemInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    volume?: number;
}

@InputType()
export class SizeUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    volume?: number;
    @Field(() => String, {nullable:true})
    menuItemId?: string;
}

@InputType()
export class SizeUncheckedUpdateWithoutMenuItemInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    volume?: number;
}

@InputType()
export class SizeUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    volume?: number;
    @Field(() => String, {nullable:true})
    menuItemId?: string;
}

@InputType()
export class SizeUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    volume?: number;
}

@InputType()
export class SizeUpdateManyWithWhereWithoutMenuItemInput {
    @Field(() => SizeScalarWhereInput, {nullable:false})
    @Type(() => SizeScalarWhereInput)
    where!: InstanceType<typeof SizeScalarWhereInput>;
    @Field(() => SizeUpdateManyMutationInput, {nullable:false})
    @Type(() => SizeUpdateManyMutationInput)
    data!: InstanceType<typeof SizeUpdateManyMutationInput>;
}

@InputType()
export class SizeUpdateManyWithoutMenuItemNestedInput {
    @Field(() => [SizeCreateWithoutMenuItemInput], {nullable:true})
    @Type(() => SizeCreateWithoutMenuItemInput)
    create?: Array<SizeCreateWithoutMenuItemInput>;
    @Field(() => [SizeCreateOrConnectWithoutMenuItemInput], {nullable:true})
    @Type(() => SizeCreateOrConnectWithoutMenuItemInput)
    connectOrCreate?: Array<SizeCreateOrConnectWithoutMenuItemInput>;
    @Field(() => [SizeUpsertWithWhereUniqueWithoutMenuItemInput], {nullable:true})
    @Type(() => SizeUpsertWithWhereUniqueWithoutMenuItemInput)
    upsert?: Array<SizeUpsertWithWhereUniqueWithoutMenuItemInput>;
    @Field(() => SizeCreateManyMenuItemInputEnvelope, {nullable:true})
    @Type(() => SizeCreateManyMenuItemInputEnvelope)
    createMany?: InstanceType<typeof SizeCreateManyMenuItemInputEnvelope>;
    @Field(() => [SizeWhereUniqueInput], {nullable:true})
    @Type(() => SizeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SizeWhereUniqueInput, 'id'>>;
    @Field(() => [SizeWhereUniqueInput], {nullable:true})
    @Type(() => SizeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SizeWhereUniqueInput, 'id'>>;
    @Field(() => [SizeWhereUniqueInput], {nullable:true})
    @Type(() => SizeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SizeWhereUniqueInput, 'id'>>;
    @Field(() => [SizeWhereUniqueInput], {nullable:true})
    @Type(() => SizeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SizeWhereUniqueInput, 'id'>>;
    @Field(() => [SizeUpdateWithWhereUniqueWithoutMenuItemInput], {nullable:true})
    @Type(() => SizeUpdateWithWhereUniqueWithoutMenuItemInput)
    update?: Array<SizeUpdateWithWhereUniqueWithoutMenuItemInput>;
    @Field(() => [SizeUpdateManyWithWhereWithoutMenuItemInput], {nullable:true})
    @Type(() => SizeUpdateManyWithWhereWithoutMenuItemInput)
    updateMany?: Array<SizeUpdateManyWithWhereWithoutMenuItemInput>;
    @Field(() => [SizeScalarWhereInput], {nullable:true})
    @Type(() => SizeScalarWhereInput)
    deleteMany?: Array<SizeScalarWhereInput>;
}

@InputType()
export class SizeUpdateWithWhereUniqueWithoutMenuItemInput {
    @Field(() => SizeWhereUniqueInput, {nullable:false})
    @Type(() => SizeWhereUniqueInput)
    where!: Prisma.AtLeast<SizeWhereUniqueInput, 'id'>;
    @Field(() => SizeUpdateWithoutMenuItemInput, {nullable:false})
    @Type(() => SizeUpdateWithoutMenuItemInput)
    data!: InstanceType<typeof SizeUpdateWithoutMenuItemInput>;
}

@InputType()
export class SizeUpdateWithoutMenuItemInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    volume?: number;
}

@InputType()
export class SizeUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => Int, {nullable:true})
    @Validator.IsInt()
    @Validator.Min(0)
    @Validator.Max(255)
    volume?: number;
    @Field(() => MenuItemUpdateOneRequiredWithoutSizesNestedInput, {nullable:true})
    menuItem?: InstanceType<typeof MenuItemUpdateOneRequiredWithoutSizesNestedInput>;
}

@InputType()
export class SizeUpsertWithWhereUniqueWithoutMenuItemInput {
    @Field(() => SizeWhereUniqueInput, {nullable:false})
    @Type(() => SizeWhereUniqueInput)
    where!: Prisma.AtLeast<SizeWhereUniqueInput, 'id'>;
    @Field(() => SizeUpdateWithoutMenuItemInput, {nullable:false})
    @Type(() => SizeUpdateWithoutMenuItemInput)
    update!: InstanceType<typeof SizeUpdateWithoutMenuItemInput>;
    @Field(() => SizeCreateWithoutMenuItemInput, {nullable:false})
    @Type(() => SizeCreateWithoutMenuItemInput)
    create!: InstanceType<typeof SizeCreateWithoutMenuItemInput>;
}

@InputType()
export class SizeWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [SizeWhereInput], {nullable:true})
    AND?: Array<SizeWhereInput>;
    @Field(() => [SizeWhereInput], {nullable:true})
    OR?: Array<SizeWhereInput>;
    @Field(() => [SizeWhereInput], {nullable:true})
    NOT?: Array<SizeWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    volume?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    menuItemId?: InstanceType<typeof StringFilter>;
    @Field(() => MenuItemRelationFilter, {nullable:true})
    menuItem?: InstanceType<typeof MenuItemRelationFilter>;
}

@InputType()
export class SizeWhereInput {
    @Field(() => [SizeWhereInput], {nullable:true})
    AND?: Array<SizeWhereInput>;
    @Field(() => [SizeWhereInput], {nullable:true})
    OR?: Array<SizeWhereInput>;
    @Field(() => [SizeWhereInput], {nullable:true})
    NOT?: Array<SizeWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    volume?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    menuItemId?: InstanceType<typeof StringFilter>;
    @Field(() => MenuItemRelationFilter, {nullable:true})
    menuItem?: InstanceType<typeof MenuItemRelationFilter>;
}

@ObjectType()
export class Size {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Int, {nullable:false})
    volume!: number;
    @Field(() => String, {nullable:false})
    menuItemId!: string;
    @Field(() => MenuItem, {nullable:false})
    menuItem?: InstanceType<typeof MenuItem>;
}

@ArgsType()
export class UpdateManySizeArgs {
    @Field(() => SizeUpdateManyMutationInput, {nullable:false})
    @Type(() => SizeUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof SizeUpdateManyMutationInput>;
    @Field(() => SizeWhereInput, {nullable:true})
    @Type(() => SizeWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof SizeWhereInput>;
}

@ArgsType()
export class UpdateOneSizeArgs {
    @Field(() => SizeUpdateInput, {nullable:false})
    @Type(() => SizeUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof SizeUpdateInput>;
    @Field(() => SizeWhereUniqueInput, {nullable:false})
    @Type(() => SizeWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<SizeWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneSizeArgs {
    @Field(() => SizeWhereUniqueInput, {nullable:false})
    @Type(() => SizeWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<SizeWhereUniqueInput, 'id'>;
    @Field(() => SizeCreateInput, {nullable:false})
    @Type(() => SizeCreateInput)
    create!: InstanceType<typeof SizeCreateInput>;
    @Field(() => SizeUpdateInput, {nullable:false})
    @Type(() => SizeUpdateInput)
    update!: InstanceType<typeof SizeUpdateInput>;
}

@ObjectType()
export class AggregateSubCategory {
    @Field(() => SubCategoryCountAggregate, {nullable:true})
    _count?: InstanceType<typeof SubCategoryCountAggregate>;
    @Field(() => SubCategoryMinAggregate, {nullable:true})
    _min?: InstanceType<typeof SubCategoryMinAggregate>;
    @Field(() => SubCategoryMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof SubCategoryMaxAggregate>;
}

@ArgsType()
export class CreateManySubCategoryArgs {
    @Field(() => [SubCategoryCreateManyInput], {nullable:false})
    @Type(() => SubCategoryCreateManyInput)
    @ValidateNested()
    data!: Array<SubCategoryCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneSubCategoryArgs {
    @Field(() => SubCategoryCreateInput, {nullable:false})
    @Type(() => SubCategoryCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof SubCategoryCreateInput>;
}

@ArgsType()
export class DeleteManySubCategoryArgs {
    @Field(() => SubCategoryWhereInput, {nullable:true})
    @Type(() => SubCategoryWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof SubCategoryWhereInput>;
}

@ArgsType()
export class DeleteOneSubCategoryArgs {
    @Field(() => SubCategoryWhereUniqueInput, {nullable:false})
    @Type(() => SubCategoryWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id' | 'name'>;
}

@ArgsType()
export class FindFirstSubCategoryOrThrowArgs {
    @Field(() => SubCategoryWhereInput, {nullable:true})
    @Type(() => SubCategoryWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof SubCategoryWhereInput>;
    @Field(() => [SubCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SubCategoryOrderByWithRelationInput>;
    @Field(() => SubCategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id' | 'name'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [SubCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SubCategoryScalarFieldEnum>;
}

@ArgsType()
export class FindFirstSubCategoryArgs {
    @Field(() => SubCategoryWhereInput, {nullable:true})
    @Type(() => SubCategoryWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof SubCategoryWhereInput>;
    @Field(() => [SubCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SubCategoryOrderByWithRelationInput>;
    @Field(() => SubCategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id' | 'name'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [SubCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SubCategoryScalarFieldEnum>;
}

@ArgsType()
export class FindManySubCategoryArgs {
    @Field(() => SubCategoryWhereInput, {nullable:true})
    @Type(() => SubCategoryWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof SubCategoryWhereInput>;
    @Field(() => [SubCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SubCategoryOrderByWithRelationInput>;
    @Field(() => SubCategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id' | 'name'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [SubCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SubCategoryScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueSubCategoryOrThrowArgs {
    @Field(() => SubCategoryWhereUniqueInput, {nullable:false})
    @Type(() => SubCategoryWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id' | 'name'>;
}

@ArgsType()
export class FindUniqueSubCategoryArgs {
    @Field(() => SubCategoryWhereUniqueInput, {nullable:false})
    @Type(() => SubCategoryWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id' | 'name'>;
}

@ArgsType()
export class SubCategoryAggregateArgs {
    @Field(() => SubCategoryWhereInput, {nullable:true})
    @Type(() => SubCategoryWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof SubCategoryWhereInput>;
    @Field(() => [SubCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SubCategoryOrderByWithRelationInput>;
    @Field(() => SubCategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id' | 'name'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => SubCategoryCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof SubCategoryCountAggregateInput>;
    @Field(() => SubCategoryMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof SubCategoryMinAggregateInput>;
    @Field(() => SubCategoryMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof SubCategoryMaxAggregateInput>;
}

@InputType()
export class SubCategoryCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    path?: true;
    @Field(() => Boolean, {nullable:true})
    image_path?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    categoryId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class SubCategoryCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    path!: number;
    @Field(() => Int, {nullable:false})
    image_path!: number;
    @Field(() => Int, {nullable:false})
    description!: number;
    @Field(() => Int, {nullable:false})
    categoryId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class SubCategoryCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    path?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    image_path?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;
}

@ObjectType()
export class SubCategoryCount {
    @Field(() => Int, {nullable:false})
    menuItems?: number;
}

@InputType()
export class SubCategoryCreateManyCategoryInputEnvelope {
    @Field(() => [SubCategoryCreateManyCategoryInput], {nullable:false})
    @Type(() => SubCategoryCreateManyCategoryInput)
    data!: Array<SubCategoryCreateManyCategoryInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class SubCategoryCreateManyCategoryInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(25)
    @Validator.MinLength(3)
    path?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
}

@InputType()
export class SubCategoryCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(25)
    @Validator.MinLength(3)
    path?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    categoryId!: string;
}

@InputType()
export class SubCategoryCreateNestedManyWithoutCategoryInput {
    @Field(() => [SubCategoryCreateWithoutCategoryInput], {nullable:true})
    @Type(() => SubCategoryCreateWithoutCategoryInput)
    create?: Array<SubCategoryCreateWithoutCategoryInput>;
    @Field(() => [SubCategoryCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => SubCategoryCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<SubCategoryCreateOrConnectWithoutCategoryInput>;
    @Field(() => SubCategoryCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => SubCategoryCreateManyCategoryInputEnvelope)
    createMany?: InstanceType<typeof SubCategoryCreateManyCategoryInputEnvelope>;
    @Field(() => [SubCategoryWhereUniqueInput], {nullable:true})
    @Type(() => SubCategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id' | 'name'>>;
}

@InputType()
export class SubCategoryCreateNestedOneWithoutMenuItemsInput {
    @Field(() => SubCategoryCreateWithoutMenuItemsInput, {nullable:true})
    @Type(() => SubCategoryCreateWithoutMenuItemsInput)
    create?: InstanceType<typeof SubCategoryCreateWithoutMenuItemsInput>;
    @Field(() => SubCategoryCreateOrConnectWithoutMenuItemsInput, {nullable:true})
    @Type(() => SubCategoryCreateOrConnectWithoutMenuItemsInput)
    connectOrCreate?: InstanceType<typeof SubCategoryCreateOrConnectWithoutMenuItemsInput>;
    @Field(() => SubCategoryWhereUniqueInput, {nullable:true})
    @Type(() => SubCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id' | 'name'>;
}

@InputType()
export class SubCategoryCreateOrConnectWithoutCategoryInput {
    @Field(() => SubCategoryWhereUniqueInput, {nullable:false})
    @Type(() => SubCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id' | 'name'>;
    @Field(() => SubCategoryCreateWithoutCategoryInput, {nullable:false})
    @Type(() => SubCategoryCreateWithoutCategoryInput)
    create!: InstanceType<typeof SubCategoryCreateWithoutCategoryInput>;
}

@InputType()
export class SubCategoryCreateOrConnectWithoutMenuItemsInput {
    @Field(() => SubCategoryWhereUniqueInput, {nullable:false})
    @Type(() => SubCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id' | 'name'>;
    @Field(() => SubCategoryCreateWithoutMenuItemsInput, {nullable:false})
    @Type(() => SubCategoryCreateWithoutMenuItemsInput)
    create!: InstanceType<typeof SubCategoryCreateWithoutMenuItemsInput>;
}

@InputType()
export class SubCategoryCreateWithoutCategoryInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(25)
    @Validator.MinLength(3)
    path?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => MenuItemCreateNestedManyWithoutSubCategoryInput, {nullable:true})
    menuItems?: InstanceType<typeof MenuItemCreateNestedManyWithoutSubCategoryInput>;
}

@InputType()
export class SubCategoryCreateWithoutMenuItemsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(25)
    @Validator.MinLength(3)
    path?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => CategoryCreateNestedOneWithoutSubCategoriesInput, {nullable:false})
    category!: InstanceType<typeof CategoryCreateNestedOneWithoutSubCategoriesInput>;
}

@InputType()
export class SubCategoryCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(25)
    @Validator.MinLength(3)
    path?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => CategoryCreateNestedOneWithoutSubCategoriesInput, {nullable:false})
    category!: InstanceType<typeof CategoryCreateNestedOneWithoutSubCategoriesInput>;
    @Field(() => MenuItemCreateNestedManyWithoutSubCategoryInput, {nullable:true})
    menuItems?: InstanceType<typeof MenuItemCreateNestedManyWithoutSubCategoryInput>;
}

@ArgsType()
export class SubCategoryGroupByArgs {
    @Field(() => SubCategoryWhereInput, {nullable:true})
    @Type(() => SubCategoryWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof SubCategoryWhereInput>;
    @Field(() => [SubCategoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SubCategoryOrderByWithAggregationInput>;
    @Field(() => [SubCategoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SubCategoryScalarFieldEnum>;
    @Field(() => SubCategoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof SubCategoryScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => SubCategoryCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof SubCategoryCountAggregateInput>;
    @Field(() => SubCategoryMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof SubCategoryMinAggregateInput>;
    @Field(() => SubCategoryMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof SubCategoryMaxAggregateInput>;
}

@ObjectType()
export class SubCategoryGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(25)
    @Validator.MinLength(3)
    path?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    categoryId!: string;
    @Field(() => SubCategoryCountAggregate, {nullable:true})
    _count?: InstanceType<typeof SubCategoryCountAggregate>;
    @Field(() => SubCategoryMinAggregate, {nullable:true})
    _min?: InstanceType<typeof SubCategoryMinAggregate>;
    @Field(() => SubCategoryMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof SubCategoryMaxAggregate>;
}

@InputType()
export class SubCategoryListRelationFilter {
    @Field(() => SubCategoryWhereInput, {nullable:true})
    every?: InstanceType<typeof SubCategoryWhereInput>;
    @Field(() => SubCategoryWhereInput, {nullable:true})
    some?: InstanceType<typeof SubCategoryWhereInput>;
    @Field(() => SubCategoryWhereInput, {nullable:true})
    none?: InstanceType<typeof SubCategoryWhereInput>;
}

@InputType()
export class SubCategoryMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    path?: true;
    @Field(() => Boolean, {nullable:true})
    image_path?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    categoryId?: true;
}

@ObjectType()
export class SubCategoryMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(25)
    @Validator.MinLength(3)
    path?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    categoryId?: string;
}

@InputType()
export class SubCategoryMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    path?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    image_path?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;
}

@InputType()
export class SubCategoryMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    path?: true;
    @Field(() => Boolean, {nullable:true})
    image_path?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    categoryId?: true;
}

@ObjectType()
export class SubCategoryMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(25)
    @Validator.MinLength(3)
    path?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    categoryId?: string;
}

@InputType()
export class SubCategoryMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    path?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    image_path?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;
}

@InputType()
export class SubCategoryOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class SubCategoryOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    path?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    image_path?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    description?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;
    @Field(() => SubCategoryCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof SubCategoryCountOrderByAggregateInput>;
    @Field(() => SubCategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof SubCategoryMaxOrderByAggregateInput>;
    @Field(() => SubCategoryMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof SubCategoryMinOrderByAggregateInput>;
}

@InputType()
export class SubCategoryOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    path?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    image_path?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    description?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;
    @Field(() => CategoryOrderByWithRelationInput, {nullable:true})
    category?: InstanceType<typeof CategoryOrderByWithRelationInput>;
    @Field(() => MenuItemOrderByRelationAggregateInput, {nullable:true})
    menuItems?: InstanceType<typeof MenuItemOrderByRelationAggregateInput>;
}

@InputType()
export class SubCategoryRelationFilter {
    @Field(() => SubCategoryWhereInput, {nullable:true})
    is?: InstanceType<typeof SubCategoryWhereInput>;
    @Field(() => SubCategoryWhereInput, {nullable:true})
    isNot?: InstanceType<typeof SubCategoryWhereInput>;
}

@InputType()
export class SubCategoryScalarWhereWithAggregatesInput {
    @Field(() => [SubCategoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SubCategoryScalarWhereWithAggregatesInput>;
    @Field(() => [SubCategoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SubCategoryScalarWhereWithAggregatesInput>;
    @Field(() => [SubCategoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SubCategoryScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    path?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    image_path?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    categoryId?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class SubCategoryScalarWhereInput {
    @Field(() => [SubCategoryScalarWhereInput], {nullable:true})
    AND?: Array<SubCategoryScalarWhereInput>;
    @Field(() => [SubCategoryScalarWhereInput], {nullable:true})
    OR?: Array<SubCategoryScalarWhereInput>;
    @Field(() => [SubCategoryScalarWhereInput], {nullable:true})
    NOT?: Array<SubCategoryScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    path?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    image_path?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    description?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    categoryId?: InstanceType<typeof StringFilter>;
}

@InputType()
export class SubCategoryUncheckedCreateNestedManyWithoutCategoryInput {
    @Field(() => [SubCategoryCreateWithoutCategoryInput], {nullable:true})
    @Type(() => SubCategoryCreateWithoutCategoryInput)
    create?: Array<SubCategoryCreateWithoutCategoryInput>;
    @Field(() => [SubCategoryCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => SubCategoryCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<SubCategoryCreateOrConnectWithoutCategoryInput>;
    @Field(() => SubCategoryCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => SubCategoryCreateManyCategoryInputEnvelope)
    createMany?: InstanceType<typeof SubCategoryCreateManyCategoryInputEnvelope>;
    @Field(() => [SubCategoryWhereUniqueInput], {nullable:true})
    @Type(() => SubCategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id' | 'name'>>;
}

@InputType()
export class SubCategoryUncheckedCreateWithoutCategoryInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(25)
    @Validator.MinLength(3)
    path?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => MenuItemUncheckedCreateNestedManyWithoutSubCategoryInput, {nullable:true})
    menuItems?: InstanceType<typeof MenuItemUncheckedCreateNestedManyWithoutSubCategoryInput>;
}

@InputType()
export class SubCategoryUncheckedCreateWithoutMenuItemsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(25)
    @Validator.MinLength(3)
    path?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    categoryId!: string;
}

@InputType()
export class SubCategoryUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(25)
    @Validator.MinLength(3)
    path?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    categoryId!: string;
    @Field(() => MenuItemUncheckedCreateNestedManyWithoutSubCategoryInput, {nullable:true})
    menuItems?: InstanceType<typeof MenuItemUncheckedCreateNestedManyWithoutSubCategoryInput>;
}

@InputType()
export class SubCategoryUncheckedUpdateManyWithoutCategoryNestedInput {
    @Field(() => [SubCategoryCreateWithoutCategoryInput], {nullable:true})
    @Type(() => SubCategoryCreateWithoutCategoryInput)
    create?: Array<SubCategoryCreateWithoutCategoryInput>;
    @Field(() => [SubCategoryCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => SubCategoryCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<SubCategoryCreateOrConnectWithoutCategoryInput>;
    @Field(() => [SubCategoryUpsertWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => SubCategoryUpsertWithWhereUniqueWithoutCategoryInput)
    upsert?: Array<SubCategoryUpsertWithWhereUniqueWithoutCategoryInput>;
    @Field(() => SubCategoryCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => SubCategoryCreateManyCategoryInputEnvelope)
    createMany?: InstanceType<typeof SubCategoryCreateManyCategoryInputEnvelope>;
    @Field(() => [SubCategoryWhereUniqueInput], {nullable:true})
    @Type(() => SubCategoryWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [SubCategoryWhereUniqueInput], {nullable:true})
    @Type(() => SubCategoryWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [SubCategoryWhereUniqueInput], {nullable:true})
    @Type(() => SubCategoryWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [SubCategoryWhereUniqueInput], {nullable:true})
    @Type(() => SubCategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [SubCategoryUpdateWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => SubCategoryUpdateWithWhereUniqueWithoutCategoryInput)
    update?: Array<SubCategoryUpdateWithWhereUniqueWithoutCategoryInput>;
    @Field(() => [SubCategoryUpdateManyWithWhereWithoutCategoryInput], {nullable:true})
    @Type(() => SubCategoryUpdateManyWithWhereWithoutCategoryInput)
    updateMany?: Array<SubCategoryUpdateManyWithWhereWithoutCategoryInput>;
    @Field(() => [SubCategoryScalarWhereInput], {nullable:true})
    @Type(() => SubCategoryScalarWhereInput)
    deleteMany?: Array<SubCategoryScalarWhereInput>;
}

@InputType()
export class SubCategoryUncheckedUpdateManyWithoutCategoryInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(25)
    @Validator.MinLength(3)
    path?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
}

@InputType()
export class SubCategoryUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(25)
    @Validator.MinLength(3)
    path?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    categoryId?: string;
}

@InputType()
export class SubCategoryUncheckedUpdateWithoutCategoryInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(25)
    @Validator.MinLength(3)
    path?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => MenuItemUncheckedUpdateManyWithoutSubCategoryNestedInput, {nullable:true})
    menuItems?: InstanceType<typeof MenuItemUncheckedUpdateManyWithoutSubCategoryNestedInput>;
}

@InputType()
export class SubCategoryUncheckedUpdateWithoutMenuItemsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(25)
    @Validator.MinLength(3)
    path?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    categoryId?: string;
}

@InputType()
export class SubCategoryUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(25)
    @Validator.MinLength(3)
    path?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    categoryId?: string;
    @Field(() => MenuItemUncheckedUpdateManyWithoutSubCategoryNestedInput, {nullable:true})
    menuItems?: InstanceType<typeof MenuItemUncheckedUpdateManyWithoutSubCategoryNestedInput>;
}

@InputType()
export class SubCategoryUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(25)
    @Validator.MinLength(3)
    path?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
}

@InputType()
export class SubCategoryUpdateManyWithWhereWithoutCategoryInput {
    @Field(() => SubCategoryScalarWhereInput, {nullable:false})
    @Type(() => SubCategoryScalarWhereInput)
    where!: InstanceType<typeof SubCategoryScalarWhereInput>;
    @Field(() => SubCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => SubCategoryUpdateManyMutationInput)
    data!: InstanceType<typeof SubCategoryUpdateManyMutationInput>;
}

@InputType()
export class SubCategoryUpdateManyWithoutCategoryNestedInput {
    @Field(() => [SubCategoryCreateWithoutCategoryInput], {nullable:true})
    @Type(() => SubCategoryCreateWithoutCategoryInput)
    create?: Array<SubCategoryCreateWithoutCategoryInput>;
    @Field(() => [SubCategoryCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => SubCategoryCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<SubCategoryCreateOrConnectWithoutCategoryInput>;
    @Field(() => [SubCategoryUpsertWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => SubCategoryUpsertWithWhereUniqueWithoutCategoryInput)
    upsert?: Array<SubCategoryUpsertWithWhereUniqueWithoutCategoryInput>;
    @Field(() => SubCategoryCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => SubCategoryCreateManyCategoryInputEnvelope)
    createMany?: InstanceType<typeof SubCategoryCreateManyCategoryInputEnvelope>;
    @Field(() => [SubCategoryWhereUniqueInput], {nullable:true})
    @Type(() => SubCategoryWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [SubCategoryWhereUniqueInput], {nullable:true})
    @Type(() => SubCategoryWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [SubCategoryWhereUniqueInput], {nullable:true})
    @Type(() => SubCategoryWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [SubCategoryWhereUniqueInput], {nullable:true})
    @Type(() => SubCategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [SubCategoryUpdateWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => SubCategoryUpdateWithWhereUniqueWithoutCategoryInput)
    update?: Array<SubCategoryUpdateWithWhereUniqueWithoutCategoryInput>;
    @Field(() => [SubCategoryUpdateManyWithWhereWithoutCategoryInput], {nullable:true})
    @Type(() => SubCategoryUpdateManyWithWhereWithoutCategoryInput)
    updateMany?: Array<SubCategoryUpdateManyWithWhereWithoutCategoryInput>;
    @Field(() => [SubCategoryScalarWhereInput], {nullable:true})
    @Type(() => SubCategoryScalarWhereInput)
    deleteMany?: Array<SubCategoryScalarWhereInput>;
}

@InputType()
export class SubCategoryUpdateOneRequiredWithoutMenuItemsNestedInput {
    @Field(() => SubCategoryCreateWithoutMenuItemsInput, {nullable:true})
    @Type(() => SubCategoryCreateWithoutMenuItemsInput)
    create?: InstanceType<typeof SubCategoryCreateWithoutMenuItemsInput>;
    @Field(() => SubCategoryCreateOrConnectWithoutMenuItemsInput, {nullable:true})
    @Type(() => SubCategoryCreateOrConnectWithoutMenuItemsInput)
    connectOrCreate?: InstanceType<typeof SubCategoryCreateOrConnectWithoutMenuItemsInput>;
    @Field(() => SubCategoryUpsertWithoutMenuItemsInput, {nullable:true})
    @Type(() => SubCategoryUpsertWithoutMenuItemsInput)
    upsert?: InstanceType<typeof SubCategoryUpsertWithoutMenuItemsInput>;
    @Field(() => SubCategoryWhereUniqueInput, {nullable:true})
    @Type(() => SubCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id' | 'name'>;
    @Field(() => SubCategoryUpdateToOneWithWhereWithoutMenuItemsInput, {nullable:true})
    @Type(() => SubCategoryUpdateToOneWithWhereWithoutMenuItemsInput)
    update?: InstanceType<typeof SubCategoryUpdateToOneWithWhereWithoutMenuItemsInput>;
}

@InputType()
export class SubCategoryUpdateToOneWithWhereWithoutMenuItemsInput {
    @Field(() => SubCategoryWhereInput, {nullable:true})
    @Type(() => SubCategoryWhereInput)
    where?: InstanceType<typeof SubCategoryWhereInput>;
    @Field(() => SubCategoryUpdateWithoutMenuItemsInput, {nullable:false})
    @Type(() => SubCategoryUpdateWithoutMenuItemsInput)
    data!: InstanceType<typeof SubCategoryUpdateWithoutMenuItemsInput>;
}

@InputType()
export class SubCategoryUpdateWithWhereUniqueWithoutCategoryInput {
    @Field(() => SubCategoryWhereUniqueInput, {nullable:false})
    @Type(() => SubCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id' | 'name'>;
    @Field(() => SubCategoryUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => SubCategoryUpdateWithoutCategoryInput)
    data!: InstanceType<typeof SubCategoryUpdateWithoutCategoryInput>;
}

@InputType()
export class SubCategoryUpdateWithoutCategoryInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(25)
    @Validator.MinLength(3)
    path?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => MenuItemUpdateManyWithoutSubCategoryNestedInput, {nullable:true})
    menuItems?: InstanceType<typeof MenuItemUpdateManyWithoutSubCategoryNestedInput>;
}

@InputType()
export class SubCategoryUpdateWithoutMenuItemsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(25)
    @Validator.MinLength(3)
    path?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => CategoryUpdateOneRequiredWithoutSubCategoriesNestedInput, {nullable:true})
    category?: InstanceType<typeof CategoryUpdateOneRequiredWithoutSubCategoriesNestedInput>;
}

@InputType()
export class SubCategoryUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(25)
    @Validator.MinLength(3)
    path?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    image_path?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    description?: string;
    @Field(() => CategoryUpdateOneRequiredWithoutSubCategoriesNestedInput, {nullable:true})
    category?: InstanceType<typeof CategoryUpdateOneRequiredWithoutSubCategoriesNestedInput>;
    @Field(() => MenuItemUpdateManyWithoutSubCategoryNestedInput, {nullable:true})
    menuItems?: InstanceType<typeof MenuItemUpdateManyWithoutSubCategoryNestedInput>;
}

@InputType()
export class SubCategoryUpsertWithWhereUniqueWithoutCategoryInput {
    @Field(() => SubCategoryWhereUniqueInput, {nullable:false})
    @Type(() => SubCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id' | 'name'>;
    @Field(() => SubCategoryUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => SubCategoryUpdateWithoutCategoryInput)
    update!: InstanceType<typeof SubCategoryUpdateWithoutCategoryInput>;
    @Field(() => SubCategoryCreateWithoutCategoryInput, {nullable:false})
    @Type(() => SubCategoryCreateWithoutCategoryInput)
    create!: InstanceType<typeof SubCategoryCreateWithoutCategoryInput>;
}

@InputType()
export class SubCategoryUpsertWithoutMenuItemsInput {
    @Field(() => SubCategoryUpdateWithoutMenuItemsInput, {nullable:false})
    @Type(() => SubCategoryUpdateWithoutMenuItemsInput)
    update!: InstanceType<typeof SubCategoryUpdateWithoutMenuItemsInput>;
    @Field(() => SubCategoryCreateWithoutMenuItemsInput, {nullable:false})
    @Type(() => SubCategoryCreateWithoutMenuItemsInput)
    create!: InstanceType<typeof SubCategoryCreateWithoutMenuItemsInput>;
    @Field(() => SubCategoryWhereInput, {nullable:true})
    @Type(() => SubCategoryWhereInput)
    where?: InstanceType<typeof SubCategoryWhereInput>;
}

@InputType()
export class SubCategoryWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => [SubCategoryWhereInput], {nullable:true})
    AND?: Array<SubCategoryWhereInput>;
    @Field(() => [SubCategoryWhereInput], {nullable:true})
    OR?: Array<SubCategoryWhereInput>;
    @Field(() => [SubCategoryWhereInput], {nullable:true})
    NOT?: Array<SubCategoryWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    path?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    image_path?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    description?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    categoryId?: InstanceType<typeof StringFilter>;
    @Field(() => CategoryRelationFilter, {nullable:true})
    category?: InstanceType<typeof CategoryRelationFilter>;
    @Field(() => MenuItemListRelationFilter, {nullable:true})
    menuItems?: InstanceType<typeof MenuItemListRelationFilter>;
}

@InputType()
export class SubCategoryWhereInput {
    @Field(() => [SubCategoryWhereInput], {nullable:true})
    AND?: Array<SubCategoryWhereInput>;
    @Field(() => [SubCategoryWhereInput], {nullable:true})
    OR?: Array<SubCategoryWhereInput>;
    @Field(() => [SubCategoryWhereInput], {nullable:true})
    NOT?: Array<SubCategoryWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    path?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    image_path?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    description?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    categoryId?: InstanceType<typeof StringFilter>;
    @Field(() => CategoryRelationFilter, {nullable:true})
    category?: InstanceType<typeof CategoryRelationFilter>;
    @Field(() => MenuItemListRelationFilter, {nullable:true})
    menuItems?: InstanceType<typeof MenuItemListRelationFilter>;
}

@ObjectType()
export class SubCategory {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    path!: string | null;
    @Field(() => String, {nullable:true})
    image_path!: string | null;
    @Field(() => String, {nullable:true})
    description!: string | null;
    @Field(() => String, {nullable:false})
    categoryId!: string;
    @Field(() => Category, {nullable:false})
    category?: InstanceType<typeof Category>;
    @Field(() => [MenuItem], {nullable:true})
    menuItems?: Array<MenuItem>;
    @Field(() => SubCategoryCount, {nullable:false})
    _count?: InstanceType<typeof SubCategoryCount>;
}

@ArgsType()
export class UpdateManySubCategoryArgs {
    @Field(() => SubCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => SubCategoryUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof SubCategoryUpdateManyMutationInput>;
    @Field(() => SubCategoryWhereInput, {nullable:true})
    @Type(() => SubCategoryWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof SubCategoryWhereInput>;
}

@ArgsType()
export class UpdateOneSubCategoryArgs {
    @Field(() => SubCategoryUpdateInput, {nullable:false})
    @Type(() => SubCategoryUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof SubCategoryUpdateInput>;
    @Field(() => SubCategoryWhereUniqueInput, {nullable:false})
    @Type(() => SubCategoryWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id' | 'name'>;
}

@ArgsType()
export class UpsertOneSubCategoryArgs {
    @Field(() => SubCategoryWhereUniqueInput, {nullable:false})
    @Type(() => SubCategoryWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<SubCategoryWhereUniqueInput, 'id' | 'name'>;
    @Field(() => SubCategoryCreateInput, {nullable:false})
    @Type(() => SubCategoryCreateInput)
    create!: InstanceType<typeof SubCategoryCreateInput>;
    @Field(() => SubCategoryUpdateInput, {nullable:false})
    @Type(() => SubCategoryUpdateInput)
    update!: InstanceType<typeof SubCategoryUpdateInput>;
}

@ObjectType()
export class AggregateUser {
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@ArgsType()
export class CreateManyUserArgs {
    @Field(() => [UserCreateManyInput], {nullable:false})
    @Type(() => UserCreateManyInput)
    @ValidateNested()
    data!: Array<UserCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUserArgs {
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof UserCreateInput>;
}

@ArgsType()
export class DeleteManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class DeleteOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}

@ArgsType()
export class FindFirstUserOrThrowArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindFirstUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueUserOrThrowArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}

@ArgsType()
export class FindUniqueUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}

@ArgsType()
export class UpdateManyUserArgs {
    @Field(() => UserUpdateManyMutationInput, {nullable:false})
    @Type(() => UserUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof UserUpdateManyMutationInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class UpdateOneUserArgs {
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof UserUpdateInput>;
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}

@ArgsType()
export class UpsertOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    create!: InstanceType<typeof UserCreateInput>;
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    update!: InstanceType<typeof UserUpdateInput>;
}

@ArgsType()
export class UserAggregateArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@InputType()
export class UserCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class UserCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    email!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @HideField()
    password!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class UserCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
}

@InputType()
export class UserCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password!: string;
}

@InputType()
export class UserCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password!: string;
}

@ArgsType()
export class UserGroupByArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithAggregationInput>;
    @Field(() => [UserScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserScalarFieldEnum>;
    @Field(() => UserScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@ObjectType()
export class UserGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @HideField()
    password!: string;
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@InputType()
export class UserMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
}

@ObjectType()
export class UserMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @HideField()
    password?: string;
}

@InputType()
export class UserMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
}

@InputType()
export class UserMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
}

@ObjectType()
export class UserMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @HideField()
    password?: string;
}

@InputType()
export class UserMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
}

@InputType()
export class UserOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    name?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => UserCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
    @Field(() => UserMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
    @Field(() => UserMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
}

@InputType()
export class UserOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    name?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
}

@InputType()
export class UserScalarWhereWithAggregatesInput {
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    password?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class UserUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password!: string;
}

@InputType()
export class UserUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password?: string;
}

@InputType()
export class UserUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password?: string;
}

@InputType()
export class UserUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password?: string;
}

@InputType()
export class UserUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password?: string;
}

@InputType()
export class UserWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    password?: InstanceType<typeof StringFilter>;
}

@InputType()
export class UserWhereInput {
    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    password?: InstanceType<typeof StringFilter>;
}

@ObjectType()
export class User {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name!: string | null;
    @HideField()
    password!: string;
}
