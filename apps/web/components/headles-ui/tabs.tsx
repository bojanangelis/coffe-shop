import { Tab } from '@headlessui/react';
import Image from 'next/image';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

interface TabsInterface {
  categories: string[];
  getSize: (size: string) => void;
}

export default function Tabs({ categories, getSize }: TabsInterface) {
  return (
    <div className="w-full max-w-sm px-2 py-8 sm:px-0">
      <Tab.Group
        onChange={(index) => {
          getSize(categories[index]);
        }}
      >
        <Tab.List className="flex space-x-2">
          {categories.map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'flex flex-col items-center justify-start w-full rounded-full py-3 text-sm font-medium leading-5',
                  'ring-white/60 ring-offset-2 ring-offset-green-700 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-green-200/90 text-green-900 shadow'
                    : 'text-green-800 hover:bg-white/[0.12]'
                )
              }
            >
              <Image width={28} height={20} src="/coffee.svg" alt="short" />
              {category}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  );
}
