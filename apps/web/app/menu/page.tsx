'use client';
import FavoritesCoffeeComponent from '../../components/favorites-coffee-component';
import FeaturedMenuComponent from '../../components/featured-menu-component';
import HeaderMenu from '../../components/header-menu';
import MenuCoffeeComponent from '../../components/menu-coffee-component';
import React, { useState } from 'react';

const Menu = () => {
  const [activeLink, setActiveLink] = useState('menu');

  const handleActiveLink = (link: string) => {
    setActiveLink(link);
  };

  return (
    <>
      <HeaderMenu activeLink={activeLink} handleActiveLink={handleActiveLink} />
      {activeLink === 'menu' && <MenuCoffeeComponent />}
      {activeLink === 'featured' && <FeaturedMenuComponent />}
      {activeLink === 'favorites' && <FavoritesCoffeeComponent />}
    </>
  );
};

export default Menu;
