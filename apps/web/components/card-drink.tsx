import Image from 'next/image';
import React from 'react';

interface CardDrinkInterface {
  category_img: string;
  category_title: string;
}

const CardDrink = ({ category_img, category_title }: CardDrinkInterface) => {
  return (
    <div className="flex flex-row space-x-2 items-center cursor-pointer">
      <div className="relative w-32 h-32 ">
        <Image
          fill
          className="rounded-full"
          src={
            'https://coffee-shop.fra1.cdn.digitaloceanspaces.com/category/oleato.avif' ??
            category_img
          }
          alt={category_title}
        />
      </div>
      <h4 className="text-xl font-bolder">{category_title}dada</h4>
    </div>
  );
};

export default CardDrink;
