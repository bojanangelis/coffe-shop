import Image from 'next/image';
import React from 'react';
import { webEnv } from '../environments/environment';
import Link from 'next/link';

interface DrinkItemCardInterface {
  id: string;
  drink_img?: string | null | undefined;
  drink_title: string;
}

const DrinkItemCard = ({ id, drink_img, drink_title }: DrinkItemCardInterface) => {
  const { storage } = webEnv;
  return (
    <Link
      href={`/menu/product/${id}`}
      className="flex relative flex-col items-center cursor-pointer"
    >
      <div className="relative w-32 h-32">
        <Image
          fill
          className="rounded-full"
          src={`${storage.url}/${drink_img}`}
          alt={drink_title}
        />
      </div>
      <p className="text-md pt-2 text-center text-gray-800 w-full line-clamp-2 hover:line-clamp-3  hover:text-clip font-bolder">
        {drink_title}
      </p>
    </Link>
  );
};

export default DrinkItemCard;
