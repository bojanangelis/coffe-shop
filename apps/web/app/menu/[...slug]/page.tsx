'use client';
import HeaderMenu from 'apps/web/components/header-menu';
import { useParams } from 'next/navigation';
import React from 'react';

const MenuSlug = () => {
  const params = useParams();
  console.log(params.slug);

  return <>dadadaadad</>;
};

export default MenuSlug;
