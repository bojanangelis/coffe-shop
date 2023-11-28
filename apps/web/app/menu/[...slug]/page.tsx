'use client';
import { useGetSubCategoryQuery } from '@coffee-shop/web/data-access-graphql';
import DrinkItemCard from '../../../components/drink-item-card';
import { useParams } from 'next/navigation';
import React from 'react';
import { withApi } from 'apps/web/api/client-api';

const MenuSlug = () => {
  const params = useParams();
  //wip
  const [{ data }] = useGetSubCategoryQuery({
    variables: {
      where: {
        name: 'Latte'
      }
    }
  });

  return (
    <>
      <h2 className="uppercase text-xl font-bolder pb-10">{params.slug}</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data?.subCategory?.menuItems?.map((items) => (
          <DrinkItemCard
            id={items.id}
            key={items.id}
            drink_img={items?.image_path}
            drink_title={'Latte'}
          />
        ))}
      </div>
    </>
  );
};

export default withApi(MenuSlug);
