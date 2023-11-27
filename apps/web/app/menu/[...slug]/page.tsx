'use client';
import { useParams } from 'next/navigation';
import React from 'react';

const MenuSlug = () => {
  const params = useParams();

  return (
    <>
      <h2 className="uppercase text-xl font-bolder">{params.slug}</h2>
    </>
  );
};

export default MenuSlug;
