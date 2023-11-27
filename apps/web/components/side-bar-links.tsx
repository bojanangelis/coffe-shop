import Link from 'next/link';
import React from 'react';

const SideBarLinks = () => {
  return (
    <>
      <h2 className="font-bolder text-xl">Drinks</h2>
      <div className="flex flex-col space-y-4 mt-4 text-gray-700 text-sm">
        <Link href={'/menu/oleato'}>Oleato™</Link>
        <Link href={'/menu/hot-coffees'}>Hot Coffees</Link>
        <Link href={'/menu/hot-teas'}> Hot Teas</Link>
        <Link href={'/menu/hot-drinks'}>Hot Drinks</Link>
        <Link href={'/menu/frappuccino'}>Frappuccino® Blended Beverages</Link>
        <Link href={'/menu/cold-coffees'}>Cold Coffees</Link>
        <Link href={'/menu/iced-teas'}>Iced Teas</Link>
        <Link href={'/menu/cold-drinks'}>Cold Drinks</Link>
      </div>
    </>
  );
};

export default SideBarLinks;
