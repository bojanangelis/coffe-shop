import React from 'react';
interface HeaderMenuInterface {
  activeLink: string;
  handleActiveLink: (link: string) => void;
}
const HeaderMenu = ({ activeLink, handleActiveLink }: HeaderMenuInterface) => {
  return (
    <div className="bg-[#f9f9f9] z-10 px-4 md:px-24 py-5">
      <ul className="flex space-x-8">
        <li
          onClick={() => handleActiveLink('menu')}
          className={`link ${activeLink === 'menu' && 'link_active'}`}
        >
          Menu
        </li>
        <li
          onClick={() => handleActiveLink('featured')}
          className={`link ${activeLink === 'featured' && 'link_active'}`}
        >
          Featured
        </li>
        <li
          onClick={() => handleActiveLink('favorites')}
          className={`link ${activeLink === 'favorites' && 'link_active'}`}
        >
          Favorites
        </li>
      </ul>
    </div>
  );
};

export default HeaderMenu;
