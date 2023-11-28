'use client';
import { usePathname } from 'next/navigation';
import HeaderMenu from '../../components/header-menu';
import SideBarLinks from '../../components/side-bar-links';

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return (
    <>
      <HeaderMenu />
      <div className="flex relative items-center w-full">
        {!path.includes('product') && (
          <div className="hidden md:flex p-4 md:px-24 md:flex-col md:w-1/4 h-screen">
            <SideBarLinks />
          </div>
        )}
        <div
          className={`${path.includes('product') ? 'w-full h-full' : 'w-full md:w-3/4 h-screen'}`}
        >
          {children}
        </div>
      </div>
    </>
  );
}
