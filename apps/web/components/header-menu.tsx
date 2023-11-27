import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const HeaderMenu = () => {
  const pathname = usePathname();
  return (
    <div className="bg-[#f9f9f9] z-10 px-4 md:px-24 py-5">
      <ul className="flex space-x-8">
        <Link href={'/menu'} className={`link ${pathname.includes('menu') && 'link_active'}`}>
          Menu
        </Link>
        <Link
          href={'/featured'}
          className={`link ${pathname.includes('featured') && 'link_active'}`}
        >
          Featured
        </Link>
        <Link
          href={'/favirutes'}
          className={`link ${pathname.includes('favorites') && 'link_active'}`}
        >
          Favorites
        </Link>
      </ul>
    </div>
  );
};

export default HeaderMenu;
