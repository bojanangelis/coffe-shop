'use client';
import { useGetAllCategoryQuery } from '@coffee-shop/web/data-access-graphql';
import CategoryDrinkCard from '../../components/category-drink-card';
import React from 'react';
import { withApi } from 'apps/web/api/client-api';

const Menu = () => {
  const [{ data }] = useGetAllCategoryQuery();

  return (
    <div className="pt-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {data?.categories?.map((category) => (
          <div key={category?.id}>
            {category.subCategories?.map((sub) => (
              <CategoryDrinkCard
                id={sub.path ?? ''}
                key={sub.id}
                category_img={sub?.image_path}
                category_title={sub?.name}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default withApi(Menu);
