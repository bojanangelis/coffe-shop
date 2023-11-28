import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import React from 'react';
interface Props {
  count: number;
  setCount: (count: number) => void;
  title: string;
}

const InputPlusAndMinus = ({ count, setCount, title }: Props) => {
  return (
    <div className="border rounded-md shadow-md">
      <div className="flex px-2 items-center justify-between">
        <p className="text-sm">{title}</p>
        <div className="flex items-center space-x-4">
          <button onClick={() => setCount(count - 1)}>
            <MinusCircleIcon className="h-8 text-green-700" />
          </button>
          <p>{count}</p>
          <button onClick={() => setCount(count + 1)}>
            <PlusCircleIcon className="h-8 text-green-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputPlusAndMinus;
