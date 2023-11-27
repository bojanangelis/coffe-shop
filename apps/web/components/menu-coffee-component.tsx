import React from 'react';
import CardDrink from './card-drink';

const MenuCoffeeComponent = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold pb-10">Menu</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <CardDrink category_img={''} category_title={''} />
        <CardDrink category_img={''} category_title={''} />
        <CardDrink category_img={''} category_title={''} />
        <CardDrink category_img={''} category_title={''} />
        <CardDrink category_img={''} category_title={''} />
      </div>
    </div>
  );
};

export default MenuCoffeeComponent;
