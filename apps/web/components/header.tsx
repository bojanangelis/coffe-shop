import Link from 'next/link';
import React from 'react';
import { Bars3Icon, MapPinIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const Header = () => {
  return (
    <nav className="">
      <div className="flex items-center justify-between mx-auto max-w-[1440px] px-4">
        <div className="flex items-center justify-between space-x-5">
          <Link href={'/'}>
            <Image src={'/logo.svg'} alt="starbucks logo" width={36} height={36} />
          </Link>
          <ul className="flex items-center justify-between space-x-5 max-md:hidden">
            <Link href={'/'}>
              <li>Menu</li>
            </Link>
            <Link href={'/'}>
              <li>Rewards</li>
            </Link>
            <Link href={'/'}>
              <li>Gift Cards</li>
            </Link>
          </ul>
        </div>

        <div className="flex items-center justify-between space-x-5 max-md:hidden">
          <Link href={'/'} className="flex items-center justify-between hover-green space-x-1.5">
            <MapPinIcon className="h-6 w-6" />
            <p>Find a store</p>
          </Link>
          <Link href={'/'}>
            <button className="nav-btn bg-white hover:bg-neutral-300">Sing In</button>
          </Link>
          <Link href={'/'}>
            <button className="nav-btn bg-black text-white hover:bg-opacity-75">Join now</button>
          </Link>
        </div>
        <div className="flex items-center justify-between rounded-full p-2 transition-colors hover:bg-neutral-100 md:hidden">
          <Bars3Icon className="h-6 w-6" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
