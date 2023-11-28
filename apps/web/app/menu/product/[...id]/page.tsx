'use client';
import { coffeeType, milkType, milkWarmType } from '../../../../utils/coffee-types';
import ListBox, { List } from '../../../../components/headles-ui/listbox';
import Tabs from '../../../../components/headles-ui/tabs';
import Image from 'next/image';
import React, { useState } from 'react';
import InputPlusAndMinus from '../../../../components/input-plus-and-minus';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { withApi } from 'apps/web/api/client-api';
import { useCustomizationMutation, useItemQuery } from '@coffee-shop/web/data-access-graphql';
import { useParams } from 'next/navigation';
import { webEnv } from 'apps/web/environments/environment';

const Product = () => {
  const { storage } = webEnv;
  const params = useParams();
  const [selectedCoffeeType, setSelectedCoffeeType] = useState(coffeeType[0]);
  const [selectedMilkType, setSelectedMilkType] = useState(milkType[0]);
  const [selectedMilkTemp, setSelectedMilkTemp] = useState(milkWarmType[0]);
  const [size, setSize] = useState('');
  const [count, setCount] = useState(1);

  const [{ data }] = useItemQuery({ variables: { where: { id: params.id[0] } } });
  const [, handleUpdate] = useCustomizationMutation();

  const handleSelectedShots = (num: number) => {
    if (num < 1 || num > 8) return;
    setCount(num);
  };
  const handleSize = (e: string) => {
    setSize(e);
  };
  const handleSelectedCoffee = (e: List) => {
    setSelectedCoffeeType(e);
  };

  const handleSelectedMilk = (e: List) => {
    setSelectedMilkType(e);
  };
  const handleSelectedMilkTemp = (e: List) => {
    setSelectedMilkTemp(e);
  };

  const handleCustomization = async () => {
    handleUpdate({
      data: {
        type: 'milk',
        options: ['2% Milk'],
        menuItem: {
          connect: {
            id: '119ee19f-f7b9-4d39-9a98-01d5bb2abd53'
          }
        }
      }
    });
  };

  return (
    <div className="w-full pb-20">
      <div className="flex bg-[#1F3833] flex-col md:flex-row items-center justify-around">
        <div className="relative w-52 h-52 m-4">
          <Image
            fill
            className="rounded-full"
            src={`${storage.url}/${data?.item?.image_path}`}
            alt={data?.item?.name ?? 'img product'}
          />
        </div>
        <div className="flex flex-col space-y-4 p-4 text-center">
          <h2 className="font-bold text-2xl text-white">{data?.item?.name}</h2>
          <h4 className="font-bolder text-xl text-gray-300">{data?.item?.calories} calories</h4>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-4 py-4 px-2 md:p-10">
        <div className="w-full">
          <h2 className="text-xl font-semibold">Size options</h2>
          <div className="border-b-4 rounded-md border-[#D4E8E2]" />
          <Tabs
            getSize={handleSize}
            categories={
              // data?.item?.sizes ??  WIP
              ['small', 'large', 'medium']
            }
          />
        </div>
        <div className="w-full relative">
          <h2 className="text-xl font-semibold">What&apos;s included</h2>
          <div className="border-b-4 rounded-md border-[#D4E8E2]" />
          <div className="pt-4">
            <label className="text-sm text-gray-700">Coffee Type</label>
            <ListBox
              list={coffeeType}
              select={selectedCoffeeType}
              setSelected={handleSelectedCoffee}
            />
          </div>
          <div className="pt-4">
            <label className="text-sm text-gray-700">Coffee Strength</label>
            <InputPlusAndMinus title="Shots" count={count} setCount={handleSelectedShots} />
          </div>
          <div className="pt-4">
            <label className="text-sm text-gray-700">Milk</label>
            <ListBox list={milkType} select={selectedMilkType} setSelected={handleSelectedMilk} />
          </div>
          <div className="pt-4">
            <label className="text-sm text-gray-700">Milk</label>
            <ListBox
              list={milkWarmType}
              select={selectedMilkTemp}
              setSelected={handleSelectedMilkTemp}
            />
          </div>

          <div className="flex items-center justify-start pt-4">
            <button
              onClick={handleCustomization}
              className="px-4 py-2 border rounded-xl text-white bg-green-800"
            >
              Customized
            </button>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 w-full bg-green-800 py-2">
        <div className=" flex items-center justify-around">
          <div>
            <p className="text-gray-300">Your item availability</p>
            <div className="flex items-center space-x-1">
              <p className="text-gray-100">Choose store</p>
              <ChevronDownIcon className="h-4" />
            </div>
          </div>

          <button className="px-4 py-2 border rounded-xl bg-white">Add Order</button>
        </div>
      </div>
    </div>
  );
};

export default withApi(Product);
