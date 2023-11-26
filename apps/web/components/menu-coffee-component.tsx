import React from 'react';

const MenuCoffeeComponent = () => {
  return (
    <div className="px-4 flex pt-4 items-center md:space-x-8 md:px-24 w-full">
      <div className="hidden md:flex md:w-1/4 bg-yellow-400">da</div>
      <div className="w-full md:w-3/4 bg-green-400">
        <h2 className="text-xl font-semibold">Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <p>daa</p>
          <p>ww</p>
          <p>aweaw</p>
          <p>aweaw</p>
          <p>aweaw</p>
          <p>aweaw</p>
          <p>aweaw</p>
        </div>
      </div>
    </div>
  );
};

export default MenuCoffeeComponent;
