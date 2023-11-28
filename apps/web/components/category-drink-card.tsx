import Image from 'next/image';
import React from 'react';
import { webEnv } from '../environments/environment';

interface CategoryDrinkCardInterface {
  category_title: string;
  category_img?: string | null;
}

const CategoryDrinkCard = ({ category_img, category_title }: CategoryDrinkCardInterface) => {
  const { storage } = webEnv;

  return (
    <div className="flex flex-row space-x-2 items-center cursor-pointer">
      <div className="relative w-32 h-32 ">
        <Image
          fill
          className="rounded-full"
          src={`${storage.url}/${category_img}`}
          alt={category_title}
        />
      </div>
      <h4 className="text-xl font-bolder">{category_title}</h4>
    </div>
  );
};

export default CategoryDrinkCard;
