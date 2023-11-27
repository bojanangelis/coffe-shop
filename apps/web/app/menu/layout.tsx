'use client';
import HeaderMenu from '../../components/header-menu';
import SideBarLinks from '../../components/side-bar-links';

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderMenu />
      <div className="px-4 flex relative pt-4 items-center md:space-x-8 md:px-24 w-full">
        <div className="hidden md:flex md:flex-col md:w-1/4 h-screen">
          <SideBarLinks />
        </div>
        <div className="w-full md:w-3/4 h-screen">{children}</div>
      </div>
    </>
  );
}
